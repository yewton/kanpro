# ADR-0001: ADR を docs/adr に自前スクリプトで記録・運用する

- Status: Accepted
- Date: 2026-05-24

## 目的

本リポジトリで Architecture Decision Record (ADR) を、どこに・どの形式で・どう保守し・どんなツールで運用するかを決定する。

## 背景

変更が容易でなく、コードからは WHY を読み取れない意思決定が、再検討のたびに蒸し返される。例えば年表記の DRY UP は PR #65 で一度棄却したが、後のセッションで再び検討された。第四回ドキュメント（`src/document.md`）で説いた ADR をドッグフーディングし、そうした判断の WHY と「変更時に何を考慮すべきか」を残したい。

## 前提

- 小規模リポジトリ（Marp スライド、デッキ6本）。ADR は生涯で数本〜十数本程度の見込み。
- フォーマットは資料が示す簡易版（**目的 / 背景 / 前提 / 選択肢 / 結論**。Y-Statements 由来）を用いる方針。
- サプライチェーン硬化を方針としており（供給網対策コミット・依存更新の cooldown 運用）、依存追加のコストを重く見る。
- 「運用方針を忘れない仕組み」と「決定論的作業（採番・雛形・索引・supersede）の自動化」が欲しい。

## 選択肢

### 配置
- **(a) `docs/adr/`** … 最も慣習的（adr.github.io 等）。発見容易。**採用**
- (b) `doc/adr/`（adr-tools 既定） / (c) ルート `adr/` … 慣習から外れ発見性で劣る

### フォーマット
- 資料の5節そのまま / **5節 + 薄いヘッダ（Status・Date、必要時 Supersedes）**。後者を採用。資料が掲げる ADR の目的（将来の参照・変更時の考慮）を機能させるには status と supersede 追跡が要るため、本文は資料どおり残しつつメタデータだけ最小限足す。

### ツール（自前 vs 依存）
- **A. 自前の zero-dep スクリプト + project Skill（採用）**
  - スクリプト（`scripts/adr.mjs`, Node 標準ライブラリのみ・約100行）が連番採番・雛形配置・索引再生成・supersede を担う。Skill（`.claude/skills/adr/`）が「いつ・どう書くか」と immutability / supersede 方針を担い、運用の忘却を防ぐ。
  - ⊕ 依存ゼロ＝供給網を増やさない ⊕ 資料の5節形式に完全一致 ⊖ 約100行を自前保守（ただし write-once でほぼ churn しない）
- B. adr-tools（npryce, bash）… 成熟。custom template 可だが `## Status` / `# NUMBER` 構造を強制し資料の5節と妥協が要る。bash の外部インストールが必要で npm pin 不可、CI・貢献者に摩擦。
- C. log4brains（npm）… npm ネイティブだが Next.js 依存ツリーで重く、MADR 形式を強制。ADR の静的サイト公開向けで、本件には過剰かつ供給網硬化方針と衝突。
- D. ツールなし（手動採番・手動索引）… 保守対象ゼロだが、採番ミス・索引のずれ・運用忘れを招く。

ツールが肩代わりするのは「採番・雛形・索引・supersede」という約100行ぶんの決定論的処理のみ。一方フォーマットはどの選択でもカスタムが必要（資料の5節はどのツールも標準で持たない）。ADR 量が少なく採番ロジックは write-once であることを踏まえると、依存の carrying cost（更新・cooldown レビュー・監査）の方が高くつく。

## 結論

- 配置 `docs/adr/`、ファイル名 `NNNN-<slug>.md`（slug は ASCII の kebab-case、タイトルは日本語可）。
- 形式は資料の5節 + 薄いヘッダ。雛形は `docs/adr/templates/template.md`、索引は `docs/adr/README.md`。
- ツールは **A（自前 zero-dep スクリプト + project Skill）** を採用。資料の素の5節へ Status / Date を足す逸脱は、ADR の目的を機能させる最小補完として許容する。約100行の自前保守は、規模が小さく write-once であることから許容する。
- 保守方針: **Accepted な ADR の本文は immutable**。決定を変えるときは新しい ADR を書いて旧を supersede する（旧の Status を `Superseded by ADR-NNNN` に更新、新に `Supersedes` を記載）。変えてよいのは Status 行だけ。これにより「変更時に何を考慮すべきか」が履歴として残る。
- コマンドの使い方は `docs/adr/README.md` と `adr` Skill を参照。最初の実例として ADR-0002（共通フロントマター機構）と ADR-0003（年表記）を記録する。
