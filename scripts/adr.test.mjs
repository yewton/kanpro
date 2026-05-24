// adr.mjs の振る舞いを node:test で固定する（依存ゼロ）。各テストは tmpdir に
// ADR_DIR を向けて実 docs/adr を汚さない。CLI を実プロセスで起動し end-to-end で検証。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import {
  mkdtempSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  copyFileSync,
  readdirSync,
  rmSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const script = join(here, 'adr.mjs')
const realTemplate = join(here, '..', 'docs', 'adr', 'templates', 'template.md')

const setup = () => {
  const dir = mkdtempSync(join(tmpdir(), 'adr-'))
  mkdirSync(join(dir, 'templates'))
  copyFileSync(realTemplate, join(dir, 'templates', 'template.md'))
  writeFileSync(join(dir, 'README.md'), '# x\n\n<!-- adr:list:start -->\n<!-- adr:list:end -->\n')
  return dir
}

const run = (dir, args) =>
  execFileSync(process.execPath, [script, ...args], {
    env: { ...process.env, ADR_DIR: dir },
    encoding: 'utf8',
    stdio: 'pipe',
  })

// dir を用意し、後始末を保証してテスト本体を実行する。
const withDir = (fn) => () => {
  const dir = setup()
  try {
    fn(dir)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

test('new: 空ディレクトリは 0001、ゼロ詰め・Proposed・Date・索引追記', withDir((dir) => {
  run(dir, ['new', 'first-decision', 'はじめての決定'])
  const body = readFileSync(join(dir, '0001-first-decision.md'), 'utf8')
  assert.match(body, /^# ADR-0001: はじめての決定$/m)
  assert.match(body, /^- Status: Proposed$/m)
  assert.match(body, /^- Date: \d{4}-\d{2}-\d{2}$/m)
  const idx = readFileSync(join(dir, 'README.md'), 'utf8')
  assert.match(idx, /\| \[0001\]\(0001-first-decision\.md\) \| はじめての決定 \| Proposed \|/)
}))

test('new: 連番が加算される', withDir((dir) => {
  run(dir, ['new', 'a', 'A'])
  run(dir, ['new', 'b', 'B'])
  assert.ok(readdirSync(dir).includes('0002-b.md'))
}))

test('new: 非 ASCII の slug は非ゼロ終了で拒否', withDir((dir) => {
  assert.throws(() => run(dir, ['new', '日本語', 'x']), (e) => e.status !== 0)
  assert.ok(!readdirSync(dir).some((f) => /^\d{4}-/.test(f)))
}))

test('supersede: 新番号を作り旧の Status を反転、双方向に記録', withDir((dir) => {
  run(dir, ['new', 'old', '旧'])
  run(dir, ['supersede', '1', 'new', '新'])
  assert.match(readFileSync(join(dir, '0001-old.md'), 'utf8'), /^- Status: Superseded by ADR-0002$/m)
  assert.match(readFileSync(join(dir, '0002-new.md'), 'utf8'), /^- Supersedes: ADR-0001$/m)
}))

test('status: Status 行のみ更新する', withDir((dir) => {
  run(dir, ['new', 'x', 'X'])
  run(dir, ['status', '1', 'Accepted'])
  assert.match(readFileSync(join(dir, '0001-x.md'), 'utf8'), /^- Status: Accepted$/m)
}))

test('reindex: 冪等（再生成しても索引は変わらない）', withDir((dir) => {
  run(dir, ['new', 'a', 'A'])
  const before = readFileSync(join(dir, 'README.md'), 'utf8')
  run(dir, ['reindex'])
  assert.equal(readFileSync(join(dir, 'README.md'), 'utf8'), before)
}))
