# 日々のデータの更新からサイト公開まで

## はじめに

このドキュメントでは秋田県版新型コロナウイルス感染症対策サイトのデータ更新の仕方からサイト更新までの手順を説明します。

## 前提

Githubアカウントを持っている方向けに説明します。  

## データの更新

Github Actionによって9:00と18:00に秋田県が公表しているサイトからデータをクロールし差分をpull requestとして自動生成します。  
この差分を確認して問題なければmergeすることでdevelopmentブランチに反映されます。  

生成された pull request は [Pull requestsページ](https://github.com/code4akita/covid19-akita/pull)で確認でき、[Daily Update]から始まるタイトルが該当行になり、クリックします。  

[![Image from Gyazo](https://i.gyazo.com/b7e35f8d15b1ed84bd6b888e97e06697.png)](https://github.com/code4akita/covid19-akita/pulls)


Pull request の内容が表示され、Commitのタイトルまたはハッシュ値をクリックするとデータの差分が表示されます。

[![Image from Gyazo](https://i.gyazo.com/5fd31d00a688217a04fcff3f80403ac2.png)](https://github.com/code4akita/covid19-akita/pull/29/commits/8394b628014a59c789280b826b60286d4e2142ef)


左が変更前で右が変更後の表示になります。  
また、赤が削除された行で緑が追加になった行を現しています。  
おかしな箇所がないか一通り確認し問題がなければ前の pull request の内容表示に戻ります。

[![Image from Gyazo](https://i.gyazo.com/a2330b6afb01bb3ee67896c7ee4f7c3e.png)](https://github.com/code4akita/covid19-akita/pull/29/commits/8394b628014a59c789280b826b60286d4e2142ef)

下の方に __Merge pull request__ ボタンがあるので押します。

[![Image from Gyazo](https://i.gyazo.com/c9945328a958af8d8c191edb701529d6.png)](https://github.com/code4akita/covid19-akita/pull/29)

mergeするか確認表示になりますので、__Confirm merge__ ボタンを押します。

[![Image from Gyazo](https://i.gyazo.com/cce828e5ce1891ca505c44a85870867c.png)](https://gyazo.com/cce828e5ce1891ca505c44a85870867c)

これでデータがdevelopmentブラントに取り込まれました。

## サイト更新

サイトを更新するには development ブランチから master ブランチに merge する必要があります。  

まずは、development ブランチから master ブランチに pull request を作成します。  

[Pull requests画面](https://github.com/code4akita/covid19-akita/pulls)で __New pull request__ ボタンを押します。  

[![Image from Gyazo](https://i.gyazo.com/a35bcacb29a3ca40c662e4326a64f010.png)](https://github.com/code4akita/covid19-akita/pulls)


base repositoryプルダウンで "code4akita/covid19-akita" を選択します。上の検索窓に"akita"を入力すると探しやすくなります。  

[![Image from Gyazo](https://i.gyazo.com/713ed7b163d6f01fd2cc6ef74bc668bf.png)](https://github.com/katsuyoshi/covid19-akita/compare/development...code4akita:development)

base プルダウンで master を選択します。同様に検索窓に"master"と入力すると探しやすくなります。  

[![Image from Gyazo](https://i.gyazo.com/fa267cf2618ca8139c3799a4e86af66e.png)](hhttps://github.com/code4akita/covid19-akita/compare/development...code4akita:development)


__Create pull request__ ボタンを押してpull requestを生成します。  

[![Image from Gyazo](https://i.gyazo.com/039068f28434e0a5bfe1855dbe7683fa.png)](https://github.com/code4akita/covid19-akita/compare/master...code4akita:development)



タイトルとコメントを入力し __Create pull request__ ボタンを押します。  
ここではタイトルに"merge pull request"を入力し、コメントは空欄にしています。  

[![Image from Gyazo](https://i.gyazo.com/b27555e7d889a085ba8e1a1af4722ef2.png)](https://github.com/code4akita/covid19-akita/compare/master...code4akita:development)


新しいpull requestが生成されますので、データの更新同様に __Merge pull request__ ボタンを押し __Confirm merge__ ボタンを押します。  
少し時間を置いたのちサイトへ反映されます。
