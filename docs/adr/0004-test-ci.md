# ADR-0004: スクリプトに最小テストと CI を導入する

- Status: Accepted
- Date: 2026-05-24

## 目的

ADR 管理スクリプト（`scripts/adr.mjs`）に対し、テストと CI を入れるかどうか、入れるならどの範囲かを決定する。

## 背景

`adr.mjs` はこのリポジトリで**唯一の命令的ロジック**（他は markdown / CSS / config の宣言的内容）であり、採番・supersede のステータス反転・索引の冪等性・slug 検証はサイレントに壊れうる。一方このリポジトリにはテスト基盤も コード用 CI も存在しない（CI は Pages デプロイと dependency-review のみ）。

## 前提

- `adr.mjs` は依存ゼロ。Node 標準の `node:test` が使えるため、テストも CI も**依存を追加せず**実現できる（サプライチェーン硬化方針と整合）。
- スクリプトは年数回しか実行されない内製ツールで、失敗は `git diff` で即可視・`git restore` で即復元できる。
- 既存 workflow は Actions を SHA ピン留めしている（pinact 方針）。新規 workflow も同様にする必要がある。

## 選択肢

- **A. 最小テスト + 最小 CI（採用）** … `node:test` で new/supersede/status/reindex/slug を網羅し、`scripts/**`・`docs/adr/**` の path filter 付き・SHA ピンの workflow で自動実行。テスト隔離のためスクリプトに `ADR_DIR` 上書きを足し tmpdir で副作用なく検証。
  - ⊕ 唯一のロジックを安価に回帰保護でき、テストが契約の実行可能な仕様書を兼ねる ⊖ コード CI の無いリポジトリに precedent を作る
- B. テストのみ（CI なし） … ⊖ 自動実行されないテストは drift して腐り、かえって驚きを生む（中途半端）
- C. どちらも入れない … ⊕ precedent を作らず最小 ⊖ 唯一のロジックの回帰を検出できない

## 結論

**A を採用。** 「テストを入れるなら自動実行まで（さもなくば入れない）」という整合を取り、中途半端な B を避ける。precedent を作るコストは、唯一のロジックを zero-dep で守れる価値が上回ると判断した。CI は path filter で関連変更時のみ走らせ、Actions は既存と同じ SHA ピンを踏襲する。`ADR_DIR` 上書きはテスト隔離のための最小の追加で、通常運用には既定値で透過。
