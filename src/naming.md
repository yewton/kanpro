---

theme: gaia
class:
  - lead
paginate: true
_paginate: false
headingDivider: 1

title: 第三回 命名
description: 〈完全なプログラミング〉を目指す会 2020 命名編です
footer:  〈完全なプログラミング〉を目指す会 2020
_footer: ""

---


# <!--fit--> 〈完全なプログラミング〉を目指す会 2020


## <!--fit--> 第三回 命名

yewton


# <!--fit-->命名


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


# <!--fit-->オブジェクト指向でなぜつくるのか


# <!--fit--> **複雑な問題** を <br> **人間が解決できるようにする** ため


# <!--fit-->よいクラスとは


# <!--fit--> **SOLID**


# <!--fit-->ポリモーフィズムのうまみ

---

-   **継承は問題を適切に表現出来る場合に** 威力を発揮する
    -   濫用すると **人間の能力を越えた複雑度になりかねない**
-   インターフェースを介した **依存関係逆転こそがオブジェクト指向の真価**
-   問題の大きさを **人間が扱えるサイズに収める** ために使う


# 復習終わり


# 今日持ち帰って欲しいこと

1.  命名は重要か？
2.  命名 Tips


# <!--fit-->命名


# <!--fit-->[TwoHardThings](http://martinfowler.com/bliki/TwoHardThings.html)

---

> There are only two hard things in Computer Science:

---

> cache invalidation and naming things.
> *&#x2014; Phil Karlton*


# <!--fit-->[ジョシュアツリーの法則](https://ktr-05.hatenablog.com/entry/2019/07/07/184436#%E3%82%B8%E3%83%A7%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%84%E3%83%AA%E3%83%BC%E3%81%AE%E6%B3%95%E5%89%87)

---

![bg contain](assets/2020-04-24_05-21-45_joshua-tree-1772159_1280.jpg)

---

![bg contain opacity](assets/2020-04-24_05-21-45_joshua-tree-1772159_1280.jpg)

> 名前を言えるようになったとたんに、いたる所でそれを見るようになりました
> &#x2013; Robin Williams [ノンデザイナーズ・デザインブック](https://www.amazon.co.jp/dp/B01LW1BC2L/)

---

-   名前を知らなければ **知覚することすら出来ない**
-   森羅万象、名前を与えることで初めて、それについて考えることが出来るようになる


# [名前重要](http://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%90%8D%E5%89%8D%E9%87%8D%E8%A6%81/)

![bg right](assets/2020-04-24_05-40-04_1024px-Yukihiro_Matsumoto_EuRuKo_2011.jpg)

> あらゆる機能をデザインする時に、私はその名前にもっともこだわります。プログラマとしてのキャリアの中で、適切な名前をつけることができた機能は成功し、そうでない機能については後で後悔することが多かったように思うからです。
> *&#x2014; まつもと ゆきひろ*


# <!--fit--> **クラス名** <br> **メソッド名** <br> **変数名**


# <!--fit-->よいクラス名


# <!--fit--> **悪い** クラス名

---

![bg contain opacity](assets/internet_god.png)


# <!--fit--> `FooManager` <br> `BarHelper` <br> `FizzHandler` <br> `BuzzInfo`

![bg contain opacity](assets/internet_god.png)


# <!--fit-->何の抽象化なのか <br> **一見して分からない**

![bg contain opacity](assets/internet_god.png)


# 命名に悩んだら

標準ライブラリや利用している外部ライブラリに、
どのようなクラスが定義されているか？

眺めてみるとよいです。


# <!--fit-->よいメソッド名

*&#x2014; CODE COMPLETE 7.3 良いルーチン名*


# <!--fit-->メソッドが行うことをすべて説明する

-   そのために `And` がたくさん並ぶようなら **分割を検討する**
-   暗黙的な副次作用を持つようなメソッドをそもそも作らない


# **意味のない** 動詞 <br> **あいまい** な動詞 <br> **どっちつかず** の動詞 <br> を使わない

---

