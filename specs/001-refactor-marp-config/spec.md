# Feature Specification: Marp設定ファイルの共通化

**Feature Branch**: `001-refactor-marp-config`
**Created**: 2025-10-25
**Status**: Draft
**Input**: User description: "Org-mode への依存を減らす為、まず共通設定内容を libs.org から marp.config.mjs に移動し、スライドタイトルなどの個別設定のみ各スライドで設定する方式に変更したいです。 https://github.com/marp-team/marp-cli/blob/main/README.md#configuration-file に記載のオプションが使えると考えています。"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 共通設定の分離 (Priority: P1)

スライド作成者として、Marpの共通設定を `marp.config.mjs` で一元管理したい。これにより、EmacsやOrg-modeに依存しない、よりシンプルなスライド作成環境を構築できる。

**Why this priority**: プロジェクトへの参加障壁を下げ、開発環境の多様性を許容するため。

**Independent Test**: `marp.config.mjs` を利用してビルドされたスライドが、意図した共通スタイル（テーマ、フッター、フォントなど）をすべて継承していることを確認する。

**Acceptance Scenarios**:

1.  **Given** プロジェクトに `marp.config.mjs` が存在し、共通設定が定義されている
    **When** `npm run build` を実行する
    **Then** すべてのスライドが `marp.config.mjs` で定義された共通のテーマ、フッター、スタイルで生成される
2.  **Given** 個別のスライドMarkdownファイルには、そのスライド固有の `title` と `description` のみ記述されている
    **When** スライドがビルドされる
    **Then** `marp.config.mjs` からすべての共通設定を正しく継承する
3.  **Given** `libs.org` ファイルから共通のfront-matter生成ロジックが削除されている
    **When** スライドをビルドする
    **Then** ビルドは問題なく成功する

## Clarifications

### Session 2025-10-25

- Q: front-matter生成ロジックを削除した後、`libs.org` ファイル自体はどうするのが望ましいですか？ → A: front-matter生成ロジックのみを削除し、ファイルは残す
- Q: グローバル設定と個別スライドの設定が競合した場合、どちらを優先すべきですか？ → A: 個別スライドのfront-matter設定が `marp.config.mjs` のグローバル設定を上書きする

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: システムは、グローバルなMarp設定を定義するために `marp.config.mjs` を使用しなければならない (MUST)。
- **FR-002**: 以下の設定は `libs.org` から `marp.config.mjs` に移行されなければならない (MUST): `theme`, `paginate`, `footer`, `style`。
- **FR-003**: 個別のスライドMarkdownファイルは `title` と `description` のみを指定すればよい (SHOULD)。
- **FR-004**: 既存のビルドプロセス (`npm run build`) は、新しい設定ファイルを使用しても正しく機能し続けなければならない (MUST)。
- **FR-005**: `libs.org` ファイルからMarpのfront-matterを生成するBabelブロックを削除する。ただし、Emacsの編集サポート機能（setup/teardown）は維持するため、ファイル自体は削除しない (MUST)。
- **FR-006**: 個別スライドのfront-matterで定義された設定は、`marp.config.mjs` のグローバル設定よりも優先されなければならない (MUST)。

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: スライドのビルドが、共通設定に関して `libs.org` 内のEmacs/Org-mode固有のロジックに依存しなくなる。
- **SC-002**: 変更後に生成されたすべてのスライドが、変更前と同一の視覚的表現（テーマ、フォント、フッター）を維持する。
- **SC-003**: 共通スライド設定の構成が、100% `marp.config.mjs` 内に集約される。