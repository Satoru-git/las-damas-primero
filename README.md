# 💐las-damas-primero💐
DEMO: https://gfp.onrender.com/  
<img width="400" alt="スクリーンショット 2023-12-01 18 19 40" src="https://github.com/ryozo7/las-damas-primero/assets/113978510/78196371-3282-4634-a1fc-9976f50d5d87">　<img width="400" alt="image" src="https://github.com/ryozo7/las-damas-primero/assets/113978510/ca191109-fcae-47e3-b620-51dc3ec88d1e">
# < Index > 

# < About >
パートナーと宿泊するホテルを悩んでいる、選択に時間がかかっている事に困っているそこのあなた...  
私たちは、あなたとパートナーに、**「常に新しい」** **「最高のサービス」** を提供してくれるであろうホテルを提案します。    
評価の高いホテルから降順に外観、Map情報、詳細アクセス、施設の食事に関する動画をカードにまとめています。  
一度泊まった施設はマーキングと表示位置の変更により、常に泊まったことの無い施設がtopに表示されます。    
私たちのサービスを使用する事で、あなたをとパートナーは、毎回新鮮で素晴らしい体験が出来るでしょう  
<br>
あなたは上から順に選ぶだけです。  
もうホテルを選ぶのはやめて、パートナーの喜ぶ顔を思い浮かべながら素敵なプレゼントを考えましょう🎁
# < Development > 
Follow this guide to set up your environment etc.
### < Database >  
This project assumes a Postgres database, naturally, this is not included in the package.json file, so must be installed separately.

Create a database called `las_damas_primero`.

### < Rakuten Developers>
このプロダクトを試用するのは楽天デベロッパーズのアプリIDが必要だよ

アプリID作成用URL　：　https://webservice.rakuten.co.jp/app/create
### <.env config>
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
### < 使用言語、環境、テクノロジー >

### < デプロイ方法 >
レンダーの場合を説明するよ
#### < 1.Renderでデータベースを作成しよう >
```
  1.ヘッダーに表示されている「New +」のボタンをクリック  
  2.「PostgreSQL」を選択  
  3.作成するデータベースの名称を記入します。 
  4.入力できたら「Create Database」をクリック  
  5.データベースの作成が始まり、「Status」に「Creating」と表示されます  
  6.Statusが「Available」に変わったらデータベースの作成は完了  
  7.画面を下にスクロールすると「Internal Database URL」という欄があります。
  後ほど、ここに記載されているURLが必要になるので、下図のようにアイコンをクリックしてクリップボードにコピーしましょう。
```
#### < 2.Renderでアプリを新規作成 >
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
  12.アプリのデプロイや起動時のコマンドを入力します。
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
    デプロイが完了すると、緑色のアイコンで「Live」(画面上部)と表示されたらデプロイ完了！
    画面上部のURLからアプリに接続し、正常に動かすことができるか確認しよう！
```
### < 今後の計画 >
- 絞り込み地域の細分化  
- レビュー点数しか見ていないので、レビュー数と相関した、より信頼性の高い評価ソート
  FBお待ちしてます。


バッジ  
システム構成図  
使い方  
こだわりポイント  
ライセンス情報  
