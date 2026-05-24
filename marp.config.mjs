/** @type {import('@marp-team/marp-cli').Config} */

// 年度の単一定義。年を変えるときはここだけ書き換える。
const YEAR = '2026'

// 全スライド横断の共通フロントマター（旧 libs.org / setupfile.org の後継）。
// ここを書き換えると全デッキへ反映される。各 src/*.md は固有の
// title / description のみをフロントマターに持つ。
const SHARED_FRONT_MATTER = `class: lead
paginate: true
footer: 〈完全なプログラミング〉を目指す会 ${YEAR}
_paginate: false
_footer: ""
`

// 各デッキのフロントマター先頭へ共通設定を差し込む。Marp がフロントマターを
// 解釈する前段（render の入力文字列）で結合するため、結果は共通設定を各 .md に
// 直接書いていた従来と等価になる。ビルド・プレビュー(`marp -s src`)・ウォッチの
// いずれでもこのエンジンが使われるため、編集時の体験も保たれる。
const injectSharedFrontMatter = (markdown) => {
  const opening = /^---\r?\n/.exec(markdown)
  if (opening) {
    const end = opening[0].length
    return markdown.slice(0, end) + SHARED_FRONT_MATTER + markdown.slice(end)
  }
  return `---\n${SHARED_FRONT_MATTER}---\n\n${markdown}`
}

const config = {
  allowLocalFiles: true,
  theme: 'kanpro.css',
  options: {
    headingDivider: 1,
  },
  engine: ({ marp }) => {
    const render = marp.render.bind(marp)
    marp.render = (markdown, env) => render(injectSharedFrontMatter(markdown), env)
    return marp
  },
}

export default config
