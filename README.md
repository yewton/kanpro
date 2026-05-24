# 〈完全なプログラミング〉を目指す会

[![GitHub Pages](https://github.com/yewton/kanpro/actions/workflows/github-pages.yml/badge.svg)](https://github.com/yewton/kanpro/actions/workflows/github-pages.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1485a1-e690-44d9-a416-ce073e77c634/deploy-status.svg)](https://app.netlify.com/sites/kanpro/deploys)

yewton が社内向けに **〈完全なプログラミング〉を目指す会** と冠して実施した、言語やフレームワークに依らない基礎的なプログラミングの指針についての勉強会の資料を、外部公開用に改訂して公開しています。

[スライドはこちら。](https://yewton.github.io/kanpro/)

2020年版のアーカイブは[こちら](https://kanpro2020--kanpro.netlify.app/)。

## スライドの作成方法

スライドは [Marp](https://github.com/marp-team/marp) を用いて作成しており、ビルド・デプロイの構成は [yhatt/marp-cli-example](https://github.com/yhatt/marp-cli-example) を参考にしています。

各スライドは `src` ディレクトリ以下の `.md` を編集します。全スライド横断の共通設定（フッター・ページ番号・`class: lead` などの共通フロントマター）は `marp.config.mjs` に定義してあり、各 `.md` には固有の `title` と `description` のみを記述します。

以下を実行するとプレビュー用の Marp サーバーが立ち上がります:

```sh
npm start
```

個別のスライドをプレビューで確認するには、`.md` ファイルを指定して開きます（例: <http://localhost:8080/intro.md> ）。

HTML としてビルドした結果を確認するには以下を実行します:

```sh
npm run build
```

### 図（ダイアグラム）

UML などの図は [Mermaid](https://mermaid.js.org/) で記述しています。ソースは `src/diagrams/*.mmd` にあり、以下を実行すると `src/assets/*.png` へ再生成されます:

```sh
npm run diagrams
```

生成した PNG はリポジトリにコミットしているため、図を変更する際はソースの `.mmd` を編集して再生成してください。

## GitHub Pages へのデプロイ

スライドは [GitHub Pages](https://docs.github.com/pages) として公開しています。

デプロイは [GitHub Actions](https://docs.github.com/actions) で自動化しており、`master` への push をトリガーに、公式の Pages デプロイ（`actions/upload-pages-artifact` と `actions/deploy-pages`）でビルド結果を公開します。設定は `.github/workflows/github-pages.yml` を参照してください。
