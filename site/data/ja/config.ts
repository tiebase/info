import { LocaleConfig } from 'vitepress'

const jaConfig: LocaleConfig[string] = {
  label: '日本語',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ドキュメント', link: '/docs/' },
      { text: 'ダウンロード', link: '/download' },
      {
        text: 'リリース',
        items: [
          {
            text: 'v0.0.1',
            link: '/release/v0.0.1'
          },
        ]
      },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'ドキュメント',
          items: [
            { text: 'はじめに', link: '/docs/' }
          ]
        }
      ],
      '/release/': [
        {
          text: 'リリース',
          items: [
            { text: 'リリース一覧', link: '/release/' },
            { text: 'v0.0.1', link: '/release/v0.0.1' }
          ]
        }
      ]
    }
  }
}

export { jaConfig }
export default jaConfig
