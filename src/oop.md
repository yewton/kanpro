---

theme: gaia
class:
  - lead
paginate: true
_paginate: false
headingDivider: 1

title: 第二回 オブジェクト指向プログラミング
description: 〈完全なプログラミング〉を目指す会 2020 オブジェクト指向プログラミング編です
footer:  〈完全なプログラミング〉を目指す会 2020
_footer: ""

---


# <!--fit--> 〈完全なプログラミング〉を目指す会 2020


## <!--fit--> 第二回 オブジェクト指向プログラミング

yewton


# <!--fit-->オブジェクト指向<br>プログラミング


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


# <!--fit-->三つの原則


# <!--fit-->KISS<br>DRY<br>YAGNI


# <!--fit-->なぜ〈原則〉を知ってほしいか


# <!--fit-->なぜ **〈原則〉になった** のか


# <!--fit--> 原則と呼ばれるものの多くは<br> **経験則**


## <!--fit--> 多くの人が同意した <br> **ベストプラクティス集** みたいなもん


# 同じ轍を踏むことのないよう


## <!--fit--> **DRY** に生きよう


# 今日持ち帰って欲しいこと

1.  オブジェクト指向でなぜつくるのか
2.  よいクラスとは何か
3.  ポリモーフィズムの取扱い
4.  (おまけ)よい命名について


# <!--fit--> オブジェクト指向の<br> **歴史** に学ぶ


# <!--fit-->問題


# **オブジェクト指向** と<br> **オブジェクト指向言語** <br>どちらが先にあったか？


# <!--fit-->正解は


# <!--fit--> **言語**

---

-   先に ****オブジェクト**** や ****クラス**** という概念を盛り込んだ ****言語**** が作られた
    -   対象とする問題領域の表現に有用だったから
    -   当初は ****オブジェクト指向という言葉はなかった****
-   言語から着想を得てオブジェクト指向という概念が生まれ、その概念を体現するオブジェクト指向言語が生まれていった


# <!--fit-->問題


# <!--fit--> **最初のオブジェクト指向言語** <br>とは？


# <!--fit-->正解は


# <!--fit-->Simula 67

---

-   Simula 67 - 1967年
-   Smalltalk - 1980年
-   C++ - 1983年


# <!--fit-->何がいいたいか


# <!--fit-->オブジェクト指向とは、


## 複雑な問題解決のために<br> 遥か昔に発明され、<br> 今日まで現役の <br> **「問題の考え方」**


# <!--fit-->役に立たない <br> ワケがない


# <!--fit-->問題


# <!--fit--> **クラス** とは？


# <!--fit-->正解は

> クラスとは、強くて明確な責務(responsibility)を共有するデータとルーチンの集まりである。
> *&#x2014; CODE COMPLETE 第6章 クラスの作成*

---

> プログラム全体を一気に頭に詰め込むべきではない。プログラムの部分ごとに集中できるように、プログラムを整理して、一度に検討するプログラムの量は、最小限にとどめることを目指すべきである。
> *&#x2014; CODE COMPLETE 5.2.1 ソフトウェアの鉄則：複雑さへの対処*

---


# <!--fit-->\*— Code Complete 6.4.2 クラスを作成する理由のまとめ\*

---


# <!--fit-->または抽象的なオブジェクト


# <!--fit-->\\( \`Circle\` に対する \`Shape\` など )

---

> プログラミングでは、抽象化がShapeのように用意されているわけではないので、
> つじつまの合った抽象化を何とか考え出さなければならない。
> 適切な抽象オブジェクトを考え出すことは、オブジェクト指向設計における主な課題の1つである。

---


# <!--fit-->緩和する


# <!--fit-->分離する


# <!--fit-->隠蔽する

---

> クラスを作成する最も重要な理由は、プログラムの複雑さを低減することである。
> クラスの抽象化の威力を利用しなければ、複雑なプログラムを頭で整理することは不可能である。

---


# <!--fit-->コードの再利用を促進する

---

---

\![fit](images/how-to-make-your-code-smell-like-teen-spirit-3-728.jpg)

---


# <!--fit-->望ましくない


