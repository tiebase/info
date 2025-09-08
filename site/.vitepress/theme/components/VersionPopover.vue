<template>
  <details class="version-popover">
    <summary class="trigger">{{ label }}</summary>
    <ul class="menu">
      <li v-for="link in links" :key="link.url">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
  </details>
</template>

<script setup lang="ts">
interface LinkItem {
  name: string
  url: string
}

const props = defineProps<{
  label: string
  links: LinkItem[]
}>()
</script>

<style scoped>
.version-popover {
  position: relative;
  display: inline-block;
}

.trigger {
  cursor: pointer;
  list-style: none;
}

.trigger::-webkit-details-marker {
  display: none;
}

.menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0.5rem;
  list-style: none;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: none;
  z-index: 10;
}

.version-popover[open] .menu {
  display: block;
}

.menu li {
  margin: 0;
}

.menu a {
  display: block;
  padding: 0.25rem 0.5rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.menu a:hover {
  text-decoration: underline;
}
</style>

