<script setup>
import { watchEffect } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ExtensionUsecase from './components/ExtensionUsecase.vue'
import HomePageSections from './components/HomePageSections.vue'

const { Layout } = DefaultTheme
const { frontmatter, lang } = useData()

if (typeof window !== 'undefined') {
  watchEffect(() => {
    if (lang.value) {
      document.documentElement.setAttribute('lang', lang.value)
    }
  })
}
</script>

<template>
  <Layout>
    <template #home-features-after>
      <ExtensionUsecase
        v-if="frontmatter.usecases"
        :title="frontmatter.usecases.title || 'ファイル形式別ユースケース'"
        :subtitle="frontmatter.usecases.subtitle || 'TieBaseは様々なファイル形式に対応し、それぞれに最適化された機能を提供します'"
        :extensions="frontmatter.usecases.items || []"
      />
      <HomePageSections />
    </template>
    <template #layout-bottom>
      <footer class="custom-footer">
        <div class="footer-content">
          <p class="copyright">© {{ new Date().getFullYear() }} Geekers</p>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>

.custom-footer {
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 2rem;
}

.footer-content {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 2rem 1.5rem;
  text-align: center;
}

.copyright {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 1.5rem 1rem;
  }
  
  .copyright {
    font-size: 0.8rem;
  }
}

/* Dark mode support */
.dark .custom-footer {
  background-color: var(--vp-c-bg-alt);
  border-top-color: var(--vp-c-divider);
}
</style>
