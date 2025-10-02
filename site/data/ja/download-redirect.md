---
title: ダウンロードに移動
---

# ダウンロードに移動しています

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const status = ref<'pending' | 'redirecting' | 'error'>('pending')
const redirectUrl = ref<string>('')
const errorMessage = ref<string>('')

onMounted(() => {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const targetParam = params.get('target')

  if (!targetParam) {
    status.value = 'error'
    errorMessage.value = 'リダイレクト先が指定されていません。'
    return
  }

  try {
    const url = new URL(targetParam, window.location.origin)
    if (!['https:', 'http:'].includes(url.protocol)) {
      throw new Error('unsupported-protocol')
    }
    redirectUrl.value = url.toString()
    status.value = 'redirecting'
    window.location.replace(redirectUrl.value)
  } catch (error) {
    status.value = 'error'
    errorMessage.value = '無効なURLが指定されました。'
  }
})
</script>

<div v-if="status === 'redirecting'">
  <p>まもなくダウンロード先に移動します。自動的に移動しない場合は <a :href="redirectUrl">こちら</a> をクリックしてください。</p>
</div>
<div v-else-if="status === 'error'">
  <p>{{ errorMessage }}</p>
</div>
<div v-else>
  <p>処理中です…</p>
</div>
