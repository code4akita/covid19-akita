# 秋田県の新型コロナウイルス感染症に関する情報データを更新するツール

[covid19-data-akita](https://github.com/code4akita/covid19-data-akita)で生成されたデータからdata.jsonを更新します。

参照データ:
https://covid19-akita.s3.amazonaws.com/current.json

## 準備

Rubyがインストールされていることを前提としています。

初回のみbundleコマンドでGemをインストールします。

```
$ cd tool/ruby
$ bundle
```

## データ更新

data.jsonを更新するには```rake```コマンドを実行します。

```
$ rake
```

## TODO

- 基データに年が含まれていないため、年を跨いだ場合に日付処理が正しく行われない。
