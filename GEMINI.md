# Gemini Code Assistant Context

## プロジェクト概要

[REAMDE](README.org) を参照。

## コミット方針

[第四回 ドキュメント](src/document.md) に記載の「効果的なコミットメッセージ」に記載のコミット粒度やメッセージ記載方針に従ってコミットすること。

`git --no-pager log -5 --author yewton` の内容も参考にすること。

## スライドのビルド方針

- スライドは `src/*.md` を直接編集する。`.org` や Emacs / `make` は使用しない。
- 全スライド横断の共通フロントマター（フッター・ページ番号など）は `marp.config.mjs` に定義されている。各 `.md` には固有の `title` と `description` のみを記述する。
- スライドのフォントなど、全体に影響するスタイルは `kanpro.css` で指定する。Webフォントの利用が推奨される。
- UML などの図は `src/diagrams/*.mmd`（Mermaid）で記述し、`npm run diagrams` で `src/assets/*.png` に再生成する。生成した PNG はコミットする。

## スライドのプレビュー方法

仕組みは [REAMDE](README.org) を参照。

[Run blocking/long running shell commands in background · Issue #1689 · google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/issues/1689) が解消されるまでは、以下のように対応すること。

まず、 marp サーバーをバックグラウンドで起動する:

```sh
npx marp -s src > /tmp/kanpro-marp.stdout 2> /tmp/kanpro-marp.stderr &
```
marp サーバーの起動を確認する:

```sh
grep 'Start server listened at' /tmp/kanpro-marp.stderr
```

この結果が以下のようになっていれば OK:

```sh
[  INFO ] [Server mode] Start server listened at http://localhost:8080/ ...
```

以降は、 [REAMDE](README.org) に記載の方法で各スライドをプレビュー出来る。

marp サーバーを終了する際は以下を実行する:

```sh
pkill -f 'marp -s src'
```

## 動作確認方針

前述の方法でスライドの変更内容をプレビューすること。

また、リグレッション確認の為に、変更の影響を受けるスライドをピックアップし、変更作業の前にスクリーンショットを撮影しておくこと。

変更作業後に再び同ページのスライドのスクリーンショットを撮影し、前後比較を行うこと。

字がはみ出して読めない、画像が表示されない、ソースの Markdown と内容が異なる、など体裁が崩れていないことは常に確認すること。

## 作業方針

修正が必要な場合は必ず作業用のブランチを作成してから行うこと。

ブランチ名は、与えられたタスクの内容を元に命名すること。