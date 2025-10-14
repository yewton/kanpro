---
routerMode: 'hash'
theme: seriph
title: '第二回 オブジェクト指向プログラミング'
description: '〈完全なプログラミング〉を目指す会 2020 オブジェクト指向プログラミング編です'
footer: '〈完全なプログラミング〉を目指す会 2020'
drawings:
  enabled: true
---

# 〈完全なプログラミング〉を目指す会 2020
## 第二回 オブジェクト指向プログラミング

yewton

---

# オブジェクト指向<br>プログラミング

---

# の前に

---

# *復習*

---

# 〈完全なプログラミング〉
## とは？

---

# 「読めば分かるコードを書く」<br>「必要十分なドキュメントを書く」

---

# 余計なモノを<br>一切必要としない
## ソフトウェアづくり

---

# その心は？

---

# コードは圧倒的に<br> *人間によって読まれる*

---

# 故に〈完全なプログラミング〉は<br>圧倒的に *はやい*

---

# さらに

---

# 品質の改善は<br> *コストを削減する*

---

# 故に〈完全なプログラミング〉は<br>圧倒的に *やすい*

---

# *はやい* <br> *やすい*

---

# *うまい* <br> 😋

---

# 三つの原則

---

# KISS<br>DRY<br>YAGNI

---

# なぜ〈原則〉を知ってほしいか

---

# なぜ *〈原則〉になった* のか

---

# 原則と呼ばれるものの多くは<br> *経験則*
## 多くの人が同意した <br> *ベストプラクティス集* みたいなもん

---

# 同じ轍を踏むことのないよう
## *DRY* に生きよう

---

# 今日持ち帰って欲しいこと

1. オブジェクト指向でなぜつくるのか
2. よいクラスとは何か
3. ポリモーフィズムのうまみ

---

# オブジェクト指向の<br> *歴史* に学ぶ

---

# 問題

---

# *オブジェクト指向の発明* と<br> *オブジェクトやクラスの登場* <br> どちらが先か

---

# 正解は

---

# *オブジェクトやクラスの登場*

---

- 先に **オブジェクト** や **クラス** という概念を盛り込んだ **言語** が作られた
    - 対象とする問題領域の表現に有用だったから
    - 当初は **オブジェクト指向という言葉はなかった**
- 言語から着想を得てオブジェクト指向という概念が生まれ、その概念を体現するオブジェクト指向言語が生まれていった

---

# 問題

---

# *オブジェクトやクラスが* <br> *最初に登場した言語* <br>とは？

---

# 正解は

---

# Simula 67

---

** 1967年 - Simula 67
** 1980年 - Smalltalk
** 1983年 - C++

---

# 何が言いたいか

---

# オブジェクト指向とは、
## 複雑な問題解決のために<br> 遥か昔に発明され、今日まで現役の <br> *「問題の考え方」*

---

# 役に立たない <br> ワケがない

---

# 問題

---

# *クラス* とは？

---

# 正解は

---
layout: quote
---

> クラスとは、強くて明確な責務(responsibility)を共有するデータとルーチンの集まりである。
>
> *--- CODE COMPLETE 第6章 クラスの作成*

---

# どうして *クラス* を作るのか？

---
layout: quote
---

> プログラム全体を一気に頭に詰め込むべきではない。
> プログラムの部分ごとに集中できるように、プログラムを整理して、一度に検討するプログラムの量は、最小限にとどめることを目指すべきである。
>
> *--- CODE COMPLETE 5.2.1 ソフトウェアの鉄則：複雑さへの対処*

