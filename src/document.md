---
class: lead
paginate: true
footer:  〈完全なプログラミング〉を目指す会 2020
_paginate: false
_footer: ""

title: 第四回 ドキュメント
description: 〈完全なプログラミング〉を目指す会 2020 ドキュメント編です
---


# <!--fit--> 〈完全なプログラミング〉を目指す会 2020


## <!--fit--> 第四回 ドキュメント

yewton


# <!--fit--> ドキュメント


# <!--fit-->の前に


# <!--fit--> **復習**


# <!--fit-->〈完全なプログラミング〉


## とは？


# <!--fit-->「読めば分かるコードを書く」<br>「必要十分なドキュメントを書く」


# <!--fit-->余計なモノを<br>一切必要としない


## ソフトウェアづくり


# <!--fit-->その心は？


# <!--fit-->コードは圧倒的に<br> **人間によって読まれる**


# <!--fit-->故に〈完全なプログラミング〉は<br>圧倒的に **はやい**


# <!--fit-->さらに


# <!--fit-->品質の改善は<br> **コストを削減する**


# <!--fit-->故に〈完全なプログラミング〉は<br>圧倒的に **やすい**


# <!--fit--> **はやい** <br> **やすい**


# <!--fit--> **うまい** <br> 😋


# <!--fit-->命名は重要か？


# <!--fit-->[名前重要](http://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%90%8D%E5%89%8D%E9%87%8D%E8%A6%81)

![bg right](assets/2020-04-24_05-40-04_1024px-Yukihiro_Matsumoto_EuRuKo_2011.jpg)


# <!--fit-->命名 Tips

-   それが何をするのか、何を表すのか、まずは **言葉で説明してみる**
-   **解読** の必要が生じるような命名を避け、 **読めば分かる** 名前をつけよう
-   悩んだら **ライブラリをお手本にしよう**


# 今日持ち帰ってほしいこと

1.  効果的な ****コメント**** の書き方
2.  効果的な ****コミットメッセージ**** の書き方
3.  残すべき ****ドキュメント**** とは何か


# <!--fit--> **効果的** な <br> コメント

![bg contain right](assets/future_self.png)

---

```java
r = n / 2;
while ( abs( r - (n/r) ) > t ) {
  r = 0.5 * ( r + (n/r) );
}
System.out.println( "r = " + r );
```

---

```java
// ニュートン法で n の平方根の近似値を求める
r = n / 2;
while ( abs( r - (n/r) ) > t ) {
  r = 0.5 * ( r + (n/r) );
}
System.out.println( "r = " + r );
```

---

![bg contain](assets/thonk.png)

---

```java
private double SquareRootApproximation(n) {
  r = n / 2;
  while ( abs( r - (n/r) ) > t ) {
    r = 0.5 * ( r + (n/r) );
  }
  return r;
}
System.out.println( "r = " + SquareRootApproximation(r) );
```


# <!--fit-->理想


# <!--fit--> **コメントが全く無い** <br> コード

---

![bg contain](assets/thonk.png)


# <!--fit--> コメントが全く <br> **必要無い** <br> コード


# <!--fit--> **読めば分かる** コード


# <!--fit--> 適切な <br> **モジュール名** <br> **クラス名** <br> **メソッド名**


# <!--fit--> 「コードが仕様」は <br> **正義**


# <!--fit--> 現実


# <!--fit--> 制約


# <!--fit--> 歴史的経緯 <br> 時間的制約 <br> リソース制約


# <!--fit--> 😭


# <!--fit--> コードでは表現できない <br> ****筆者の気持ち・意図**** <br> を残すためにコメントを使う


# <!--fit--> **ポイント**


# <!--fit--> コメントの種類


# <!--fit--> 1. コードの繰り返し

---

```java
// productを"base"に設定する
long product = base;
// 2から"num"までループする
for (int i = 2; i < base; i++) {
  // "base"と"product"を掛ける
  product = product * base;
}
// 標準出力に product を表示する
System.out.println(String.format("Product = %d", product));
```

---

![bg contain](assets/angrybaby.jpg)

