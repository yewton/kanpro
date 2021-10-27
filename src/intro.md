---
theme: gaia
class:
  - lead
paginate: true
_paginate: false
headingDivider: 1
title: 第一回 〈完全なプログラミング〉
description: 〈完全なプログラミング〉を目指す会 2020 の導入です
footer:  〈完全なプログラミング〉を目指す会 2020
_footer: ""
---


# <!--fit--> 〈完全なプログラミング〉を目指す会 2020


## <!--fit--> 第一回〈完全なプログラミング〉

yewton


# <!--fit--> 持ち帰って欲しいこと

1.  **〈完全なプログラミング〉** とは何か
2.  なぜそれを目指すのか


# <!--fit--> この会の目的

基本的には [CODE COMPLETE 第2版](https://www.amazon.co.jp/dp/489100455X/) を題材に、
yewton の考える **〈完全なプログラミング〉** を知り、
今後のコーディングや設計の基礎的な指針を
メンバー間で擦り合わせること

*(発散しがちな根源的議論に時間をかけず、*
*真にやるべきことに集中出来るようにしたい)*


# <!--fit--> 完全な<br>プログラミング


# <!--fit--> 🤔?

---

![bg right contain](assets/cc_book.jpg)

-   [CODE COMPLETE 第2版](https://www.amazon.co.jp/dp/489100455X/) の日本語訳のサブタイトルが **完全なプログラミングを目指して**
-   本書中に **〈完全なプログラミング〉に言及する記述は無し** :scream:

---

![bg right contain](assets/cc_book_e.jpg)

-   原著のサブタイトルは **A Practical Handbook of Software Construction**
    (ソフトウェアコンストラクションの実用手引き書)
-   翻訳に際して付けられた適当な煽り文句っぽい 😤


# <!--fit--> CODE<br>COMPLETE


# <!--fit--> 🤔?

---

![bg right contain](assets/Software_dev2.svg)

> A release is called **code complete** when the development team agrees that no entirely new source code will be added to this release.
> 
> &#x2014; *[Software release life cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle) From Wikipedia, the free encyclopedia*

---

-   特に定まった定義は無く、「コーディング完了」くらいの意味で使われう
-   **Code complete** した後に QA が行われ、バグフィックス後リリースされる


# <!--fit--> つまり


# <!--fit--> 〈完全なプログラミング〉


## <!--fit--> なるモノの定義は存在しない


# <!--fit--> 個人的な解釈

---

> 完璧さが達成されるのは、付け加えるものがないときではなく、 **取り除くものがないとき** である
> *&#x2014; アントワーヌ・ド・サン＝テグジュペリ*

![bg opacity contain](assets/de-Saint-Exupery.jpg)


# 完全 ≠ 完璧だけど…

*perfect* を完全と訳すこともあるし(例: 完全情報ゲーム *game with perfect information* )、
敢えて目指すモノなのだから、 個人的には **Perfect な** 、
つまり機能不足が無いのは当然のこととして、
**成果物に一切余分な物がなく、またその過程にも一切の無駄が無い**
プログラミングを目指したい :muscle:


# 10 年以上前の本なんですが 😅

-   CODE COMPLETE の原著は **2004 年** 発売
-   日進月歩のソフトウェア業界に身を置く我々がこんな **化石みたいな** 本を読む必要があるんですかね？


# <!--fit--> あります


## 😤


# ソフトウェアは **人間がつくる**

-   古今東西コードを書くのは **人間** だった
-   人間はこの 10 年で何か著しく変わったか？
-   知見や使えるツールは増えても **人間自体は変わってない**


# なぜ


## <!--fit--> 〈完全なプログラミング〉


## を目指すのか


# そもそも


## <!--fit--> プログラミング


## とは？

---

-   課題定義
-   要求開発
-   計画
-   アーキテクチャ設計
-   詳細設計
-   コーディング・デバッグ
-   各種テスト
-   保守

---

-   つまり **ソフトウェアを作るためのあらゆる活動**
-   別の言葉でいうと **〈ソフトウェアコンストラクション〉**
-   少なくとも自分が行う〈プログラミング〉とはこういうモノ


# なぜ


## <!--fit--> 〈完全〉


## を目指すのか


# 社会人だから？ 仕事だから？

-   いつまでもアマチュア気分のコードじゃ困るよキミィ
-   高度にプロフェッショナルなコードを書かないとネェ


# <!--fit--> **それは違う**


# <!--fit-->〈完全〉が **〈最速〉**


## だから


# <!--fit--> 🤔?


# <!--fit--> Q. コードを読むのは誰?


# <!--fit--> A. 人間


## 🕺

---

-   え、コードを読むのはインタプリタやコンパイラでしょ
-   僕らはコードを **書く** から :moneybag: をもらっているのであって、読む必要はないでしょ
-   読みやすいコード書いて欲しいとか **甘え** でしょ


# <!--fit--> 🙅

---

-   プログラマはコードを書くのと同じくらいコードを読む
    -   *CODE COMPLETE 28.5.1 プログラマは時間をどのように使うか*
-   もっと極端な意見も
    -   コードを書いたり修正するのに2割、あとの **8割はコードの理解に費やす**
    -   [What Do Programmers Really Do Anyway? (aka Part 2 of the Yardstick saga)](https://blogs.msdn.microsoft.com/peterhal/2006/01/04/what-do-programmers-really-do-anyway-aka-part-2-of-the-yardstick-saga/)


# <!--fit--> プログラミングの


## <!--fit--> 大半は ****保守****

---

> It's **only the first 10 minutes that the code's original** , when you type it in the first time. That's it.
> &#x2014; *[The Noble Art of Maintenance Programming](https://blog.codinghorror.com/the-noble-art-of-maintenance-programming/)*


# プログラミングは


## <!--fit--> **コミュニケーション** 🤝

---

> プログラミングにおいてコンピュータとのやり取りはほんの15%にすぎず、85%が人とのコミュニケーションである
> *&#x2013; CODE COMPLETE 33.1 個人の資質は話題からずれているか*

---

![bg opacity contain](assets/martin.jpg)

> 愚か者はコンピュータが理解できるコードを書く。
> 優秀なプログラマは人が理解できるコードを書く。
> *&#x2014; マーティン・ファウラー*

---

> 最初の開発時でさえ、コードを書くことよりも読むことのほうが多い。
> 読み手の便宜を犠牲にしてまで書き手の便宜を優先しても、表面的な節約にしかならない。
> *&#x2014; CODE COMPLETE 6.2.2 良いカプセル化*

---

> コードを読みやすくすることは、開発プロセスのオプション部分ではない。そして、読むときの便宜ではなく書くときの便宜を図るのは不経済である。
> *&#x2014; CODE COMPLETE 34.3 人間が1番、コンピュータは2番*

---

> コードを書くときには、あなたのプログラムを保守するだれかが、あなたの居場所を知っている凶暴な変質者であると心得よ。
> *&#x2014; CODE COMPLETE 32章 読めば分かるコード*

![bg opacity blur](assets/2020-01-20_05-49-07_TRTM1881.jpg)


# <!--fit-->勘違いしないで 😰

-   開発速度を犠牲にしてでも品質を上げろ
-   開発速度 < 品質
-   **じゃない！！！！！！！！**

---

![bg contain](assets/chart1.png)


# こうじゃない

![bg contain opacity blur](assets/chart1.png)

---

![bg contain](assets/chart2.png)


# こう

![bg contain opacity blur](assets/chart2.png)

---

![bg contain](assets/chart2.png)


# <!--fit-->こう!!!

![bg contain opacity blur](assets/chart2.png)


# <!--fit--> 完全は<br> **はやい**

---

-   詳細な仕様書を書くより **コードで表現出来るほうが早い** に決まってる
-   コードで表現出来ないことは逐一口頭で説明するより **文書化したほうが早い** に決まってる
-   引き継ぎの時になってから記憶を頼りに資料を作るより、 **取り掛かってるときに作ったほうが早い** に決まってる
-   etc.


# もちろん

-   いきなりトップスピードを出すのは難しい
    -   自分自身のスキルもそうだけれど、プロダクトオーナーや組織の習熟度、ビジネス環境などの **外部要因も大きい**
-   **助走・投資が必要**
    -   自分自身の訓練
    -   周囲の理解・協力
    -   プロダクトへの理解を深める


# <!--fit--> 完全は<br> **やすい**


# <!--fit-->品質は<br>タダである

![bg right contain](assets/quality-is-free.jpg)

---

> ただし、品質に対して喜んで金を出す人だけに対して
> *&#x2014; ピープルウェア 第3版 第4章 品質第一……時間さえ許せば*

![bg right contain](assets/2020-03-10_04-11-03_image-4.png)

---

> ソフトウェア開発は「高級料理」にはほど遠いが、ソフトウェアの品質は例外だ。
> ソフトウェア品質の原則とは、品質を改善すると開発コストが低くなることである。
> *&#x2014; CODE COMPLETE 20章 ソフトウェアの品質*


# <!--fit--> 🤔


# <!--fit--> Q. 生産性を低下させる要因は？


# <!--fit--> **エラー** 🐛


## それに伴うデバッグと修正

---

> ほとんどのプロジェクトで最も時間のかかるアクティビティは、正しく動作しないコードのデバッグと修正である。
> デバッグとそれに伴うリファクタリングなどの修正作業は、従来の単純なソフトウェア開発サイクルにおいて約50%の時間を占める。

---

> エラーを予防してデバッグを減らせば、生産性は向上する。
> したがって、開発スケジュールを短縮する最も明らかな方法とは、製品の品質を向上させ、ソフトウェアのデバッグや作業のやり直しにかかる時間を減らすことである。
> *&#x2014; CODE COMPLETE 20章 ソフトウェアの品質*


# <!--fit-->〈完全なプログラミング〉は<br> **はやい** ・ **やすい**


## なので


# <!--fit--> **うまい** <br> 😋


# まとめ

1.  *(yewton が提唱する)* ****〈完全なプログラミング〉**** とは「読めば分かるコードを書く」、「必要十分なドキュメントを書く」
    など、 **余計なモノを一切必要としない** ソフトウェアづくりをすること
2.  〈完全なプログラミング〉は ****はやい**** ・ ****やすい**** 。だから ****うまい****


# ディスカッション

本日の話を踏まえ、 ****KISS**** 、 ****DRY**** 、 ****YAGNI**** の３つの原則について、これらの原則がなぜ大切にされているのかを話し合いましょう。


# Credits

-   [CODE COMPLETE 第2版](https://www.amazon.co.jp/dp/489100455X/)
-   [ピープルウエア 第3版](https://www.amazon.co.jp/dp/4822285243)
-   [Marp - Markdown Presentation Ecosystem](https://marp.app/)
-   [凶暴化した暴徒が鉄拳制裁のフリー素材 from ぱくたそ](https://www.pakutaso.com/20170458107post-11122.html)

