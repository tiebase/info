<template>
  <div v-if="showSections" class="home-sections">
    <div v-if="sections && sections.length > 0" class="section-group">
      <h2 class="section-heading">{{ sectionTitle || '特徴' }}</h2>
      <div class="sections-container">
        <CustomSection
          v-for="(section, index) in sections"
          :key="`section-${index}`"
          :title="section.title"
          :description="section.description"
          :image="section.image"
          :imageAlt="section.imageAlt"
          :direction="section.direction || (index % 2 === 0 ? 'left' : 'right')"
        >
          <template v-if="section.content" #description>
            <div v-html="section.content"></div>
          </template>
        </CustomSection>
      </div>
    </div>

    <div v-if="howtouse && howtouse.length > 0" class="section-group">
      <h2 class="section-heading">{{ howToUseTitle || '使い方' }}</h2>
      <div class="sections-container">
        <CustomSection
          v-for="(section, index) in howtouse"
          :key="`howtouse-${index}`"
          :title="section.title"
          :description="section.description"
          :image="section.image"
          :imageAlt="section.imageAlt"
          :direction="section.direction || (index % 2 === 0 ? 'right' : 'left')"
        >
          <template v-if="section.content" #description>
            <div v-html="section.content"></div>
          </template>
        </CustomSection>
      </div>
    </div>

    <div v-if="additionalSections && additionalSections.length > 0" class="section-group">
      <div v-for="(group, groupIndex) in additionalSections" :key="`group-${groupIndex}`">
        <h2 v-if="group.title" class="section-heading">{{ group.title }}</h2>
        <div class="sections-container">
          <CustomSection
            v-for="(section, index) in group.items"
            :key="`additional-${groupIndex}-${index}`"
            :title="section.title"
            :description="section.description"
            :image="section.image"
            :imageAlt="section.imageAlt"
            :direction="section.direction || (index % 2 === 0 ? 'left' : 'right')"
          >
            <template v-if="section.content" #description>
              <div v-html="section.content"></div>
            </template>
          </CustomSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import CustomSection from './CustomSection.vue'

const { frontmatter, lang } = useData()

const showSections = computed(() => {
  return frontmatter.value.layout === 'home' && 
    (frontmatter.value.sections || frontmatter.value.howtouse || frontmatter.value.additionalSections)
})

const sections = computed(() => frontmatter.value.sections || [])
const howtouse = computed(() => frontmatter.value.howtouse || [])
const additionalSections = computed(() => frontmatter.value.additionalSections || [])

const sectionTitle = computed(() => {
  if (lang.value === 'ja') return '特徴'
  return 'Features'
})

const howToUseTitle = computed(() => {
  if (lang.value === 'ja') return '使い方'
  return 'How to Use'
})
</script>

<style scoped>
.home-sections {
  padding: 0 24px;
  margin-top: 64px;
}

.section-group {
  margin-bottom: 80px;
}

.section-heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  background: linear-gradient(120deg, var(--vp-c-brand-1) 30%, var(--vp-c-brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sections-container {
  max-width: 1152px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .home-sections {
    padding: 0 16px;
    margin-top: 48px;
  }

  .section-group {
    margin-bottom: 60px;
  }

  .section-heading {
    font-size: 2rem;
    margin-bottom: 32px;
  }
}

@media (max-width: 480px) {
  .section-heading {
    font-size: 1.75rem;
    margin-bottom: 24px;
  }
}
</style>