-   `handle`, `perform`, `output`, `process` , etc&#x2026;
-   そうは言ってもなんとも名付けがたい、そんなときは **実装自体を疑え**
    -   メソッドにも **単一責務の原則** は当てはまる
-   `HogeJob#perform` みたいなのは :ok:
    -   クラス名と組み合わせれば分かるので


# <!--fit-->必要な長さのメソッド名にする

-   無理に短くしようとしなくていい
-   でもその結果あんまりにも長いなら **実装を疑え**


# <!--fit-->正確な反意語を使用する


## <!--fit-->👍 `open/close`, `first/last`, `take/drop`, etc&#x2026;


## <!--fit-->👎 `register,sign_up/withdraw,quit,resign`, etc..


# 命名に悩んだら

標準ライブラリや利用している外部ライブラリに、
どのようなメソッドが定義されているか？

眺めてみるとよいです。


# <!--fit-->よい変数名

*&#x2014; CODE COMPLETE 第11章 変数名の力*


# 大切なこと

-   変数が表すものを **完全かつ正確に** 説明する
-   その変数が表すものを **言葉で表現してみよう**
-   **解読する必要がない** 名前をつけよう

*&#x2014; CODE COMPLETE 11.1.1 名前を付ける時に一番大切なことは*


# <!--fit-->問題志向の名前

-   方法(how)ではなく **モノ(what)** を表す

-   👎 `inputRec` 👍 `employeeData`
-   👎 `stateFlag` 👍 `printerReady`
-   👎 `calVal` 👍 `sum`

*&#x2014; CODE COMPLETE 11.1.2 問題志向の名前*


# <!--fit-->名前の最適な長さ

-   平均 **10〜16文字** が最もデバッグしやすい(1990年のとある研究)
-   厳密に守る必要はないが目安にはなる
-   20文字を超えるようなら **自分を疑う**

*&#x2014; CODE COMPLETE 11.1.3 名前の最適な長さ*


# <!--fit-->変数名とスコープ

-   **スコープが短ければ名前も短くていい**
    -   ループカウンタなどは `i` とかでいい
-   メンバ変数など **スコープが長い、生存期間が長い場合は慎重に命名** する

*&#x2014; CODE COMPLETE 11.1.4 変数名へのスコープの影響*


# <!--fit-->計算値による変数名の修飾

-   **`total`, `sum`, `average`, `max`, `min`** , etc.
-   修飾子を最後につけるなど **一貫性を持たせる**
    -   **変数名のもっとも重要な部分を先頭にする** 方針などが考えられる
        -   `revenue_Total`, `expenseAverage`
-   チームで定めましょう

*&#x2014; CODE COMPLETE 11.1.5 計算値による変数名の修飾*


# 命名に悩んだら

標準ライブラリや利用している外部ライブラリに、
どのようなメソッド仮引数が定義されているか？
OSS だったらコードを見てどのような変数が定義されているか？

眺めてみるとよいです。


# <!--fit-->まとめ


# <!--fit-->命名は重要か？


# <!--fit-->[名前重要](http://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%90%8D%E5%89%8D%E9%87%8D%E8%A6%81)

![bg right](assets/2020-04-24_05-40-04_1024px-Yukihiro_Matsumoto_EuRuKo_2011.jpg)


# <!--fit-->命名 Tips

-   それが何をするのか、何を表すのか、まずは **言葉で説明してみる**
-   **解読** の必要が生じるような命名を避け、 **読めば分かる** 名前をつけよう
-   悩んだら **ライブラリをお手本にしよう**


# <!--fit-->おわり


# Credit

-   [sspiehs3](https://pixabay.com/ja/users/sspiehs3-3438126/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1772159) による [Pixabay](https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1772159) からの画像([ジョシュアツリー](https://pixabay.com/ja/photos/%E3%82%B8%E3%83%A7%E3%82%B7%E3%83%A5%E3%82%A2-%E3%83%84%E3%83%AA%E3%83%BC-%E3%83%84%E3%83%AA%E3%83%BC-%E5%85%AC%E5%9C%92-1772159/))

