# ADR-0002: 共通フロントマターを marp.config.mjs の engine で注入する

- Status: Accepted
- Date: 2026-05-24

## 目的

全スライド横断の共通フロントマター（`class: lead` / `paginate` / `footer` 等）を、各デッキへどう与えるかを決定する。

## 背景

org-mode 時代の `#+SETUPFILE:` / `libs.org` による共通設定の後継。plain markdown 移行後も6デッキの見た目を一貫させたい。各 `.md` にはデッキ固有の `title` / `description` のみを書きたい。

## 前提

- デッキは6ファイル。Marp CLI を build / server（`marp -s src`）/ watch で使う。
- **Marp には外部から共通フロントマターを与える宣言的な公式機構が存在しない。** メンテナが reproducibility 重視で意図的に欠いている（marp-team Discussion #409）。公式が案内する唯一の回避策はカスタム engine プラグイン。
- CLI / config レベルの "global directives" は `author` / `description` / `image` / `keywords` / `theme` / `title` / `url` のメタデータ系のみで、`paginate` / `footer` / `class` は対象外。テーマ CSS もディレクティブ値は設定不可。

## 選択肢

- **A. engine フックで各 `.md` のフロントマター先頭へ共通設定を文字列結合で注入（`injectSharedFrontMatter`）**
  - ⊕ 1か所に集約しドリフトが起きない ⊕ Marp 公式が案内する engine プラグイン方式そのもの（＝非標準ではない） ⊖ 単一 `.md` を単体で読むと `class: lead` の出所が不可視（発見性）
- B. 各 `.md` に共通フロントマターを直書き
  - ⊕ 発見性最大・self-contained（Marp の reproducibility 哲学に忠実） ⊖ 5行 × 6 の repeat ⊖ 変更時に6ファイル編集・ドリフト risk
- C. Marp 公式の宣言的機構へ置換 … そのような機構は存在せず実質 N/A。最も近い公式策（`marpit_apply_default_*` rule のプラグイン）はむしろ機構が増える

## 結論

**A を採用。** 唯一の欠点である発見性は、機構を変えずドキュメント側で補強した（issue #68）:

- `README.md` と `.claude/rules/slides.md` で、共通フロントマターに `class: lead` が含まれることを名指し
- `marp.config.mjs` のコメントに「Marp に宣言的機構は無く、これは公式が案内する engine プラグイン方式の回避策」と WHY を明記

per-file ポインタ（各 `.md` へのコメント追加）は noise を避けて見送った。B の repeat 再導入は資料の「取り除けるものは取り除く」に反するため採らない。
