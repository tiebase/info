<template>
  <section :class="['custom-section', direction]">
    <div class="container">
      <div class="content-wrapper">
        <div class="text-content">
          <h2 v-if="title" class="section-title">{{ title }}</h2>
          <div class="section-description">
            <slot name="description">
              <p v-if="description">{{ description }}</p>
            </slot>
          </div>
        </div>
        <div v-if="image" class="image-content">
          <img :src="image" :alt="imageAlt || title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  direction?: 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  direction: 'left'
})
</script>

<style scoped>
.custom-section {
  padding: 64px 24px;
  margin: 48px 0;
}

.custom-section:nth-child(even) {
  background-color: var(--vp-c-bg-soft);
}

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 48px;
}

.text-content {
  flex: 1;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-content img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(120deg, var(--vp-c-brand-1) 30%, var(--vp-c-brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.section-description :deep(p) {
  margin-bottom: 16px;
}

.section-description :deep(ul),
.section-description :deep(ol) {
  margin: 16px 0;
  padding-left: 24px;
}

.section-description :deep(li) {
  margin: 8px 0;
}

/* Right direction - swap image and text */
.custom-section.right .content-wrapper {
  flex-direction: row-reverse;
}

/* Responsive design */
@media (max-width: 768px) {
  .custom-section {
    padding: 48px 20px;
    margin: 32px 0;
  }

  .content-wrapper {
    flex-direction: column !important;
    gap: 32px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .custom-section {
    padding: 32px 16px;
    margin: 24px 0;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>