---
name: adr
description: アーキテクチャ上の意思決定(ADR)を docs/adr/ に記録・更新する。「ADRを書いて」「この決定を記録して」「方針をADR化」「過去の決定をsupersedeして」等で使う。運用の根拠は docs/adr/0001-adr-management.md。
---

# ADR (Architecture Decision Record) の作成・保守

`docs/adr/` に意思決定の WHY を記録する。**書式・運用方針の根拠は [ADR-0001](../../../docs/adr/0001-adr-management.md)**（このスキルは手順のみを示す）。

## いつ書くか

- 容易に変更できない／変更時に考慮が要る意思決定
- コードからは WHY が読み取れず、再検討で蒸し返されがちな判断
- 大きめの機能・ツール・運用の設計

## 新規作成

```sh
npm run adr -- new <slug> "<タイトル>"
```

- `<slug>` は ASCII の kebab-case（ファイル名に使う。`<タイトル>` は日本語可）
- 連番・雛形・索引（`docs/adr/README.md`）は自動。生成された `docs/adr/NNNN-<slug>.md` の6節を埋める:
  - **目的** 何を決めるか / **背景** なぜ決める必要があるか / **前提** 特筆すべき前提 / **選択肢** 検討案とメリット・デメリット / **結論** 採用案と理由、デメリットへの対処 / **結果・影響** この決定が生む新たな制約・フォローアップ・取れなくなる選択肢
- 作成直後の Status は `Proposed`。合意できたら Accepted にする:

```sh
npm run adr -- status <番号> Accepted
```

## 過去の決定を変えるとき（重要）

Accepted な ADR の**本文は編集しない**（immutable）。決定を変える場合は新しい ADR で supersede する:

```sh
npm run adr -- supersede <旧番号> <slug> "<新タイトル>"
```

旧 ADR の Status は自動で `Superseded by ADR-NNNN` になり、新 ADR に `Supersedes` 行が入る。変えてよいのは Status 行だけ、という原則。

## 索引

`docs/adr/README.md` の一覧は上記コマンドが自動更新する。手で ADR を足した等でずれたら:

```sh
npm run adr -- reindex
```
