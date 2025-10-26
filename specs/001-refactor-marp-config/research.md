# Research: Marp設定ファイルの共通化

**Feature**: Marp設定ファイルの共通化
**Date**: 2025-10-25

## 目的

`libs.org` のBabelブロックで生成されていたMarpの共通設定を、`marp.config.mjs` に移行するための具体的な設定方法を調査・決定する。

## 調査内容

ユーザーから提供されたMarp CLIのドキュメント (https://github.com/marp-team/marp-cli/blob/main/README.md#configuration-file) を元に、移行対象となる設定の記述方法を確認した。

### 移行対象の設定

`libs.org` から以下の設定を移行する必要がある。

- `theme: gaia`
- `class: ['lead']`
- `paginate: true`
- `footer: '〈完全なプログラミング〉を目指す会 2020'`
- `style: | @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"); section { font-family: 'Noto Sans JP', sans-serif; }`

### `marp.config.mjs` での設定方法

ドキュメントによれば、`marp.config.mjs` は `module.exports` を使って設定オブジェクトをエクスポートする必要がある。また、CLIオプションと設定キーはキャメルケースで対応している。

- `theme` → `theme`
- `class` → `options.class`
- `paginate` → `options.paginate`
- `footer` → `options.footer`
- `style` → `style`

## 結論

`marp.config.mjs` に以下の内容を記述することで、`libs.org` の設定を完全に代替できる。

```javascript
const { Marp } = require('@marp-team/marp-core');

module.exports = {
  engine: (opts) => new Marp(opts).use(require('marp-core-math')), // 数式サポートが必要な場合
  theme: 'gaia',
  style: `@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");\nsection {
  font-family: 'Noto Sans JP', sans-serif;
}`,
  options: {
    class: 'lead',
    paginate: true,
    footer: '〈完全なプログラミング〉を目指す会 2020',
  },
};
```

**Rationale**: この設定により、すべてのスライドで共通のテーマ、スタイル、フッター、ページネーションが適用され、`libs.org` への依存がなくなる。`engine` の設定は、元のプロジェクトに数式などが含まれている可能性を考慮して追加したが、不要であれば削除可能。

**Alternatives considered**: 各スライドのfront-matterに共通設定を書き続ける方法も考えられたが、これは本機能の目的である「共通設定の一元管理」に反するため、採用しない。
