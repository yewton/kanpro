---
paths:
  - "src/**/*.md"
  - "src/diagrams/**/*.mmd"
  - "kanpro.css"
  - "marp.config.mjs"
---

# スライド作業ルール

スライド関連ファイル（`src/**/*.md`、図ソース、共通スタイル/設定）を編集する際に適用する。仕組みの全体像は `README.org` を参照。

## オーサリング

- スライドは `src/*.md` を直接編集する。`.org` や Emacs / `make` は使用しない。
- 全スライド横断の共通フロントマター（フッター・ページ番号など）は `marp.config.mjs` に定義済み。各 `.md` には固有の `title` と `description` のみを記述する。
- フォントなど全体に影響するスタイルは `kanpro.css` で指定する。Web フォントの利用が推奨。
- UML などの図は `src/diagrams/*.mmd`（Mermaid）で記述し、`npm run diagrams` で `src/assets/*.png` に再生成する。図を変更する際は必ずソースの `.mmd` を編集して再生成し、生成した PNG をコミットする。

## プレビュー

Marp サーバーをバックグラウンドで起動する:

```sh
npm start
```

起動を確認する:

```sh
grep 'Start server listened at' /tmp/kanpro-marp.stderr 2>/dev/null || curl -sf http://localhost:8080/ > /dev/null && echo OK
```

個別のスライドは `http://localhost:8080/<filename>.md` でプレビューできる。

終了する際は次を実行する:

```sh
pkill -f 'marp -s src'
```

クラウド環境でブラウザ確認・前後比較する場合は `preview-slide` スキルを使う。

## 動作確認

- 変更内容は上記のプレビューで必ず確認する。
- リグレッション確認のため、変更の影響を受けるスライドをピックアップし、変更前にスクリーンショットを撮影しておく。変更後に同ページを再撮影して前後比較する。
- 字がはみ出して読めない / 画像が表示されない / ソースの Markdown と内容が異なる、などの体裁崩れがないことを常に確認する。

## ビルドとデプロイ

- `npm run build` で `dist/` に HTML スライド一式（各デッキ + OG 画像）を生成する。canonical URL / OG 画像のため、ビルドには `URL` 環境変数が必要。
- `master` への push で GitHub Actions（`.github/workflows/github-pages.yml`）が GitHub Pages へ自動デプロイする。
- Netlify でもデプロイしている（設定は `netlify.toml`）。
