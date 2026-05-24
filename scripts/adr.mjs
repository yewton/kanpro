#!/usr/bin/env node
// ADR 管理スクリプト（依存ゼロ）。連番採番・雛形配置・索引更新・supersede を行う。
// 運用方針と設計判断の根拠は docs/adr/0001-adr-management.md を参照。
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
// 既定は docs/adr。テストでは ADR_DIR で別ディレクトリへ向ける（副作用の隔離）。
const adrDir = process.env.ADR_DIR ? resolve(process.env.ADR_DIR) : join(root, 'docs', 'adr')
const indexPath = join(adrDir, 'README.md')
const templatePath = join(adrDir, 'templates', 'template.md')

const pad = (n) => String(n).padStart(4, '0')
const today = () => new Date().toISOString().slice(0, 10)

const adrFiles = () =>
  readdirSync(adrDir)
    .filter((f) => /^\d{4}-.*\.md$/.test(f))
    .sort()

const parse = (file) => {
  const text = readFileSync(join(adrDir, file), 'utf8')
  const number = Number(file.slice(0, 4))
  const title = (text.match(/^#\s*ADR-\d{4}:\s*(.+)$/m) || [])[1] ?? file
  const status = (text.match(/^-\s*Status:\s*(.+)$/m) || [])[1] ?? '?'
  return { file, number, title: title.trim(), status: status.trim() }
}

const nextNumber = () => {
  const nums = adrFiles().map((f) => Number(f.slice(0, 4)))
  return nums.length ? Math.max(...nums) + 1 : 1
}

const rebuildIndex = () => {
  const rows = adrFiles()
    .map(parse)
    .map((a) => `| [${pad(a.number)}](${a.file}) | ${a.title} | ${a.status} |`)
    .join('\n')
  const table = `<!-- adr:list:start -->
| # | タイトル | Status |
|---|---------|--------|
${rows}
<!-- adr:list:end -->`
  const idx = readFileSync(indexPath, 'utf8')
  writeFileSync(
    indexPath,
    idx.replace(/<!-- adr:list:start -->[\s\S]*<!-- adr:list:end -->/, table),
  )
}

const create = (slug, title, { supersedes } = {}) => {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
    throw new Error(`slug は ASCII の kebab-case で指定してください: ${slug}`)
  }
  const number = nextNumber()
  const file = `${pad(number)}-${slug}.md`
  if (existsSync(join(adrDir, file))) throw new Error(`既に存在します: ${file}`)
  let body = readFileSync(templatePath, 'utf8')
    .replaceAll('{{NUMBER}}', pad(number))
    .replaceAll('{{TITLE}}', title)
    .replaceAll('{{STATUS}}', 'Proposed')
    .replaceAll('{{DATE}}', today())
  if (supersedes != null) {
    body = body.replace(/^(-\s*Date:.*)$/m, `$1\n- Supersedes: ADR-${pad(supersedes)}`)
  }
  writeFileSync(join(adrDir, file), body)
  return { number, file }
}

const setStatus = (number, status) => {
  const file = adrFiles().find((f) => Number(f.slice(0, 4)) === number)
  if (!file) throw new Error(`ADR-${pad(number)} が見つかりません`)
  const path = join(adrDir, file)
  const text = readFileSync(path, 'utf8')
  if (!/^-\s*Status:.*$/m.test(text)) throw new Error(`Status 行が見つかりません: ${file}`)
  writeFileSync(path, text.replace(/^(-\s*Status:).*$/m, `$1 ${status}`))
}

const usage = `使い方:
  npm run adr -- new <slug> "<タイトル>"            新規 ADR を作成（Status: Proposed）
  npm run adr -- supersede <旧番号> <slug> "<題>"   新 ADR を作成し旧 ADR を Superseded に
  npm run adr -- status <番号> "<ステータス>"       Status 行のみ更新（例: Accepted）
  npm run adr -- reindex                            README.md の索引を再生成`

const [cmd, ...rest] = process.argv.slice(2)
try {
  switch (cmd) {
    case 'new': {
      const [slug, title] = rest
      if (!slug || !title) throw new Error('slug とタイトルが必要です')
      const { number, file } = create(slug, title)
      rebuildIndex()
      console.log(`作成: docs/adr/${file} (ADR-${pad(number)}, Status: Proposed)`)
      break
    }
    case 'supersede': {
      const old = Number(rest[0])
      const [, slug, title] = rest
      if (!old || !slug || !title) throw new Error('旧番号・slug・タイトルが必要です')
      const { number, file } = create(slug, title, { supersedes: old })
      setStatus(old, `Superseded by ADR-${pad(number)}`)
      rebuildIndex()
      console.log(`作成: docs/adr/${file} (ADR-${pad(number)})、ADR-${pad(old)} を Superseded に更新`)
      break
    }
    case 'status': {
      const [numArg, status] = rest
      if (!numArg || !status) throw new Error('番号とステータスが必要です')
      setStatus(Number(numArg), status)
      rebuildIndex()
      console.log(`ADR-${pad(Number(numArg))} の Status を「${status}」に更新`)
      break
    }
    case 'reindex':
      rebuildIndex()
      console.log('索引を再生成しました')
      break
    default:
      console.log(usage)
      process.exit(cmd ? 1 : 0)
  }
} catch (e) {
  console.error(`エラー: ${e.message}`)
  process.exit(1)
}