---
layout: quote
---
> 有能なプログラマは自分の脳味噌のサイズがいかに制限されたものであるかをよく心得ています
>
> *--- エドガー・W・ダイクストラ [謙虚なるプログラマ (The Humble Programmer)](http://www.unixuser.org/~euske/doc/dijkstra-ja/thehumbleprogrammer.html)*

<div class="abs-bl m-6 flex items-center">
  <img src="/assets/2020-03-25_03-36-32_edsger-dijkstra-e1528238724590.jpg" class="h-40" />
</div>

---

# こんなときに *クラス* を作る

---

# 現実世界のオブジェクト<br>または抽象的なオブジェクト( `=`Circle`=` に対する `=`Shape`=` など )を<br>モデリングする

---
layout: quote
---

> プログラミングでは、抽象化がShapeのように用意されているわけではないので、
> つじつまの合った抽象化を何とか考え出さなければならない。
> 適切な抽象オブジェクトを考え出すことは、オブジェクト指向設計における主な課題の1つである。
>
> *--- CODE COMPLETE 6.4 クラスを作成する理由*

---

# 複雑さを *緩和* ・ *分離* ・ *隠蔽* する

---
layout: quote
---

> クラスを作成する最も重要な理由は、プログラムの複雑さを低減することである。
> クラスの抽象化の威力を利用しなければ、複雑なプログラムを頭で整理することは不可能である。
>
> *--- CODE COMPLETE 6.4 クラスを作成する理由*

---

# その他

- 変更による影響を限定する
- グローバルデータを隠蔽する
- 引数の受け渡しを合理化する
- 制御を一元化する
- コードの再利用を促進する
- プログラムのファミリを計画する
  - 独立したプログラムの組み合わせでソフトウェアを構成する
- 関連する操作をパッケージにまとめる
- 特定のリファクタリングを実行する

---

# *望ましくない* <br>クラス

---

# God クラス

---
background: /assets/internet_god.png
backgroundSize: contain
---

---
background: /assets/internet_god.png
backgroundSize: contain
---

> 全知全能のクラスを作成してはならない。
> クラスがGet()ルーチンやSet()ルーチンを使って他のクラスからデータを取得することに明け暮れているなら
> （つまり、他人の領分に首を突っ込み、あれこれ口出ししているようなら）、
> それをゴッドクラスにまとめるよりも、他のクラスに整理する方がよいかどうか検討しよう
>
> *--- CODE COMPLETE 6.4.1 望ましくないクラス*

---

# `=FooManager=` <br> `=BarHelper=` <br> `=FizzHandler=` <br> `=BuzzInfo=`

---

- 意味が広範過ぎる単語は怪しむ
- より明確な名前がないか一晩考える
  - `=Supervisor=`, `=Context=`, `=Pool=`, etc...
- [クラスの命名のアンチパターン - Qiita](https://qiita.com/magicant/items/8134edf969f9629fa66e)
- [I Shall Call It.. SomethingManager](https://blog.codinghorror.com/i-shall-call-it-somethingmanager/)

---

# [Object Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/) <br> オブジェクト指向健康体操

---

# クラスは *50行まで*

---

# パッケージは *10ファイルまで*

---

# インスタンス変数は *2個まで*

---

# " `=`=` " は1行につき *1個まで*
(デメテルの法則)

---

# *よい* クラス

---

# *SOLID*

---

# *単一責務の原則* <br> /Single responsibility principle/

---

# クラスを変更する理由は<br> *常に1つ* でなければならない

---

# *あるクラスを変更したいと思う人* は<br> *ひとり* だけ

---

- 見た目を変えたい
- ビジネスルールを変えたい
- ミドルウェアを変えたい
- 計算量を減らしたい
- 通信量を減らしたい
- etc.

---

# *オープンクローズドの原則* <br> /Open/closed principle/

---

# モジュールは *拡張に対して開いて* いなければならず<br> *修正に対して閉じて* いなければならない

---
background: /assets/thonk.png
backgroundSize: contain
---

---

# *拡張に対して開いている*
##  他の関連機能を実装するベースとして<br>使えなければならない

---

# *修正に対して閉じている*
## 既存の振る舞いを変更することは出来ない、する必要がない

---
background: /assets/thonk.png
backgroundSize: contain
---

---

何か新しいことをやりたいときに、
既存のクラスを *修正せずに* そのまま、
*簡単に利用出来る* つくりになっていると素敵だね

---

# *リスコフの置換原則* <br> /Liskov substitution principle/

---

# サブクラスをその基底クラスと<br>置き換えることが出来なければならない

クラス =S= がクラス =T= のサブクラスである場合に、
プログラム中で使われる =T= のインスタンスは、
何ら修正を加えることなく =S= のインスタンスに置き換えることが出来なければならない

---

# 長方形と正方形

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

サブクラスであることが制限にしか感じなくなったら怪しい

結局クラスごとの場合分け書いてたら怪しい

それは本当に is-a 関係なのか考えよう

---

# *インターフェース分離の原則* <br> /Interface segregation principle/

---

# クライアントが使用しないインターフェイスに<br>クライアントを強制的に依存させてはならない

---
background: /assets/thonk.png
backgroundSize: contain
---

---

# `=java.util.ArrayList=`

<div class="grid grid-cols-2 gap-4">
<div>

```plantuml
@startuml
scale 2
hide empty member

interface Iterable
interface Collection
interface List
abstract AbstractCollection
abstract AbstractList
class ArrayList

Iterable <|-- Collection
Collection <|-- List
List <|.. AbstractList
Collection <|.. AbstractCollection
AbstractCollection <|-- AbstractList
AbstractList <|-- ArrayList
@enduml
```

</div>
<div>

![java_collection.png](/assets/java_collection.png)

</div>
</div>

---

# `=kotlin.collections.ArrayList=`

<div class="grid grid-cols-2 gap-4">
<div>

```plantuml
@startuml
scale 2
hide empty member

class ArrayList
interface List
interface MutableList
interface MutableCollection
interface Iterable
interface MutableIterable
interface Collection
abstract AbstractCollection
abstract AbstractMutableCollection

Iterable <|-- MutableIterable
Iterable <|-- Collection
MutableIterable <|-- MutableCollection
Collection <|.. AbstractCollection
Collection <|-- MutableCollection
Collection <|-- List
AbstractCollection <|-- AbstractMutableCollection
MutableCollection <|.. AbstractMutableCollection
AbstractMutableCollection <|- ArrayList
MutableCollection <|-- MutableList
List <|-- MutableList
MutableList <|.. ArrayList
@enduml
```

</div>
<div>

![kotlin_collection.png](/assets/kotlin_collection.png)

</div>
</div>

---

<div class="grid grid-cols-2 gap-4">

![java_collection.png](/assets/java_collection.png)
![kotlin_collection.png](/assets/kotlin_collection.png)

</div>

---

# *依存関係逆転の原則* <br> /Dependency inversion principle/

---

# 上位モジュールを下位モジュールに依存させるのではなく<br>両方のモジュールを *抽象化に依存させる* べきである

---

# 実装ではなく *抽象に依存せよ*

---
background: /assets/thonk.png
backgroundSize: contain
---

---

# 制御の流れ

<div class="grid grid-cols-2 gap-4">
<div>

```plantuml
@startuml
scale 2
hide members
hide circles

class Controller
class BusinessLogic
class Database
class Presenter

Controller -> BusinessLogic
BusinessLogic --> Database
BusinessLogic -> Presenter
@enduml
```

</div>
<div>

![traditional_layer.png](/assets/traditional_layer.png)

</div>
</div>

---

# 依存関係を逆転

<div class="grid grid-cols-2 gap-4">
<div>

```plantuml
@startuml
scale 1.5
hide members
hide class circles

class Controller
class BusinessLogic
class Database
class Presenter

interface InputBoundary
interface OutputBoundary
interface DataAccessInterface

Controller -> InputBoundary
InputBoundary <|.. BusinessLogic
BusinessLogic -> OutputBoundary
OutputBoundary <|.. Presenter
BusinessLogic --> DataAccessInterface
DataAccessInterface <|.. Database
@enduml
```

</div>
<div>

![dip_layer.png](/assets/dip_layer.png)

</div>
</div>

---

# *ポリモーフィズム*

- 同一のインタフェースを *複数の型に対して* 定義出来ること
- 異なるクラスが *同一のメッセージに対して* 応答出来ること

---
layout: quote
---

> 実行時まで処理するドアの種類を知らないOpen()やClose()のような操作をサポートする言語の機能を「ポリモーフィズム」という。
>
> *--- CODE COMPLETE 5.3.4 設計が単純になる場合の継承*

---

- 日本語では *多態性* とか *多相* とも
- いくつか種類がある
    - サブタイピング(単にポリモーフィズムという場合だいたいこれ)
    - パラメータ(総称型とか)
    - アドホック(オーバーロードとか)

---
layout: quote
---

> ■広範な型チェックよりもポリモーフィズムを選ぶ
>
> case文の数が増えてきたら、継承を使って設計した方がよいという兆候かもしれない。
>
> *--- CODE COMPLETE 6.3.2 継承(「is a」の関係)*

---

# 継承による具体例

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

![polymorphism.png](/assets/polymorphism.png)

---

# 何が嬉しいのか

---

# マジックナンバー<br> *7 ± 2* <br>(4 ± 1, 5 ± 3 という説も)

---

- 人間が一度に考えられるモノゴトの限界
- *ある特定のケースにだけ関心があるときに、ずらずらと列挙された case 文を読むのは苦行*
    - 読み違いも起こりやすい

---

# [求めるな、命じよ](http://martinfowler.com/bliki/TellDontAsk.html)<br> /Tell-Don't-Ask/

- どう振る舞うべきかはその *オブジェクト自身* が知っている
- データと振る舞いを密接に関連付ける OOP の原則
- これが *ポリモーフィズムを使って実現出来る* 場合もある

---

# ただし

---

# *継承よりも合成を* <br> /Composition over inheritance/

- 継承は強力だが使いこなすのは難しい
  - そもそも真に継承関係にあるような事象は稀
- *リスコフの置換原則が守られないなら使ってはいけない*
- 合成ですんなり表現出来るならそれでいい

---

# そして *DIP* 再び

- 依存関係を逆転出来るのは *ポリモーフィズムのおかげ*
- 依存関係を逆転出来るということは *関心事のスコープを限定出来る* ということ
- ここに *オブジェクト指向の真価がある* と言っても過言ではない

---

# まとめ

---

# オブジェクト指向でなぜつくるのか

---

# *複雑な問題* を <br> *人間が解決できるようにする* ため

---

# よいクラスとは

---

# *SOLID*

---

# ポリモーフィズムのうまみ

---

- *継承は問題を適切に表現出来る場合に* 威力を発揮する
  - 濫用すると *人間の能力を越えた複雑度になりかねない*
- インターフェースを介した *依存関係逆転こそがオブジェクト指向の真価*
- 問題の大きさを *人間が扱えるサイズに収める* ために使う

---

# 参考書籍

- [日経BP SHOP｜Code Complete 第2版 上 － 完全なプログラミングを目指して](https://shop.nikkeibp.co.jp/front/commodity/0000/589000/)
- [日経BP SHOP｜Code Complete 第2版 下 － 完全なプログラミングを目指して](https://shop.nikkeibp.co.jp/front/commodity/0000/589100/)
- [オブジェクト指向でなぜつくるのか第2版 知っておきたいOOP、設計、関数型言語の基礎知識](https://shop.nikkeibp.co.jp/front/commodity/0000/P84650/)
- [Martin, Clean Architecture: A Craftsman's Guide to Software Structure and Design | Pearson](https://www.pearson.com/us/higher-education/program/Martin-Clean-Architecture-A-Craftsman-s-Guide-to-Software-Structure-and-Design/PGM333762.html)

---

# Credits

- [Alex Ceban](https://pixabay.com/ja/users/alexceban-2463891/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4245645) による [Pixabay](https://pixabay.com/ja/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4245645) からの画像
- [インターネットの神様のイラスト | かわいいフリー素材集 いらすとや](https://www.irasutoya.com/2016/07/blog-post_864.html)
- [Open-source tool that uses simple textual descriptions to draw beautiful UML diagrams.](https://plantuml.com/ja/)
