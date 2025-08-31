# MCP（Model Context Protocol）設定ガイド

TieBaseアプリケーションはSTDIOベースのMCPサーバーを内蔵しており、Claude DesktopなどのAIサービスから付箋データにアクセスできます。

## MCPサーバーについて

TieBaseのMCPサーバーは以下の特徴があります：

- **STDIO通信**: 標準入出力を使用した軽量な通信方式
- **日本語対応**: 形態素解析（Kagome）による高度な日本語検索
- **タグ機能**: タグベースでの付箋フィルタリング
- **セキュリティ**: SQLインジェクション対策とクエリサニタイズ

## 利用可能なツール

### 1. search
付箋の検索を行います。以下の検索パターンに対応：

- **キーワード検索**: `{"query": "会議"}` - 付箋の内容をキーワードで検索
- **タグ検索**: `{"tag": "仕事"}` - 特定のタグが付いた付箋を取得
- **複合検索**: `{"query": "会議", "tag": "仕事"}` - タグ内でのキーワード検索

### 2. list_tags
利用可能なタグの一覧を取得します。

### 3. get_tag_content
特定のタグが付いた付箋の内容を全て取得します。

## Claude Desktop での設定

### 1. 設定ファイルの場所

Claude Desktopの設定ファイル（`claude_desktop_config.json`）は以下の場所にあります：

**macOS:**
```
~/Library/Application Support/Claude/claude_desktop_config.json
```
<!-- 
**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
``` -->

### 2. 設定内容

設定ファイルに以下の内容を追加してください：

```json
{
  "mcpServers": {
    "tie": {
      "command": "/Applications/TieBase.app/Contents/Resources/mcp"
    }
  }
}
```

### 3. パスの確認

TieBaseアプリケーションを起動後、システムトレイのTieBaseアイコンからMCPサーバーのパスを取得できます：

1. システムトレイの **TieBase** アイコンを右クリック
2. **「/Applications/TieBase.app/Contents/Resources/mcp」** を選択
3. MCPサーバーのパスがクリップボードにコピーされます

![MCPパスの取得](/tray_mcp_path.png)


## 使用例

### 基本的な検索

Claude Desktopで以下のようにリクエストできます：

```
「TieBaseでプロジェクトに関する情報を検索して」
→ search ツールで {"query": "プロジェクト"} を実行
→ "プロジェクト"を含む付箋を返す
```

### タグベースの検索

```
「TieBaseで"重要"タグの付箋を全て表示して」
→ get_tag_content ツールで {"tag": "重要"} を実行
→ "重要"タグが付いた全ての付箋を返す
```

### タグ一覧の確認

```
「TieBaseではどんなタグがありますか？」
→ list_tags ツールを実行
→ 利用可能なタグ一覧を使用回数と共に返す
```

### 複合検索

```
「TieBaseで"仕事"タグの中で"会議"に関する付箋を探して」
→ search ツールで {"query": "会議", "tag": "仕事"} を実行
→ "仕事"タグ内で"会議"を含む付箋を返す
```
<!-- 
## トラブルシューティング

### MCPサーバーが認識されない

1. **パスの確認**: MCPバイナリのパスが正しいか確認
   ```bash
   ls -la /Applications/TieBase.app/Contents/Resources/mcp
   ```

2. **実行権限の確認**: MCPバイナリに実行権限があるか確認
   ```bash
   chmod +x /Applications/TieBase.app/Contents/Resources/mcp
   ```

3. **設定ファイルの確認**: `path_info.json`が存在するか確認
   ```bash
   cat ~/Library/Application\ Support/com.haribote-lab.tie/path_info.json
   ```

### 検索結果が返らない

1. **データベース接続**: TieBaseアプリケーションが起動しているか確認
2. **データ存在確認**: 付箋データが実際に保存されているか確認
3. **検索クエリ**: 検索キーワードが正しく入力されているか確認

### Claude Desktopでツールが表示されない

1. **設定ファイル**: JSON形式が正しいか確認
2. **Claude再起動**: Claude Desktopを再起動
3. **ログ確認**: Claude Desktopのログでエラーメッセージを確認 -->

## セキュリティ

### データプライバシー

- **ローカル処理**: 全てのデータはローカルで処理
- **外部送信なし**: 付箋データが外部に送信されることはありません
- **STDIO通信**: ローカルプロセス間通信のみ使用

## よくある質問

### Q: MCPサーバーは常に起動している必要がありますか？
A: いいえ、Claude DesktopがMCPツールを使用する際に自動的に起動されます。

<!-- ### Q: 複数のAIサービスから同時にアクセスできますか？
A: 現在の実装では、一度に一つのクライアントからのアクセスのみサポートしています。 -->

### Q: 検索結果の並び順はどうなっていますか？
A: 付箋の作成日時の降順（新しいものから）で並んでいます。

<!-- ### Q: タグの色情報も取得できますか？
A: はい、`list_tags`ツールでタグの色情報も取得できます。 -->

<!-- ## サポート

MCPに関する問題やご質問は、以下までお気軽にお問い合わせください：

- [GitHub Issues](https://github.com/sZma5a/kacidasi/issues)
- [ドキュメント](/docs/)
- [リリースノート](/release/) -->

---

MCPを活用して、TieBaseをより強力な知識管理ツールとしてご活用ください！
