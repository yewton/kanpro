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

---

> クラスとは、強くて明確な責務(responsibility)を共有するデータとルーチンの集まりである。
> *&#x2014; CODE COMPLETE 第6章 クラスの作成*


# <!--fit--> どうして **クラス** が必要なの？

---

> プログラム全体を一気に頭に詰め込むべきではない。
> プログラムの部分ごとに集中できるように、プログラムを整理して、一度に検討するプログラムの量は、最小限にとどめることを目指すべきである。
> *&#x2014; CODE COMPLETE 5.2.1 ソフトウェアの鉄則：複雑さへの対処*


# 現実世界のオブジェクト<br>または抽象的なオブジェクト( `Circle` に対する `Shape` など )を<br>モデリングする

---

> プログラミングでは、抽象化がShapeのように用意されているわけではないので、
> つじつまの合った抽象化を何とか考え出さなければならない。
> 適切な抽象オブジェクトを考え出すことは、オブジェクト指向設計における主な課題の1つである。
> *&#x2014; CODE COMPLETE 6.4 クラスを作成する理由*


# <!--fit-->複雑さを **緩和** ・ **分離** ・ **隠蔽** する

---

> クラスを作成する最も重要な理由は、プログラムの複雑さを低減することである。
> クラスの抽象化の威力を利用しなければ、複雑なプログラムを頭で整理することは不可能である。
> *&#x2014; CODE COMPLETE 6.4 クラスを作成する理由*


# その他

-   変更による影響を限定する
-   グローバルデータを隠蔽する
-   引数の受け渡しを合理化する
-   制御を一元化する
-   コードの再利用を促進する
-   プログラムのファミリを計画する
    -   独立したプログラムの組み合わせでソフトウェアを構成する
-   関連する操作をパッケージにまとめる
-   特定のリファクタリングを実行する


# <!--fit-->これ以外の目的で<br>クラスが使われていたら

---

![bg contain](assets/how-to-make-your-code-smell-like-teen-spirit-3-728.jpg)


# <!--fit-->望ましくない<br>クラス

---


# <!--fit-->God クラス

![bg contain opacity](assets/internet_god.png)

---

![bg contain opacity](assets/internet_god.png)

> 全知全能のクラスを作成してはならない。
> クラスがGet()ルーチンやSet()ルーチンを使って他のクラスからデータを取得することに明け暮れているなら
> （つまり、他人の領分に首を突っ込み、あれこれ口出ししているようなら）、
> それをゴッドクラスにまとめるよりも、他のクラスに整理する方がよいかどうか検討しよう
> *&#x2014; CODE COMPLETE 6.4.1 望ましくないクラス*


# <!--fit--> `FooManager` <br> `BarHelper` <br> `FizzHandler` <br> `BuzzInfo`

![bg contain opacity](assets/internet_god.png)

---

-   意味が広範過ぎる単語は怪しむ
-   より明確な名前がないか一晩考える
    -   `Supervisor`, `Context`, `Pool`, etc&#x2026;
