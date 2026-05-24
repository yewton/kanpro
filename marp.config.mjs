/** @type {import('@marp-team/marp-cli').Config} */

// 全スライド横断の共通フロントマター（旧 libs.org / setupfile.org の後継）。
// ここを書き換えると全デッキへ反映される。各 src/*.md は固有の
// title / description のみをフロントマターに持つ。
// 年（2026）は DRY 化しない。src/*.md にも 2026 が点在するため、年変更時は
// リポジトリ全体を grep して手修正する（PR #65 の決定に従う）。
const SHARED_FRONT_MATTER = `class: lead
paginate: true
footer: 〈完全なプログラミング〉を目指す会 2026
_paginate: false
_footer: ""
`

// 各デッキのフロントマター先頭へ共通設定を差し込む。Marp がフロントマターを
// 解釈する前段（render の入力文字列）で結合するため、結果は共通設定を各 .md に
// 直接書いていた従来と等価になる。ビルド・プレビュー(`marp -s src`)・ウォッチの
// いずれでもこのエンジンが使われるため、編集時の体験も保たれる。
// Marp には宣言的な共通フロントマター機構が存在せず（メンテナによる意図的な設計）、
// engine プラグインによるこの前処理が公式の案内する唯一の回避策である。
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
