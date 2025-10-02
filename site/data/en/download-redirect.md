---
title: Preparing Download
---

# Redirecting to your download

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
    errorMessage.value = 'No destination URL was provided.'
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
    errorMessage.value = 'The requested URL is invalid.'
  }
})
</script>

<div v-if="status === 'redirecting'">
  <p>You will be taken to the download shortly. If the redirect does not start, <a :href="redirectUrl">click here</a>.</p>
</div>
<div v-else-if="status === 'error'">
  <p>{{ errorMessage }}</p>
</div>
<div v-else>
  <p>One moment…</p>
</div>