---

-   読み手に追加情報を一切提供せず、 **読む量を増やすだけ**
-   こんなコメントは止めましょう


# <!--fit--> 2. コードの説明

---

```java
// VERY IMPORTANT NOTE:
// このクラスのコンストラクタにはUiPublicationへの参照を渡す。
// UiPublicationオブジェクトはDataPublicationオブジェクトよりも前に
// 破棄してはならない。もしそうすれば、
// DatabasePublicationオブジェクトはプログラムをクラッシュさせる原因となる。
```

---

![bg contain](assets/angrybaby.jpg)

---

> 悪いコードを説明してはならない。書き直せ。
> 
> *&#x2014; プログラム書法 第2版 Brian W. Kernighan and P. J. Plauger*

---

> ■ クラスのユーザーについてあれこれ推測しない
> 
> クラスは、クラスのインターフェイスが示唆する規約に従って設計し、実装すべきである。
> インターフェイスについて明記されていること以外は、インターフェイスがどのように使用されるか
> （または、されないか）について憶測すべきでない。
> 
> *&#x2014; CODE COMPLETE 6.2.2 良いカプセル化*


# <!--fit--> **複雑** なコード <br> **トリッキー** なコード <br> **細心の注意が必要** なコード


# <!--fit--> **"凝った"** コードの<br>コメントは怪しい


# コードが複雑すぎて説明の必要がある?


# <!--fit--> Keep It <br> Simple, <br> Sxxx


# <!--fit--> コメント追加の前に <br> **コードを改良**


# <!--fit--> 3. コードの目印(マーカー)

```java
    // FIXME: Additional parameters are required in TS3.6, but ignored in 3.5.
    // Remove the any cast once google3 is fully on TS3.6.
```

<https://github.com/angular/angular/blob/f7815cf96defa6b19fff482824c5997f03fd78ea/packages/compiler-cli/src/ngtsc/util/src/typescript.ts#L128-L129>

-   `TODO`
-   `FIXME`
-   etc,


# <!--fit--> チーム内で <br> 認識を合わせる


# <!--fit--> 言い訳のようにつけられた <br> `TODO` や `FIXME`


# <!--fit--> いつまでも <br> 残っていませんか


# <!--fit--> いつか直す


# <!--fit--> その **"いつか"** は


# <!--fit--> 永遠に <br> 来ない

![bg contain opacity](assets/angrybaby.jpg)


# <!--fit--> 4. コードの概要


# <!--fit--> コードを要約するコメント


# 数行のコードを <br> 1つか2つの文で表現


# <!--fit--> コードよりも **素早く読める**


# <!--fit-->特に **作成者以外の誰か** <br> の役に立つ


# <!--fit--> 5. コードの意図の説明


# 解決領域ではなく <br> **問題領域** の説明

---

```java
// createdAt が LocalDate.now() の Entry を filter して 降順ソートする
```

---

![bg contain](assets/angrybaby.jpg)

---

```java
// 今日のランキングを作成する
```


# <!--fit--> パフォーマンスを重視して <br> **直感に反する** 実装になっている場合

---

```cpp
/*
 * 対象データについてはバイナリサーチよりもボイヤー-ムーア法の方が
 * 速いことが判明したため、当初は文字列検索技術を適用するには
 * 不適当と考えられていたが、より高速だが複雑なこの方法を採用した。
 */
```


# <!--fit-->必要ならいくらでも <br> 長くなっていい


# <!--fit--> 6. コードでは表せない情報

---