-   [クラスの命名のアンチパターン - Qiita](https://qiita.com/magicant/items/8134edf969f9629fa66e)
-   [I Shall Call It.. SomethingManager](https://blog.codinghorror.com/i-shall-call-it-somethingmanager/)


# <!--fit-->[Object Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/) <br> オブジェクト指向健康体操

![bg contain opacity](assets/fitness-4245645_1280.jpg)


# <!--fit-->クラスは **50行まで**

![bg contain opacity](assets/fitness-4245645_1280.jpg)


# <!--fit-->パッケージは **10ファイルまで**

![bg contain opacity](assets/fitness-4245645_1280.jpg)


# <!--fit-->インスタンス変数は **2個まで**

![bg contain opacity](assets/fitness-4245645_1280.jpg)


# <!--fit-->" `.` " は1行につき **1個まで**

![bg contain opacity](assets/fitness-4245645_1280.jpg)

(デメテルの法則)


# <!--fit-->よいクラス


# <!--fit-->SOLID


# <!--fit-->単一責務の原則<br>Single responsibility principle


# <!--fit-->クラスを変更する理由は<br> **常に1つ** でなければならない


# <!--fit-->オープンクローズドの原則<br>Open/closed principle


# <!--fit-->モジュールは拡張に対して開いていなければならず<br>修正に対して閉じていなければならない

---

![bg contain](assets/thonk.png)


# <!--fit-->拡張に対して開いている


## 他の関連機能を実装するベースとして<br>使えなければならない


# <!--fit-->修正に対して閉じている


## 既存の振る舞いを変更することは出来ない、する必要がない

---

![bg contain](assets/thonk.png)

---

何か新しいことをやりたいときに、
既存のクラスを **修正せずに** そのまま、
**簡単に利用出来る** つくりになっていると素敵だね


# <!--fit-->リスコフの置換原則<br>Liskov substitution principle


# <!--fit-->サブクラスをその基底クラスと<br>置き換えることが出来なければならない

クラス `S` がクラス `T` のサブクラスである場合に、
プログラム中で使われる `T` のインスタンスは、
何ら修正を加えることなく `S` のインスタンスに置き換えることが出来なければならない


# <!--fit-->長方形と正方形

---

```java
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
        return this.length * this.breadth;
    }
}
```

---

```java
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
```

---

![bg contain right](assets/how-to-make-your-code-smell-like-teen-spirit-3-728.jpg)

サブクラスであることが制限にしか感じなくなったら怪しい

結局クラスごとの場合わけ書いてたら怪しい


# <!--fit-->インターフェース分離の原則<br>Interface segregation principle


# <!--fit-->クライアントが使用しないインターフェイスに<br>クライアントを強制的に依存させてはならない

---

![bg contain](assets/thonk.png)

---

![bg contain](assets/java_list.jpg)

---

![bg contain](assets/kotlin_list.png)


# <!--fit-->依存関係逆転の原則<br>Dependency inversion principle


# 上位モジュールを下位モジュールに依存させるのではなく<br>両方のモジュールを抽象化に依存させるべきである


# <!--fit-->実装ではなく抽象に依存せよ

---

![bg contain](assets/thonk.png)

---

![bg contain](assets/Traditional_Layers_Pattern.png)

---

![bg contain](assets/DIPLayersPattern.png)


# <!--fit-->ポリモーフィズム

---

-   同一のインタフェースを **複数の型に対して** 定義出来ること
-   異なるクラスが **同一のメッセージに対して** 応答出来ること

---

> 実行時まで処理するドアの種類を知らないOpen()やClose()のような操作をサポートする言語の機能を「ポリモーフィズム」という。
> *&#x2014; CODE COMPLETE 5.3.4 設計が単純になる場合の継承*

---

-   日本語では ****多態性**** とか ****多相**** とも
-   いくつか種類がある
    -   サブタイピング(単にポリモーフィズムという場合だいたいこれ)
    -   パラメータ(総称型とか)
    -   アドホック(オーバーロードとか)

---

> ■広範な型チェックよりもポリモーフィズムを選ぶ
> 
> case文の数が増えてきたら、継承を使って設計した方がよいという兆候かもしれない。
> *&#x2014; CODE COMPLETE 6.3.2 継承(「is a」の関係)*


# 具体例

from [Replace Conditional with Polymorphism](http://refactoring.com/catalog/replaceConditionalWithPolymorphism.html)

---

```java
class Bird {
  // ...
  double getSpeed()
    switch (mType) {
      case EUROPEAN:
        return getBaseSpeed();
      case AFRICAN:
        return getBaseSpeed() - getLoadFactor() * mNumberOfCoconuts;
      case NORWEGIAN_BLUE:
        return (mIsNailed) ? 0 : getBaseSpeed(mVoltage);
    }
    throw new RuntimeException ("Should be unreachable");
}
```

---

![bg contain](assets/polymorphism.png)


# <!--fit-->何が嬉しいのか


# <!--fit-->マジックナンバー<br>7 ± 2<br>(4 ± 1, 5 ± 3 という説も)

---

-   人間が一度に考えられるモノゴトの限界
-   ****ある特定のケースにだけ関心があるときに、ずらずらと列挙された case 文を読むのは苦行****
    -   読み違いも起こりやすい


# <!--fit-->[求めるな、命じよ](http://martinfowler.com/bliki/TellDontAsk.html)<br>Tell-Don't-Ask

---

-   どう振る舞うべきかはその ****オブジェクト自身**** が知っている
-   データと振る舞いを密接に関連付ける OOP の原則
-   これが ****ポリモーフィズムを使って実現出来る場合も**** ある


# <!--fit-->ただし


# <!--fit-->継承よりも合成を<br>Composition over inheritance

---

-   継承は強力だが使いこなすのは難しい
    -   そもそも真に継承関係にあるような事象は稀
-   ****リスコフの置換原則が守られないなら使ってはいけない****
-   合成ですんなり表現出来るならそれでいい


# <!--fit-->ここまでまとめ


# <!--fit-->オブジェクト指向でなぜつくるのか

-   ****複雑な問題**** を ****人間が解決できるようにする**** ため


# <!--fit-->よいクラスとは何か


# <!--fit-->SOLID


# <!--fit-->ポリモーフィズムの取扱い

-   ****問題を適切に表現出来る場合に**** 威力を発揮する
-   濫用すると ****人間の能力を越えた複雑度になりかねない****


# <!--fit-->命名について


# <!--fit-->[TwoHardThings](http://martinfowler.com/bliki/TwoHardThings.html)

---

> There are only two hard things in Computer Science:
> cache invalidation and naming things.
> *&#x2014; Phil Karlton*


# <!--fit-->[ジョシュアツリー](http://d.hatena.ne.jp/asakichy/20100720/1279583824)

---

![bg contain](assets/300px-Joshua_Tree_in_Joshua_Tree_National_Park.jpg)

---

![bg contain opacity](assets/300px-Joshua_Tree_in_Joshua_Tree_National_Park.jpg)

> 名前を言えるようになったとたんに、いたる所でそれを見るようになりました
> &#x2013; Robin Williams [デザイナーズ・デザインブック](https://www.amazon.co.jp/dp/B01LW1BC2L/)


# [名前重要](http://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%90%8D%E5%89%8D%E9%87%8D%E8%A6%81)

![bg right](assets/matz.JPG)

> あらゆる機能をデザインする時に、私はその名前にもっともこだわります。プログラマとしてのキャリアの中で、適切な名前をつけることができた機能は成功し、そうでない機能については後で後悔することが多かったように思うからです。
> *&#x2014; まつもと ゆきひろ*


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


# Credits

-   [Alex Ceban](https://pixabay.com/ja/users/alexceban-2463891/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4245645) による [Pixabay](https://pixabay.com/ja/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4245645) からの画像

