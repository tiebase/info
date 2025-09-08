// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import CustomSection from './components/CustomSection.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import ExtensionUsecase from './components/ExtensionUsecase.vue'
import VersionPopover from './components/VersionPopover.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('DownloadLinks', DownloadLinks)
    app.component('ExtensionUsecase', ExtensionUsecase)
    app.component('CustomSection', CustomSection)
    app.component('VersionPopover', VersionPopover)
  }
} satisfies Theme
