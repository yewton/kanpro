# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Org-modeへの依存を減らすため、Marpの共通設定を`libs.org`から`marp.config.mjs`へ移行します。これにより、Emacs以外の環境でもスライド開発が容易になります。

## Technical Context

**Language/Version**: JavaScript (Node.js >= 18.0)
**Primary Dependencies**: `@marp-team/marp-cli`
**Storage**: N/A
**Testing**: 手動でのプレビューおよびスクリーンショット比較
**Target Platform**: N/A (ビルドプロセス)
**Project Type**: 静的サイト/ドキュメンテーション
**Performance Goals**: N/A
**Constraints**: 既存のビルドプロセスと視覚的一貫性を維持する
**Scale/Scope**: プロジェクト内の全スライドに適用

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [X] **Principle I**: Does this feature use Marp and/or Org mode for slides? (Marp設定そのものを扱います)
- [X] **Principle II**: Are commit messages formatted to explain the 'why' behind changes? (計画段階では該当しませんが、実装時に遵守します)
- [X] **Principle III**: Is there a plan to visually preview changes using the Marp server? (テスト戦略の根幹です)
- [ ] **Principle IV**: If this involves architectural changes, will an Architecture Decision Record (ADR) be created? (設定ファイルの変更であり、ADRを必要とするアーキテクチャ変更ではありません)
- [X] **Principle V**: Does this feature correctly utilize shared settings from `libs.org` without introducing local overrides? (この機能の中心的な目的です)

## Project Structure

### Documentation (this feature)

```text
specs/001-refactor-marp-config/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

この機能は既存のファイルを変更します。影響範囲は以下の通りです。

- `marp.config.mjs` (新規作成または更新)
- `libs.org` (変更)
- `src/*.md` (front-matterの削除)

**Structure Decision**: 新しいファイル構造は導入されません。既存のファイルへの変更が主となります。