# <!--fit-->クラス


# <!--fit-->― Code Complete 6.4.1 望ましくないクラス

---

\![](images/internet<sub>god.png</sub>)


# <!--fit-->「God」

---

> 全知全能のクラスを作成してはならない。
> クラスがGet()ルーチンやSet()ルーチンを使って他のクラスからデータを取得することに明け暮れているなら
> （つまり、他人の領分に首を突っ込み、あれこれ口出ししているようなら）、
> それをゴッドクラスにまとめるよりも、他のクラスに整理する方がよいかどうか検討しよう

---

\![](images/internet<sub>god.png</sub>)


# <!--fit-->\`FooManager\`


# <!--fit-->\`BarHelper\`


# <!--fit-->\`FizzHandler\`


# <!--fit-->\`BuzzInfo\`

---

\![](images/internet<sub>god.png</sub>)

-   意味が広範過ぎる単語は怪しむ
-   より明確な名前がないか一晩考える
    -   \`Supervisor\`, \`Context\`, \`Bucket\`, \`Pool\`, etc&#x2026;
-   [クラスの命名のアンチパターン \&#x00ad; Qiita](<http://qiita.com/magicant/items/8134edf969f9629fa66e>)
-   [I Shall Call It\\.\\. SomethingManager](<https://blog.codinghorror.com/i-shall-call-it-somethingmanager/>)

---

\![](images/calisthenics.jpg)


# <!--fit-->[Object Calisthenics](<https://williamdurand.fr/2013/06/03/object-calisthenics/>)


# <!--fit-->オブジェクト指向健康体操

---

\![](images/calisthenics.jpg)


# <!--fit-->パッケージは ****10ファイルまで****


# <!--fit-->インスタンス変数は ****2個まで****


# <!--fit-->"\`.\`" は1行につき ****1個まで****

---


# <!--fit-->よいクラス

---


# <!--fit-->SOLID

----


# <!--fit-->単一責務の原則


# <!--fit-->Single responsibility principle

---

----


# <!--fit-->オープンクローズドの原則


# <!--fit-->Open/closed principle

---

---

\![fit](images/thonk.png)

---


# <!--fit-->\\(拡張に対して開いている)

---


# <!--fit-->\\(修正に対して閉じている)

---


# <!--fit-->リスコフの置換原則


# <!--fit-->Liskov substitution principle

---

---

\![fit](images/thonk.png)

---

\![fit](images/framy.jpg)


# <!--fit-->長方形と正方形

---

\`\`\`java
public class Rectangle {
    private int length;
    private int breadth;

    public int getLength() {
        return length;
    }
    public void setLength(int length) {
        this.length = length;
    }
    public int getBreadth() {
        return breadth;
    }
    public void setBreadth(int breadth) {
        this.breadth = breadth;
    }
    public int getArea() {
        return this.length \* this.breadth;
    }
}
\`\`\`

---

\`\`\`java
public class Square extends Rectangle {
    @Override
    public void setBreadth(int breadth) {
        super.setBreadth(breadth);
        super.setLength(breadth);
    }
    @Override
    public void setLength(int length) {
        super.setLength(length);
        super.setBreadth(length);
    }
}
\`\`\`

---

\![fit](images/how-to-make-your-code-smell-like-teen-spirit-3-728.jpg)

---


# <!--fit-->インターフェース分離の原則


# <!--fit-->Interface segregation principle

---

---

\![fit](images/thonk.png)

---

\![fit](images/java<sub>list.jpg</sub>)

---

\![fit](images/kotlin<sub>list.png</sub>)

---


# <!--fit-->依存関係逆転の原則


# <!--fit-->Dependency inversion principle

---

---


# <!--fit-->実装ではなく抽象に依存せよ

---

\![fit](images/thonk.png)

---

\![fit](images/Traditional<sub>Layers</sub><sub>Pattern.png</sub>)

---

\![fit](images/DIPLayersPattern.png)

---


# <!--fit-->ポリモーフィズム

---

-   同一のインタフェースを ****複数の型に対して**** 定義出来ること
-   異なるクラスが ****同一のメッセージに対して**** 応答出来ること

----

> 実行時まで処理するドアの種類を知らないOpen()やClose()のような操作をサポートする言語の機能を「ポリモーフィズム」という。
&#x2013; Code Complete 5.3.4 設計が単純になる場合の継承

----

-   日本語では ****多態性**** とか ****多相**** とも
-   いくつか種類がある
    -   サブタイピング(単にポリモーフィズムという場合だいたいこれ)
    -   パラメータ(総称型とか)
    -   アドホック(オーバーロードとか)

----

> ■広範な型チェックよりもポリモーフィズムを選ぶ
> case文の数が増えてきたら、継承を使って設計した方がよいという兆候かもしれない。
&#x2013; Code Complete 6.3.2 継承(「is a」の関係)

----

\## 具体例

-   [Replace Conditional with Polymorphism](<http://refactoring.com/catalog/replaceConditionalWithPolymorphism.html>)

----
\`\`\`java
class Bird {
  // &#x2026;
  double getSpeed()
    switch (mType) {
      case EUROPEAN:
        return getBaseSpeed();
      case AFRICAN:
        return getBaseSpeed() - getLoadFactor() \* mNumberOfCoconuts;
      case NORWEGIAN<sub>BLUE</sub>:
        return (mIsNailed) ? 0 : getBaseSpeed(mVoltage);
    }
    throw new RuntimeException ("Should be unreachable");
}
\`\`\`

---

\![fit](images/polymorphism.png)

---


# <!--fit-->何が嬉しいのか

---


# <!--fit-->マジックナンバー


# <!--fit-->7 ± 2


# <!--fit-->\\(4 ± 1, 5 ± 3 という説も)

---

-   人間が一度に考えられるモノゴトの限界
-   ****ある特定のケースにだけ関心があるときに、ずらずらと列挙された case 文を読むのは苦行****
    -   読み違いも起こりやすい

---


# <!--fit-->[求めるな、命じよ](<http://martinfowler.com/bliki/TellDontAsk.html>)


# <!--fit-->Tell-Don't-Ask

---

-   どう振る舞うべきかはその ****オブジェクト自身**** が知っている
-   データと振る舞いを密接に関連付ける OOP の原則
-   これが ****ポリモーフィズムを使って実現出来る場合も**** ある

---


# <!--fit-->ただし

---


# <!--fit-->継承よりも合成を


# <!--fit-->Composition over inheritance

---

-   継承は強力だが使いこなすのは難しい
-   ****リスコフの置換原則が守られないなら使ってはいけない****
-   合成ですんなり表現出来るならそれでいい

---


# <!--fit-->ここまでまとめ

---


# <!--fit-->オブジェクト指向でなぜつくるのか

-   ****複雑な問題**** を ****人間が解決できるようにする**** ため

---


# <!--fit-->よいクラスとは何か


# <!--fit-->SOLID

---


# <!--fit-->ポリモーフィズムの取扱い

-   ****問題を適切に表現出来る場合に**** 威力を発揮する
-   濫用すると ****人間の能力を越えた複雑度になりかねない****

---


# <!--fit-->命名について

---


# <!--fit-->[TwoHardThings](<http://martinfowler.com/bliki/TwoHardThings.html>)

---

> There are only two hard things in Computer Science:
> cache invalidation and naming things.
&#x2013; Phil Karlton

---


# <!--fit-->[ジョシュアツリー](<http://d.hatena.ne.jp/asakichy/20100720/1279583824>)

---

\![fit](images/300px-Joshua<sub>Tree</sub><sub>in</sub><sub>Joshua</sub><sub>Tree</sub><sub>National</sub><sub>Park.jpg</sub>)

---

\![fit](images/300px-Joshua<sub>Tree</sub><sub>in</sub><sub>Joshua</sub><sub>Tree</sub><sub>National</sub><sub>Park.jpg</sub>)

> 名前を言えるようになったとたんに、いたる所でそれを見るようになりました
&#x2013; Robin Williams [ノンデザイナーズ・デザインブック](<https://www.amazon.co.jp/dp/B01LW1BC2L/>)

----


# <!--fit-->[名前重要](<http://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%90%8D%E5%89%8D%E9%87%8D%E8%A6%81>)

---

\![fit](images/matz.JPG)

---

\![fit](images/matz.JPG)

> あらゆる機能をデザインする時に、私はその名前にもっともこだわります。プログラマとしてのキャリアの中で、適切な名前をつけることができた機能は成功し、そうでない機能については後で後悔することが多かったように思うからです。
&#x2013; まつもと ゆきひろ

----


# <!--fit-->よいメソッド名


# <!--fit-->― Code Complete 7.3 良いルーチン名

----


# <!--fit-->メソッドが行うことをすべて説明する

-   そのために \`And\` がたくさん並ぶようなら ****分割を検討する****
-   暗黙的な副次作用を持つようなメソッドをそもそも作らない

----

---

-   ****\`handle\`, \`perform\`, \`output\`, \`process\`**** , etc&#x2026;
-   そうは言ってもなんとも名付けがたい、そんなときは ****実装自体を疑え****
    -   メソッドにも ****単一責務の原則**** は当てはまる
-   \`HogeJob#perform\` みたいなのは :ok:
    -   クラス名と組み合わせれば分かる

----


# <!--fit-->必要な長さのメソッド名にする

-   無理に短くしようとしなくていい
-   でもその結果あんまりにも長いなら ****実装を疑え****

----


# <!--fit-->正確な反意語を使用する


# <!--fit-->:ok<sub>woman</sub>: \`open/close\`, \`first/last\`, \`take/drop\`, etc&#x2026;


# <!--fit-->:no<sub>good</sub>: \`register,sign<sub>up</sub>/withdraw,quit,resign\`, etc..

---


# <!--fit-->よいメソッド名

---


# <!--fit-->よいインタフェース

---

\![fit right](images/dash-256@2x.png)

-   既存ライブラリのドキュメント眺めるだけでもとても参考になるので [Dash](<https://kapeli.com/dash>) とか買おう

----


# <!--fit-->よい変数名とは


# <!--fit-->Code Complete ― 第11章 変数名の力

----


# <!--fit-->大切なこと

-   変数が表すものを ****完全かつ正確に**** 説明する
-   その変数が表すものを ****言葉で表現してみよう****
-   ****解読する必要がない**** 名前をつけよう

**― 11.1.1 名前を付ける時に一番大切なことは**

----


# <!--fit-->問題志向の名前

-   方法(how)ではなく ****モノ(what)**** を表す

**― 11.1.2 問題志向の名前**

---


# <!--fit-->:no<sub>good</sub>: \`inputRec\` :ok<sub>woman</sub>: \`employeeData\`


# <!--fit-->:no<sub>good</sub>: \`stateFlag\` :ok<sub>woman</sub>: \`printerReady\`

----


# <!--fit-->名前の最適な長さ

-   平均 ****10〜16文字**** が最もデバッグしやすい(1990年のとある研究)
-   厳密に↑を守る必要はないが目安にはなる
-   20文字を超えるようなら ****自分を疑う****

**― 11.1.3 名前の最適な長さ**

----


# <!--fit-->変数名とスコープ

-   ****スコープが短ければ名前も短くていい****
    -   ループカウンタなどは普通に \`i\` とかでいい
-   メンバ変数など ****スコープが長い、生存期間が長い場合は慎重に命名**** する

**― 11.1.4 変数名へのスコープの影響**

----


# <!--fit-->計算値による変数名の修飾

-   ****\`total\`, \`sum\`, \`average\`, \`max\`, \`min\`**** , etc.
-   修飾子を最後につけるなど ****一貫性を持たせる****
    -   ****変数名のもっとも重要な部分を先頭にする**** 方針などが考えられる
        -   \`revenue<sub>hTotal</sub>\`, \`expenseAverage\`

**― 11.1.5 計算値による変数名の修飾**

---

\![fit](images/matz.JPG)


# <!--fit-->[名前重要](<http://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%90%8D%E5%89%8D%E9%87%8D%E8%A6%81>)

---


# <!--fit-->おわり

