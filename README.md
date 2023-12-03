# 💐las-damas-primero💐

![Static Badge](https://img.shields.io/badge/build-passing-green?style=flat-square)  
![Static Badge](https://img.shields.io/badge/SuperPO-nao-lemonchiffon?style=flat-square)
![Static Badge](https://img.shields.io/badge/%E3%80%80TL-ryozo-green?style=flat-square&link=https%3A%2F%2Fgithub.com%2Fryozo7)
![Static Badge](https://img.shields.io/badge/%E3%80%80AmazingDev-oga-teal?style=flat-square)
![Static Badge](https://img.shields.io/badge/%E3%80%80AmazingDev-syun-deepskyblue?style=flat-square)





# How to use 
DEMO: https://gfp.onrender.com/  
1.DEMO:のURLをクリック  
2.ログイン画面でユーザー名、パスワードを入力  
  ユーザー名:  
  passwword:  
3.宿泊日、人数、宿泊日数を選択し、宿泊地域を選択し「検索」をクリック  
4.ホテル外観、マップ情報などを確認し、「予約」を押下  
<img width="400" alt="スクリーンショット 2023-12-01 18 19 40" src="https://github.com/ryozo7/las-damas-primero/assets/119465420/3cc990cc-c6f0-4a6e-8ba6-9bcf8c184dcd">　<img width="400" alt="image" src="https://github.com/ryozo7/las-damas-primero/assets/119465420/452ab441-7e32-4e05-87ec-bcf23a479ae2">
# Index

- [About](#about)
- [Development](#development)
- [Languages Environments and Technologies](#languages-environments-and-technologies)
- [How to Deploy](#how-to-Deploy)
- [Future plans](#future-plans)


# About
パートナーと宿泊するホテルを悩んでいる、選択に時間がかかっている事に困っているそこのあなた...  
私たちは、あなたとパートナーに、**「常に新しい」** **「最高のサービス」** を提供してくれるであろうホテルを提案します。    
評価の高いホテルから降順に外観、Map情報、詳細アクセス、施設の食事に関する動画をカードにまとめています。  
一度泊まった施設はマーキングと表示位置の変更により、常に泊まったことの無い施設がtopに表示されます。    
私たちのサービスを使用する事で、あなたをとパートナーは、毎回新鮮で素晴らしい体験が出来るでしょう  
<br>
あなたは上から順に選ぶだけです。  
もうホテルを選ぶのはやめて、パートナーの喜ぶ顔を思い浮かべながら素敵なプレゼントを考えましょう🎁

It appears that you're struggling with choosing a hotel for your beloved partner.  
Can we help? We're suggesting hotels that promise consistently novel experiences and top-notch service.  
We've gathered details about highly-rated hotels into cards, featuring their exteriors, map specifics,  
access details, dining facilities, all presented in video format. By marking and adjusting positions,  
the hotels you haven't visited will always be listed at the top, ensuring a fresh experience each time.　　
a　By utilizing our service, both you and your partner can anticipate consistently delightful experiences.  
Your task is simply to select from the options at the top. How about forgoing the hotel selection and  
instead brainstorming delightful gift ideas while envisioning the joy on your partner's face? 🎁"

# Development
Follow this guide to set up your environment etc.
### < Database >  
This project assumes a Postgres database, naturally, this is not included in the package.json file, so must be installed separately.

Create a database called `las_damas_primero`.

### < Rakuten Developers >
このプロダクトを試用するのは楽天デベロッパーズのアプリIDが必要だよ

アプリID作成用URL　：　https://webservice.rakuten.co.jp/app/create
### <.env config >
このプロダクトは.envファイルを使用して環境変数を定義しているよ。

1.Go into the repository

`$ cd las-damas-primero/server`

2.Create .env file

`$ touch .env`
3.環境変数を記述しよう
```
DB_USER="hoge" <= Your command line username
APP_ID="fuga" <= Your command line あなたの楽天APP_ID
DB_PASSWORD="hogehoge" <= Your command line password
DB_NAME=las_damas_primero
NODE_ENV=development
```
### < Downloading and installing steps >  
1.Clone this repository

`$ git clone https://github.com/ryozo7/las-damas-primero.git`  

2.Go into the repository

`$ cd las-damas-primero/server`

3.Install dependencies

`$ npm install`

4.Create database, Run migrations and set up the database

`$ npm run migrate`

5.Run the app

`npm run dev`
# Languages Environments and Technologies

# How to Deploy
レンダーの場合を説明するよ
### < 1.Renderでデータベースを作成しよう >
```
  1.ヘッダーに表示されている「New +」のボタンをクリック  
  2.「PostgreSQL」を選択  
  3.作成するデータベースの名称を記入します
  4.入力できたら「Create Database」をクリック  
  5.データベースの作成が始まり、「Status」に「Creating」と表示されます  
  6.Statusが「Available」に変わったらデータベースの作成は完了  
  7.画面を下にスクロールし「Internal Database URL」をコピー
```
### < 2.Renderでアプリを新規作成 >
```
  1.ヘッダーにある「New +」のボタンをクリック  
  2.「Web　service」をクリック  
  3.「Build and deploy from a Git repository」をチェック
  4.「Next」をクリック
  5.GitHubの「Configure account」をクリック
  6.クローンしたリポジトリを保存しているアカウントの「Configure」をクリック
  7.passwordを入力しlogin
  8.「Only select repositories」をチェックし、「Select repositories」をクリック
  9.クローンしたリポジトリーをクリック
  10.renderの画面に遷移し、クローンしたリポジトリが表示されるので、「Connect」のボタンをクリック
  11.Name欄にアプリケーションの名称を入力
  12.アプリのデプロイや起動時のコマンドを入力します
    Branch => main
    Root Directory => ./server
    Build =>　npm run build
    Start =>　　npm start
  13.画面をスクロールすると、「Advanced」という文字が書かれているのでクリック
  14.環境変数を設定します。
      key         :   value
    APP_ID        : あなたの楽天APP_ID
    DATABASE_URL  : 1.Renderでデータベースを作成しよう_7.でコピーしたURL
    NODE_ENV      : production
    VITE_NODE_ENV : production
  15.ターミナルが表示され、デプロイ作業が開始されます
    デプロイが完了すると、緑色のアイコンで「Live」(画面上部)と表示されたらデプロイ完了
    画面上部のURLからアプリに接続し、正常に動かすことができるか確認しよう！
```
# < Future plans >
- 絞り込み地域の細分化  
- レビュー点数しか見ていないので、レビュー数と相関した、より信頼性の高い評価ソート
- 宿泊したことあるホテルリストの追加



ライセンス情報？  
