# Architecture Decision Records (ADR)

容易に変更できない／再検討で蒸し返されがちな意思決定の WHY を記録する。書式・運用方針・ツールの設計判断は [ADR-0001](0001-adr-management.md) を参照。

新規作成・supersede は依存ゼロのスクリプトで行う:

```sh
npm run adr -- new <slug> "<タイトル>"           # 新規（Status: Proposed）
npm run adr -- supersede <旧番号> <slug> "<題>"   # 新規 + 旧を Superseded に
npm run adr -- status <番号> "<ステータス>"       # Status 行のみ更新（例: Accepted）
npm run adr -- reindex                            # この索引を再生成
```

## 一覧

<!-- adr:list:start -->
| # | タイトル | Status |
|---|---------|--------|
| [0001](0001-adr-management.md) | ADR を docs/adr に自前スクリプトで記録・運用する | Accepted |
| [0002](0002-shared-front-matter.md) | 共通フロントマターを marp.config.mjs の engine で注入する | Accepted |
| [0003](0003-year-notation.md) | 年表記を DRY UP しない | Accepted |
<!-- adr:list:end -->
