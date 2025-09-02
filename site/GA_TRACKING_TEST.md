# Google Analytics ダウンロードトラッキング テスト手順

## 実装内容
DownloadLinks.vueコンポーネントにGoogle Analyticsのイベントトラッキングを追加しました。

### 送信されるイベントデータ
```javascript
{
  event: 'download',
  event_category: 'engagement',
  event_label: 'TieBase for Mac',  // ダウンロードアイテムの名前
  value: 'v0.1.0',                  // バージョン番号
  file_name: 'TieBase_0.1.0_x64.dmg',  // ファイル名
  file_url: 'https://github.com/...'   // ダウンロードURL
}
```

## テスト手順

### 1. 開発環境での確認

```bash
cd /Users/swallow/haribote-lab/tiebase/info/site
pnpm dev
```

### 2. ブラウザでテスト

1. http://localhost:5173/download にアクセス
2. ブラウザのデベロッパーツールを開く（F12）
3. Consoleタブを確認
4. ダウンロードボタンをクリック
5. コンソールに以下のログが表示されることを確認：
   ```
   GA Event Sent: {event: "download", name: "TieBase for Mac", version: "v0.1.0", filename: "TieBase_0.1.0_x64.dmg"}
   ```

### 3. Google Analytics Real-Time で確認

1. [Google Analytics](https://analytics.google.com/) にログイン
2. TieBaseプロパティを選択（G-T6CNWGMT9S）
3. 左メニューから「リアルタイム」を選択
4. 「イベント」タブを確認
5. ダウンロードボタンをクリックして、`download`イベントが表示されることを確認

### 4. Google Analytics Debug Mode

Google Analytics Debugger Chrome拡張機能を使用する場合：

1. [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)をインストール
2. 拡張機能をONにする
3. ページをリロード
4. コンソールで詳細なGA送信ログを確認

## 本番環境での確認

```bash
# ビルド
pnpm build

# プレビュー
pnpm preview
```

http://localhost:4173/download でも同様にテスト可能です。

## トラブルシューティング

### イベントが送信されない場合

1. **Ad Blockerの確認**: 広告ブロッカーがGAをブロックしている可能性があります
2. **gtag関数の確認**: コンソールで `window.gtag` が定義されているか確認
3. **ネットワークタブ確認**: Network タブで `collect` または `analytics` へのリクエストを確認

### デバッグ用コード

コンソールで以下を実行してgtagが利用可能か確認：
```javascript
console.log('gtag available:', typeof window.gtag === 'function')
```

## 実装ファイル

- `/Users/swallow/haribote-lab/tiebase/info/site/.vitepress/theme/components/DownloadLinks.vue`
  - `trackDownload`関数を追加
  - ダウンロードボタンに`@click`イベントハンドラーを追加

## 注意事項

- 本番環境ではデバッグ用の`console.log`を削除することを推奨
- プライバシーポリシーにダウンロード追跡について記載することを推奨