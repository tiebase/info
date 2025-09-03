# はじめに

TieBaseへようこそ！TieBaseは、Model Context Protocol (MCP)統合機能を備えた、モダンな付箋アプリケーションです。

## TieBaseとは？

TieBaseは以下の機能を持つモダンな付箋アプリケーションです：

- デジタル付箋の作成
- タグによる分類
- 日本語対応の検索機能
- AIサービスとのMCP統合による連携

## インストール手順

### 1. アプリケーションのダウンロード

 [ダウンロードページ](/ja/download)から、お使いのMacに適したバージョンをダウンロードしてください：

### 2. DMGファイルの配置とインストール

1. ダウンロードした `.dmg` ファイルをダブルクリックして開く
2. `TieBase.app` を `Applications` フォルダにドラッグ&ドロップ
3. Launchpad または Applications フォルダから TieBase を起動

### 3. 初回起動

macOSのセキュリティ機能により、初回起動時に警告が表示される場合があります：

1. **システム環境設定** → **セキュリティとプライバシー** を開く
2. **一般** タブで「このまま開く」をクリック
3. または、TieBase.app を右クリックして「開く」を選択

## MCP設定（Claude Desktopとの連携）

### 1. MCPパスの取得

TieBaseアプリケーションを起動後、システムトレイのTieBaseアイコンから必要な情報を取得できます：

1. システムトレイの **TieBase** アイコンを右クリック
2. **「/Applications/TieBase.app/Contents/Resources/mcp」** を選択
3. MCPサーバーのパスがクリップボードにコピーされます

![MCPパスの取得](/tray_mcp_path.png)


### 2. Claude Desktop設定

1. Claude Desktopの設定ファイルを開く：
   ```
   ~/Library/Application Support/Claude/claude_desktop_config.json
   ```

2. 以下の設定を追加（パスは実際のものに置き換えてください）：
   ```json
   {
     "mcpServers": {
       "tie": {
         "command": "/Applications/TieBase.app/Contents/Resources/mcp"
       }
     }
   }
   ```

3. Claude Desktopを再起動

### 3. MCP機能の確認

Claude Desktopで以下のように試してみてください：

- 「TieBase経由で課題を検索して」
- 「TieBaseではどんなタグがありますか？」
- 「TieBaseのアイデアのタグがついているものを表示して」

## 基本的な使い方

### 付箋の作成
1. アプリケーション画面をクリック
2. テキストを入力

### タグの追加
1. 付箋を選択
2. 「Enter tag...」にタグ名を入力
3. Enterキーで追加

### 検索機能
- 画面右下の虫眼鏡のアイコンをクリック
- KeywordとTagでのフィルタリングを行う
- 検索結果をクリックすると該当の付箋が選択される

## 次のステップ

- [MCP設定ガイド](./mcp-setup) - 詳細なMCP設定方法
- [ダウンロード](/ja/download) - 最新版の入手
- [リリースノート](/ja/release/) - 更新情報の確認
<!-- 
## サポート

ご質問やお困りのことがございましたら：

- [GitHub Issues](https://github.com/sZma5a/kacidasi/issues)
- [MCP設定ガイド](./mcp-setup) -->

---

TieBaseで効率的な知恵の管理を始めましょう！
