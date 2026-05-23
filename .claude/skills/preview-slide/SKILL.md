---
name: preview-slide
description: >
  Marp スライドをクラウド環境でブラウザプレビューして確認する。
  スライドの変更前後のスクリーンショット比較や、体裁崩れの確認に使う。
  "スライドを確認して" "変更前後を比較して" "プレビューして" などの指示に応答する。
---

# Marp スライドプレビュースキル（クラウド環境用）

クラウド環境では画面がないため、Playwright（ヘッドレス Chromium）でスクリーンショットを撮影してユーザーに提示する。

## 環境情報

- Marp サーバー起動コマンド: `node $PROJECT_DIR/node_modules/@marp-team/marp-cli/marp-cli.js -s $PROJECT_DIR/src`
- サーバー URL: `http://localhost:8080/<filename>.md`
- スクリーンショットツール: `playwright screenshot --browser=chromium --viewport-size='1280, 720'`

## ワークフロー

### 1. スコープを確認する

ユーザーの依頼から、どのスライドファイルを確認するか特定する。

- 変更対象のファイルが明示されている場合はそれを使う
- 明示されていない場合は `git diff --name-only HEAD` で変更ファイルを確認する
- スライドファイルは `src/*.md` にある

### 2. Marp サーバーの起動確認

```bash
curl -sf http://localhost:8080/ > /dev/null && echo "running" || echo "stopped"
```

**停止中の場合は起動する:**

```bash
PROJECT_DIR=$(git rev-parse --show-toplevel)
node "$PROJECT_DIR/node_modules/@marp-team/marp-cli/marp-cli.js" -s "$PROJECT_DIR/src" \
  > /tmp/marp-preview.log 2>&1 &
```

起動待機（最大 15 秒）:

```bash
for i in $(seq 1 15); do
  curl -sf http://localhost:8080/ > /dev/null && break
  sleep 1
done
grep 'Start server' /tmp/marp-preview.log || echo "サーバー起動失敗"
```

### 3. スクリーンショットを撮影する

ファイルごとに以下を実行:

```bash
SLIDE=intro  # 対象スライド名（拡張子なし）
playwright screenshot \
  --browser=chromium \
  --viewport-size='1280, 720' \
  "http://localhost:8080/${SLIDE}.md" \
  "/tmp/slide-${SLIDE}.png"
```

### 4. スクリーンショットをユーザーに提示する

`SendUserFile` ツールを使って撮影した画像を送る。

- 変更前: `before-${SLIDE}.png`
- 変更後: `after-${SLIDE}.png` または `slide-${SLIDE}.png`

### 5. 体裁の確認ポイント

提示した後、以下を確認してユーザーに報告する:

- [ ] 文字がスライド外にはみ出していないか
- [ ] 画像が正しく表示されているか
- [ ] ソースの Markdown の内容と一致しているか
- [ ] 前後比較がある場合、意図通りの変更になっているか

## 変更前後の比較手順

```bash
# 1. 現在の状態でスクリーンショット（変更前）
playwright screenshot --browser=chromium --viewport-size='1280, 720' \
  "http://localhost:8080/intro.md" /tmp/before-intro.png

# 2. ユーザーに提示
# （SendUserFile で before-intro.png を送る）

# 3. ファイルを変更する
# ... 変更作業 ...

# 4. 変更後のスクリーンショット
playwright screenshot --browser=chromium --viewport-size='1280, 720' \
  "http://localhost:8080/intro.md" /tmp/after-intro.png

# 5. ユーザーに提示
# （SendUserFile で after-intro.png を送る）
```

## 注意事項

- Marp サーバーはスライドビューアを表示するため、スクリーンショットには UI も含まれる
- スライド内容は表示領域内に正しく収まっていることを確認する
- スライドが複数ページある場合、最初のスライドのみ撮影される
- サーバーを終了する場合: `pkill -f 'marp-cli.js'`
