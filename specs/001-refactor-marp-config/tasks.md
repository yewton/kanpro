# Tasks: Marp設定ファイルの共通化

**Input**: Design documents from `/home/yewton/Projects/kanpro/specs/001-refactor-marp-config/`
**Prerequisites**: plan.md, spec.md, research.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: User story this task belongs to (e.g., US1)

---

## Phase 1: User Story 1 - 共通設定の分離 (Priority: P1) 🎯 MVP

**Goal**: Marpの共通設定を`libs.org`から`marp.config.mjs`へ移行し、Org-modeへの依存をなくす。

**Independent Test**: `npm run build` を実行し、生成されたスライドが `marp.config.mjs` の共通設定を反映しており、かつ変更前と視覚的に同一であることを確認する。

### Implementation for User Story 1

- [x] T001 [US1] `research.md` の結論に基づき、既存の `marp.config.mjs` に共通設定（theme, style, footer, paginate, class）を追記・更新する
- [x] T002 [US1] `libs.org` からfront-matterを生成しているBabelブロックを削除する
- [x] T002a [P] [US1] `src/` 以下の全 `.org` ファイルに、個別のfront-matterをエクスポートする `#+begin_export md` ブロックを追記する
- [x] T003 [P] [US1] `src/index.md` のfront-matterから共通設定を削除する
- [x] T004 [P] [US1] `src/intro.md` のfront-matterから共通設定を削除する
- [x] T005 [P] [US1] `src/oop.md` のfront-matterから共通設定を削除する
- [x] T006 [P] [US1] `src/naming.md` のfront-matterから共通設定を削除する
- [x] T007 [P] [US1] `src/document.md` のfront-matterから共通設定を削除する
- [x] T008 [P] [US1] `src/architecture.md` のfront-matterから共通設定を削除する

---

## Phase 2: Polish & Cross-Cutting Concerns

**Purpose**: 変更の検証と最終確認

- [x] T009 `make` を実行し、`.org` ファイルから `.md` ファイルを正しく再生成する
- [x] T010 `npm run build` を実行し、ビルドがエラーなく完了することを確認する
- [x] T011 `dist/` に生成されたHTMLファイルをブラウザで開き、すべてのスライドでスタイル、フッター、ページネーションが正しく適用されていることを視覚的に確認する

---

## Dependencies & Execution Order

- **User Story 1 (Phase 1)**: T001とT002は並行不可ですが、T003〜T008は並行作業が可能です。
- **Polish (Phase 2)**: すべての実装タスク完了後に実施します。

## Implementation Strategy

1.  **Implementation**: 設定の移行と古い設定の削除を並行して進めます。
2.  **Verification**: すべての変更が完了したら、ビルドと目視での確認を行います。