# ダウンロード

TieBaseアプリケーションを以下からダウンロードできます。お使いのMacのチップに合わせて適切なバージョンをお選びください。

<script setup>
const macDownloads = [
  // {
  //   name: 'TieBase for M1 Mac',
  //   description: 'Apple Silicon（M1、M2、M3）チップ搭載のMac向けの最適化されたバージョンです。',
  //   url: 'https://static.tiebase.haribote-lab.net/release/bundle/dmg/TieBase_0.1.0_aarch64.dmg',
  //   filename: 'TieBase_0.1.0_aarch64.dmg',
  //   size: '45.2 MB',
  //   version: 'v0.1.0'
  // },
  {
    name: 'TieBase for Mac',
    description: 'Mac向けのバージョンです。',
    url: 'https://github.com/tiebase/info/releases/download/v0.0.1/TieBase_0.0.1_x64.dmg',
    filename: 'TieBase_0.1.0_x64.dmg',
    size: '48.1 MB',
    version: 'v0.1.0'
  }
]
</script>

<DownloadLinks 
  title="Mac版"
  :downloads="macDownloads"
/>

## システム要件

### Mac版
- **M1 Mac**: macOS 11.0 (Big Sur) 以降
- **Intel Mac**: macOS 10.15 (Catalina) 以降
- **メモリ**: 4GB RAM 以上推奨
- **ストレージ**: 200MB の空き容量

## インストール方法

1. 上記からお使いのMacに適したバージョンをダウンロード
2. ダウンロードした `.dmg` ファイルをダブルクリックして開く
3. `TieBase.app` を `Applications` フォルダにドラッグ&ドロップ
4. Launchpad または Applications フォルダから TieBase を起動

## 初回起動時の注意

macOSのセキュリティ機能により、初回起動時に警告が表示される場合があります。その場合は以下の手順で起動してください：

1. **システム環境設定** → **セキュリティとプライバシー** を開く
2. **一般** タブで「このまま開く」をクリック
3. または、TieBase.app を右クリックして「開く」を選択

<!-- ## サポート

ご質問やお困りのことがございましたら、以下までお気軽にお問い合わせください：

- [GitHub Issues](https://github.com/your-repo/tie/issues)
- [ドキュメント](/docs/) -->

## 更新履歴

最新の更新情報については[リリースノート](/release/)をご確認ください。
