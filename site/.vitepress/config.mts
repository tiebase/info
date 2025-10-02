import { defineConfig } from 'vitepress'

const siteOrigin = 'https://tiebase.info'

type PageLink = {
  url: string
  name: string
  description: string
}

type HomepageStructuredDataConfig = {
  locale: string
  pageUrl: string
  pageName: string
  pageDescription: string
  download: PageLink
  docs: PageLink
}

const homepageStructuredData: Record<string, HomepageStructuredDataConfig> = {
  'en/index.md': {
    locale: 'en',
    pageUrl: `${siteOrigin}/`,
    pageName: 'TieBase',
    pageDescription: 'Sticky Notes application that captures ideas and shapes them with AI through MCP integration.',
    download: {
      url: `${siteOrigin}/download`,
      name: 'Download',
      description: 'Download the latest TieBase installers for your operating system.'
    },
    docs: {
      url: `${siteOrigin}/docs/`,
      name: 'Documentation',
      description: 'Get started with TieBase and learn how to configure MCP integrations.'
    }
  },
  'ja/index.md': {
    locale: 'ja',
    pageUrl: `${siteOrigin}/ja/`,
    pageName: 'TieBase',
    pageDescription: '思いつきを書き留め、AIで形にするMCP連携可能な付箋アプリ。',
    download: {
      url: `${siteOrigin}/ja/download`,
      name: 'ダウンロード',
      description: 'TieBaseの最新インストーラーをダウンロードできます。'
    },
    docs: {
      url: `${siteOrigin}/ja/docs/`,
      name: 'ドキュメント',
      description: 'TieBaseの使い方とMCP連携の設定方法を確認できます。'
    }
  }
}

const defaultHomepageKey = 'en/index.md'

const jsonIndentation = 2

function getHomepageStructuredData(relativePath: string) {
  const entry = homepageStructuredData[relativePath] ??
    (relativePath === 'index.md' ? homepageStructuredData[defaultHomepageKey] : undefined)

  if (!entry) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        url: `${siteOrigin}/`,
        name: 'TieBase',
        description: 'Sticky Notes Application With MCP',
        inLanguage: entry.locale,
        publisher: {
          '@type': 'Organization',
          name: 'TieBase',
          url: `${siteOrigin}/`
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${entry.pageUrl}#webpage`,
        url: entry.pageUrl,
        name: entry.pageName,
        description: entry.pageDescription,
        inLanguage: entry.locale,
        isPartOf: {
          '@id': `${siteOrigin}/#website`
        },
        primaryImageOfPage: `${siteOrigin}/window.png`,
        hasPart: [
          {
            '@type': 'WebPage',
            '@id': `${entry.download.url}#webpage`,
            url: entry.download.url,
            name: entry.download.name,
            description: entry.download.description,
            inLanguage: entry.locale
          },
          {
            '@type': 'WebPage',
            '@id': `${entry.docs.url}#webpage`,
            url: entry.docs.url,
            name: entry.docs.name,
            description: entry.docs.description,
            inLanguage: entry.locale
          }
        ]
      }
    ]
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "data",
  title: "TieBase",
  rewrites: {
    'en/:rest*': ':rest*'
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
      label: 'English',
      lang: 'en',
      themeConfig: {
        search: {
          provider: 'local'
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Download', link: '/download' },
          {
            text: 'Release',
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
              text: 'Documentation',
              items: [
                { text: 'Getting Started', link: '/docs/' },
                { text: 'MCP Setup Guide', link: '/docs/mcp-setup' }
              ]
            }
          ],
          '/release/': [
            {
              text: 'Release',
              items: [
                { text: 'Release Notes', link: '/release/' },
                { text: 'v0.0.1', link: '/release/v0.0.1' }
              ]
            }
          ]
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
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
                { text: 'はじめに', link: '/ja/docs/' },
                { text: 'MCP設定ガイド', link: '/ja/docs/mcp-setup' }
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
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JHDNS8EHQM' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JHDNS8EHQM');`
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  sitemap: {
    hostname: siteOrigin,
  },
  transformPageData(pageData) {
    const canonicalUrl = `${siteOrigin}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])

    const structuredData = getHomepageStructuredData(pageData.relativePath)
    if (structuredData) {
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(structuredData, null, jsonIndentation)
      ])
    }
  }
})