-   Java なら [JavaDoc](http://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/index.html)
-   Kotlin なら [KDoc](https://kotlinlang.org/docs/reference/kotlin-doc.html)
-   Objective-C/Swift なら [Apple の Markup フォーマット](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_markup_formatting_ref/)
-   Ruby なら [RDoc](https://docs.ruby-lang.org/ja/latest/library/rdoc.html) や [YARD](https://yardoc.org/)
-   書くならIDEの支援などを受けつつ正確に


# まとめると

> Code Tells You How
> Comments Tell You Why
> *&#x2014; [Code Tells You How, Comments Tell You Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)*


# <!--fit--> **効果的な** <br> コミットメッセージ

![bg contain right](assets/git_commit.png)


# <!--fit-->人は **何故** <br> コミットメッセージを書くのか


# 短期的には: **レビューのため**


# どのように問題を分割して解決したのか？


## 例: まずモデルを作り、サービスを作り、それらを利用するバッチを作り、最後に定期実行の設定をした


# コードには残らない <br> **自分なりの問題の捉え方** <br> **アプローチ方法** <br> を共有する


# 中長期的には: **問題解決のため**


# 1ヶ月後、半年後…


# <!--fit--> **障害だ!!**


# <!--fit--> なんでこうなってるんだ？


# <!--fit--> 直していいのか？


# <!--fit--> 頼りになるのは <br> コミットメッセージ

---

    commit 6e32f28b06c128840f233de553c0885e91da2b87 (HEAD -> master, origin/master)
    Author: John Doe <john@doe.com>
    Date:   Fri Apr 24 06:22:36 2020 +0900
    
        レビュー指摘反映

---

![bg contain](assets/angrybaby.jpg)


# <!--fit--> 変更内容は diff を見れば分かる


# <!--fit--> **背景** や **気持ち** <br> は分からない


# コード中のコメントには <br> **なぜそう書いてあるか** <br> を書く


# コミットメッセージには <br> **なぜ書かなければならなかったのか** <br> を書く

---

> Re-establishing the context of a piece of code is wasteful.
> We can't avoid it completely, so our efforts should go to **reducing it [as much] as possible.**
> 
> Commit messages can do exactly that

---

> and as a result, a commit message shows **whether a developer is a good collaborator.**
> *&#x2014; [Who-T: On commit messages](http://who-t.blogspot.com/2009/12/on-commit-messages.html)*


# <!--fit--> メッセージの構成

1.  **このコミットを適用するとどうなるか** を１行で言うと？
2.  なぜこの変更が為されたのか？その他補足情報
3.  チケットやissueなど、関係するリソースへのリンク


# 例

    feat(api): 特定のアカウントのクリップ数を取得出来るようにする
    
    * パフォーマンス要件は一旦考えず、動作するものを提供することを優先する
    * この後パフォーマンスを測定し、必要があれば改善する
    
    fixes #999

---

-   説明部分は箇条書きでも普通の文章でも 👌
-   リンク部分は [Fix #99](https://help.github.com/articles/closing-issues-via-commit-messages/) みたいなのでも 👌
    -   コンテキストの再構築に役立つ


# (FYI)[Spring Boot もこのような形式](https://github.com/spring-projects/spring-boot/blob/v2.2.6.RELEASE/CONTRIBUTING.adoc#code-conventions-and-housekeeping)

    Restore support for TransactionAwareCacheDecorator
    
    This commit makes sure to unwrap any transaction aware cache before
    collecting metrics for them.
    
    Closes gh-13861

<https://github.com/spring-projects/spring-boot/commit/a25b6bd473fb2e2071e377f9bfce8b60b1900c95>


# (FYI)[Angular もこのような形式](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

    feat(language-service): improve non-callable error message (#35271)
    
    This commit improves the context of a non-callable function error
    message by providing the affected call target and its non-callable type.
    
    PR Close #35271

<https://github.com/angular/angular/commit/acc483e2ebe7d8207fe183d8ec1424c549863184>


# <!--fit--> ありがちで <br> **やめろ!** <br> と思うもの

---

    レビュー対応

---

![bg contain](assets/angrybaby.jpg)


# <!--fit--> レビューで指摘されたから <br> 直したのかどうかは <br> **どうでもいい**


# <!--fit-->直すべきだと思ったなら <br> **その気持ち** を書け


## 最悪その Pull Request コメントへのリンクは貼れ

---

    微修正

---

![bg contain](assets/angrybaby.jpg)


# <!--fit--> 知るか


# <!--fit--> **まとめろ**

---

    もろもろ修正

---

![bg contain](assets/angrybaby.jpg)


# <!--fit--> まとめるな


# <!--fit--> **分けろ**


# ありがちだけど <br> 別にいいと思うもの

---

    コード整理をする
    コードフォーマッタをかける


# 読まなくていいことが分かるので 👌

---

    コメントを追加する


# <!--fit--> 実装にまとまってた方が望ましいけれど、<br> 読まなくてよさそうなことが分かるので 👌

---

    typoを修正する


# 読まなくていいことが分かるので 👌


# <!--fit--> ただし


# <!--fit--> 同一 Pull Request 内なら <br> (変更の文脈が同じなら) <br> まとめてほしい


# <!--fit--> ケアレスミス直したとか<br>考え直して変えたとか<br>人に言われて変えたとか


# <!--fit--> 一ヶ月後、一年後には <br> **不要なコンテキスト**


# <!--fit--> そうは言ってもさぁ…


# <!--fit--> 開発中にいちいち <br> コミットメッセージ <br> 熟考してらんないよ


# <!--fit--> **しなくていい**


# <!--fit--> レビュー前に <br> 整理すればいい


# <!--fit-->開発中のメッセージの例

---

    コードフォーマットかけた
    typo 修正
    修正漏れ
    仮実装
    fixup! 仮実装
    fixup! 仮実装
    デバッグログ追加
    修正
    なぜか直ってくれ
    今度こそ頼む
    specついｋ


# <!--fit--> レビュー提出時

---

    コード整理をする
    なんとかモデルを追加する ...
    なんとかサービスを追加する ...
    なんとかの処理が出来るようにする ...
    なんとか処理を定期的に実行するようにする ...


# <!--fit--> 使える道具


# `git rebase -i`

-   [7.6 Git のさまざまなツール - 歴史の書き換え](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E6%AD%B4%E5%8F%B2%E3%81%AE%E6%9B%B8%E3%81%8D%E6%8F%9B%E3%81%88)
-   コミット順番を変えたりまとめたりメッセージを編集したり
-   これはある程度の大きさの Pull Request なら **使わないことはない** ってくらい使う


# `git commit --fixup`

> When the commit log message begins with "squash! …​" (or "fixup! …​"), and there is already a commit in the todo list that matches the same `...`,
> automatically modify the todo list of rebase -i so that the commit marked for squashing comes right after the commit to be modified,
> and change the action of the moved commit from `pick` to `squash` (or `fixup`).
> 
> *&#x2014; [Git - git-rebase Documentation](https://git-scm.com/docs/git-rebase)*


# `git commit --fixup`

-   `git rebase` の `autosquah` オプションと組み合わせて使う
-   素で fixup 対象のコミットハッシュ指定するのはしんどいので、
    [fzf](https://github.com/junegunn/fzf/wiki/examples#git) なり [Magit](https://magit.vc/manual/magit/Initiating-a-Commit.html) なりを使いましょう


# `git push --force-with-lease`

> しかし、 `--force` には余り知られていない類似のオプションがあります。
> これを利用すると強制更新によるリポジトリの破壊を部分的に保護してくれます。これが `--force-with-lease` です。
> この `--force-with-lease` は誰もブランチのアップストリームを変更していないなど、期待された状況にならない限りはブランチへの更新を拒否します。
> 
> *&#x2014; [-force は有害だという考え; git の -force-with-lease を理解する - Atlassian Japan 公式ブログ | アトラシアン株式会社](https://www.atlassian.com/ja/blog/force-with-lease)*


# `git push --force-with-lease`

-   レビュー後にローカルで rebase した結果をリモートに反映するときに使う
-   いかなる force push も許容しないという考え方もあるのでチームの指針に従いましょう


# `git add -p`

-   [Git - 対話的なステージング](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E5%AF%BE%E8%A9%B1%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0)
-   修正内容の一部分だけステージング出来る
-   同じファイル内に、複数の目的が異なる変更が入っちゃってる場合に使う
-   ぼちぼち使う


# `git config commit.template`

-   コミットメッセージのテンプレートを設定出来る
-   テンプレートの例: <https://github.com/yewton/.dotfiles/blob/master/gitmessage>

```gitconfig
[commit]
	template = ~/.gitmessage
```


# <!--fit-->コミットメッセージ<br>まとめ


# <!--fit-->どのように よりも <br> **何を** ・ **何故** <br> に重点を置く


## どのように は **diff の役割**


# <!--fit--> このコミットを  <br> **cherry pick すると何が起こるのか？** <br> このコミットは <br> **どういう背景で積まれたのか？**


## <!--fit--> Pull Request の説明文を書くつもりで


# その他のドキュメント


# <!--fit--> **残すべき** <br>ドキュメント


# **Architecture Decision Record**

> One of the most effective ways of documenting architecture decisions is through Architecture Decision Records ([ADRs](https://adr.github.io/)).
> ADRs were first evangelized by Michael Nygard in a [blog post](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) and later marked as “adopt” in the [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records).
> 
> &#x2014; [Fundamentals of Software Architecture](http://fundamentalsofsoftwarearchitecture.com/)


# <!--fit--> **アーキテクチャ** とは

> 1つは、システムから個々のパーツへとどこまでもブレークダウンできるということ、もう1つは、簡単には変更できない決定事項だということである
> 
> *&#x2014; エンタープライズアプリケーションアーキテクチャパターン*


# <!--fit--> Architecture Decision<br>Record

-   容易に変更できない **アーキテクチャ上の意思決定** について記録する
    -   **なぜ** そうしたのか、 **他に何を検討した** のか


# なぜ残すのか？


# 将来同じようなことを <br> やりたくなったときに役に立つ


# どうしても変更したくなったときに <br> 何を考慮しなければならないか分かる


# <!--fit--> **Architecture Decision Record** の<br>フォーマット(例)


# 参考にしたもの: [Y-Statements](https://medium.com/olzzio/y-statements-10eb07b5a177)

![w:800](assets/ystatements.png)

要点を汲みつつ日本語での書き易さを考えて再構成

---


## 目的


## 背景


## 前提


## 選択肢


## 結論


# 目的

-   何を決定するものなのかを書く

    例) 行動ログ集約のアーキテクチャを決定する


# 背景

-   なぜその決定を下す必要があるのかを書く

    例) リアルタイムにユーザー行動の分析を行うことでサービスの改善を高速に行いたい


# 前提

-   特筆すべき前提条件があれば書く

    例) 10分までの遅延は許容する


# 選択肢

-   検討した内容をすべて説明する
    -   それぞれの提案について、メリット・デメリットを述べる


# 結論

-   採用する提案とその理由を書く。特に、デメリットにどう対処するのか(あるいは許容するのか)を忘れずに書く。

    例) A案を採用する。技術人員リソースの不足は開発支援チームの支援を受けることで解決する。


# <!--fit--> まとめ


# Code Tells You How <br> Comments Tell You **Why**


# <!--fit--> コミットメッセージは変更内容ではなく <br> **変更の意図・背景** を説明する


# 初めから<br>整理されたコミットメッセージ <br> を書く必要はない


# <!--fit--> 容易に変更不可能な <br> **アーキテクチャ上の意思決定の過程** <br> はドキュメントに残す


# <!--fit--> **今** この瞬間から


# <!--fit--> **完全なコメント** <br> **完全なコミットメッセージ** <br> 書きましょう


# <!--fit--> 大きめの機能設計などの際には <br> **Architecture Decision Record** <br> を残すようにしましょう


# <!--fit--> おわり


# Credit

-   [xkcd: Future Self](https://xkcd.com/1421/)
-   [Crazy Mean Baby | Know Your Meme](https://knowyourmeme.com/memes/crazy-mean-baby)
-   [Fundamentals of Software Architecture | fundamentalsofsoftwarearchitecture.com](http://fundamentalsofsoftwarearchitecture.com/)
-   [Architecture Decision Record Template: Y-Statements | ZIO’s Blog: Architectural Decisions, (Micro-)Services and More](https://medium.com/olzzio/y-statements-10eb07b5a177)

