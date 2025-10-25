<!--
Sync Impact Report

- Version change: None -> 1.0.0
- List of modified principles: N/A (Initial creation)
- Added sections:
  - Core Principles
  - ビルドとデプロイ (Build and Deployment)
  - ブランチ戦略 (Branching Strategy)
  - Governance
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# kanpro Constitution

## Core Principles

### I. スライドはMarpとOrg modeで作成する
スライドは基本的にMarpツール用のMarkdownで記述します。より複雑な内容や作成者の好みに応じて、Org modeを使用することもできます。その場合、`make`コマンドを介してMarkdownに変換されます。共通のスタイルとフロントマターは `libs.org` で管理し、一貫性を確保します。

### II. コミットメッセージは「なぜ」を伝える
コミットメッセージは、何が変更されたかだけでなく、変更の理由と背景を説明しなければなりません（MUST）。要約行、意図を説明する詳細な本文、関連イシューへのリンクという形式に従います。マージ前には `git rebase -i` などのツールを使用して、意味のある単位のコミットを作成します。曖昧なメッセージは禁止です。

### III. 変更は視覚的なプレビューで確認する
すべての変更は、ローカルのMarpサーバー（`npm start`）を使用してスライドをプレビューし、検証しなければなりません（MUST）。リグレッションを防ぐため、変更前後のスライドのスクリーンショットを撮影・比較し、テキストのオーバーフローや画像の破損などの視覚的な不具合がないことを確認します。

### IV. アーキテクチャの意思決定を記録する
スライド技術やビルドプロセスの選択など、重要で変更が困難な決定は、アーキテクチャ決定記録（ADR）として文書化しなければなりません（MUST）。ADRは、`src/document.md`で概説されている形式に従い、背景、検討された選択肢、そして最終的な決定とその論理的根拠を記録します。

### V. 共通設定は一元管理する
一貫した外観と雰囲気を維持するため、Marpのテーマ、スタイル（フォントを含む）、フッターなどの共有設定は `libs.org` で定義します。個々のスライドは、これらの共通設定を利用すべきです（SHOULD）。

## ビルドとデプロイ

プロジェクトはビルドに `npm` スクリプトを使用します。`npm run build` は最終的なHTMLスライドを生成します。GitHub PagesへのデプロイはGitHub Actionsを介して自動化されています。

## ブランチ戦略

すべての作業は、mainブランチから作成されたフィーチャーブランチで行わなければなりません（MUST）。ブランチ名はタスクを明確に説明する必要があります。

## Governance

この憲章は、プロジェクト慣行の主要な情報源です。改正には、この文書を更新し、関連するテンプレートに変更を反映させる必要があります。すべてのコントリビューションは、これらの原則を遵守しなければなりません。

**Version**: 1.0.0 | **Ratified**: 2025-10-25 | **Last Amended**: 2025-10-25