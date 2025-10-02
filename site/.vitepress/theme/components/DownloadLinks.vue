<template>
  <div class="download-container">
    <div class="download-section">
      <h2 class="download-title">{{ title }}</h2>
      <div class="download-grid">
        <div 
          v-for="(item, index) in downloads" 
          :key="index"
          class="download-card"
        >
          <div class="download-card-header">
            <div class="download-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h3 class="download-card-title">{{ item.name }}</h3>
          </div>
          <p class="download-card-description">{{ item.description }}</p>
          <div class="download-card-actions">
            <a
              :href="buildRedirectUrl(item.url)"
              class="download-button"
              target="_blank"
              rel="noopener"
              @click="trackDownload(item)"
            >
              <span>{{ downloadButtonText }}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.5 1.5A.5.5 0 0 0 8 1a.5.5 0 0 0-.5.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
                <path d="M3 15a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a.5.5 0 0 0-1 0v6H4V9a.5.5 0 0 0-1 0v6z"/>
              </svg>
            </a>
            <div class="download-info">
              <span class="download-size">{{ item.size }}</span>
              <span class="download-version">{{ item.version }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

export interface DownloadItem {
  name: string
  description: string
  url: string
  filename: string
  size: string
  version: string
}

export interface Props {
  title: string
  downloads: DownloadItem[]
}

defineProps<Props>()

const { lang } = useData()

const downloadButtonText = computed(() => {
  return lang.value === 'ja' ? 'ダウンロード' : 'Download'
})

const redirectPath = computed(() => {
  const currentLang = lang.value?.split('-')[0]
  if (!currentLang || currentLang === 'en') {
    return '/download-redirect'
  }
  return `/${currentLang}/download-redirect`
})

const buildRedirectUrl = (targetUrl: string) => {
  if (!targetUrl) {
    return redirectPath.value
  }
  return `${redirectPath.value}?target=${encodeURIComponent(targetUrl)}`
}

const resolveFilename = (item: DownloadItem) => {
  if (item.filename) {
    return item.filename
  }

  try {
    const parsed = new URL(item.url)
    const path = decodeURIComponent(parsed.pathname)
    const segments = path.split('/')
    return segments.pop() || ''
  } catch (error) {
    console.warn('[DownloadLinks] Failed to parse download URL', error)
    return ''
  }
}

const resolveExtension = (filename: string, fallbackUrl: string) => {
  const target = filename || fallbackUrl
  const match = target.match(/\.([a-zA-Z0-9]+)(?:\?|$)/)
  return match ? match[1].toLowerCase() : ''
}

// Google Analytics イベントトラッキング（GA4推奨パラメータ）
const trackDownload = (item: DownloadItem) => {
  if (typeof window === 'undefined') return

  const fileName = resolveFilename(item)
  const fileExtension = resolveExtension(fileName, item.url)

  const payload: Record<string, string> = {
    link_text: item.name,
    link_url: item.url
  }

  if (fileName) {
    payload.file_name = fileName
  }

  if (fileExtension) {
    payload.file_extension = fileExtension
  }

  if (item.version) {
    payload.app_version = item.version
  }

  const w = window as any

  if (typeof w.gtag === 'function') {
    w.gtag('event', 'file_download', payload)
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: 'file_download', ...payload })
  }
}
</script>

<style scoped>
.download-container {
  margin: 2rem 0;
}

.download-section {
  margin-bottom: 3rem;
}

.download-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-brand-1);
  padding-bottom: 0.5rem;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.download-card {
  max-width: 380px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
}

.download-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.download-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.download-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.download-card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}

.download-card-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.download-card-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--vp-c-brand-3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 800;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.download-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.download-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.download-size {
  font-weight: 500;
}

.download-version {
  background: var(--vp-c-bg-elv);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
}

@media (max-width: 768px) {
  .download-grid {
    grid-template-columns: 1fr;
  }
  
  .download-card {
    padding: 1rem;
  }
  
  .download-card-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .download-icon {
    margin-right: 0;
  }
}
</style>
