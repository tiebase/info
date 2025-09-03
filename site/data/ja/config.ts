import { LocaleConfig } from 'vitepress'

const jaConfig: LocaleConfig[string] = {
  label: '日本語',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
      { text: 'ドキュメント', link: '/ja/docs/' },
      { text: 'ダウンロード', link: '/ja/download' },
      {
        text: 'リリース',
        items: [
          {
            text: 'v0.0.1',
            link: '/ja/release/v0.0.1'
          },
        ]
      },
    ],
    sidebar: {
      '/ja/docs/': [
        {
          text: 'ドキュメント',
          items: [
            { text: 'はじめに', link: '/ja/docs/' }
          ]
        }
      ],
      '/ja/release/': [
        {
          text: 'リリース',
          items: [
            { text: 'リリース一覧', link: '/ja/release/' },
            { text: 'v0.0.1', link: '/ja/release/v0.0.1' }
          ]
        }
      ]
    }
  }
}

export { jaConfig }
export default jaConfig
