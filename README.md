# LISZT — 名曲を聴く

フランツ・リストのピアノ曲を選び、YouTubeで演奏を探せる日本語Webアプリです。

## 公開サイト

このリポジトリには、`main` ブランチへ変更が入るたびにGitHub Pagesへ自動公開するワークフローが含まれています。
公開後のURLは、GitHubリポジトリの **Actions → Deploy to GitHub Pages** を開くと、デプロイ結果のリンクとして表示されます。

通常の公開URLは次の形式です。

```text
https://<GitHubユーザー名>.github.io/<リポジトリ名>/
```

GitHub Pagesを初めて利用する場合は、リポジトリの **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選択してください。

## ブラウザでプレビューする

リポジトリのルートで次のコマンドを実行します。追加パッケージのインストールは不要です。

```bash
npm start
```

サーバーが起動したら、ブラウザで **[http://localhost:4173](http://localhost:4173)** を開いてください。
スマートフォンから同じネットワーク上の開発マシンへ接続する場合は、`localhost` を開発マシンのIPアドレスに置き換えます。

終了するときは、サーバーを実行しているターミナルで <kbd>Ctrl</kbd> + <kbd>C</kbd> を押します。

## ファイル構成

- `index.html` — ページの構造とコンテンツ
- `styles.css` — デスクトップ／スマートフォン対応のデザイン
- `script.js` — 曲目の描画とYouTube検索
