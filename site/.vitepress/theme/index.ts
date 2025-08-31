// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import ExtensionUsecase from './components/ExtensionUsecase.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('DownloadLinks', DownloadLinks)
    app.component('ExtensionUsecase', ExtensionUsecase)
  }
} satisfies Theme
