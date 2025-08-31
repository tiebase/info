import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "data",
  title: "TieBase",
  rewrites: {
    'ja/:rest*': ':rest*'
  },
  cleanUrls: true,
  metaChunk: true,
  description: "Sticky Notes Application With MCP",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-outline.svg',
    
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>'
        },
        link: '/download',
      },
    ]
  },
  locales: {
    root: {
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
                { text: 'はじめに', link: '/docs/' },
                { text: 'MCP設定ガイド', link: '/docs/mcp-setup' }
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
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        search: {
          provider: 'local'
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/docs/' },
          { text: 'Download', link: '/en/download' },
          {
            text: 'Release',
            items: [
              {
                text: 'v0.0.1',
                link: '/en/release/v0.0.1'
              },
            ]
          },
        ],
        sidebar: {
          '/en/docs/': [
            {
              text: 'Documentation',
              items: [
                { text: 'Getting Started', link: '/en/docs/' },
                { text: 'MCP Setup Guide', link: '/en/docs/mcp-setup' }
              ]
            }
          ],
          '/en/release/': [
            {
              text: 'Release',
              items: [
                { text: 'Release Notes', link: '/en/release/' },
                { text: 'v0.0.1', link: '/en/release/v0.0.1' }
              ]
            }
          ]
        }
      }
    }
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-T6CNWGMT9S' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T6CNWGMT9S');`
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  sitemap: {
    hostname: 'https://tiebase.haribote-lab.net',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
})
