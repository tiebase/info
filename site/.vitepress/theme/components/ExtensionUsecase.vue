<template>
  <div class="extension-showcase">
    <!-- <h2 class="showcase-title">{{ title }}</h2>
    <p class="showcase-subtitle">{{ subtitle }}</p>
    <div class="extensions-grid">
      <div 
        v-for="(extension, index) in extensions" 
        :key="index"
        class="extension-card"
        :class="{ 'featured': extension.featured }"
      >
        <div class="extension-header">
          <div class="extension-icon" v-html="extension.icon"></div>
          <div class="extension-info">
            <h3 class="extension-name">{{ extension.name }}</h3>
            <span class="extension-type">{{ extension.type }}</span>
          </div>
          <div class="extension-badge" v-if="extension.featured">
            <span>人気</span>
          </div>
        </div>
        <p class="extension-description">{{ extension.description }}</p>
        <div class="extension-usecases">
          <h4>主なユースケース</h4>
          <ul class="usecase-list">
            <li v-for="usecase in extension.usecases" :key="usecase" class="usecase-item">
              {{ usecase }}
            </li>
          </ul>
        </div>
        <div class="extension-examples" v-if="extension.examples">
          <h4>例</h4>
          <div class="examples-list">
            <span 
              v-for="example in extension.examples" 
              :key="example" 
              class="example-tag"
            >
              {{ example }}
            </span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
export interface ExtensionItem {
  name: string
  type: string
  description: string
  icon: string
  usecases: string[]
  examples?: string[]
  featured?: boolean
}

export interface Props {
  title: string
  subtitle: string
  extensions: ExtensionItem[]
}

defineProps<Props>()
</script>

<style scoped>
.extension-showcase {
  margin-top: 3rem;
  /* margin: 3rem 0; */
  /* padding: 2rem 0; */
}

.showcase-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  background: linear-gradient(120deg, var(--vp-c-brand-1) 30%, #f15a24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.showcase-subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.extensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.extension-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.extension-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.extension-card.featured {
  border-color: var(--vp-c-brand-1);
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft));
}

.extension-card.featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), #f15a24);
}

.extension-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.extension-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  flex-shrink: 0;
}

.extension-info {
  flex: 1;
}

.extension-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: var(--vp-c-text-1);
}

.extension-type {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-elv);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-border);
}

.extension-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
}

.extension-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.extension-usecases h4,
.extension-examples h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.extension-usecases h4::before {
  content: '🎯';
  font-size: 0.8rem;
}

.extension-examples h4::before {
  content: '📝';
  font-size: 0.8rem;
}

.usecase-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.usecase-item {
  padding: 0.5rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.usecase-item::before {
  content: '•';
  color: var(--vp-c-brand-1);
  font-weight: bold;
  position: absolute;
  left: 0.5rem;
}

.examples-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.example-tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .extension-showcase {
    margin: 2rem 0;
    padding: 1rem 0;
  }
  
  .showcase-title {
    font-size: 1.75rem;
  }
  
  .showcase-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .extensions-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .extension-card {
    padding: 1.25rem;
  }
  
  .extension-header {
    gap: 0.75rem;
  }
  
  .extension-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .extension-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .extension-card {
    padding: 1rem;
  }
  
  .extension-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  
  .extension-badge {
    position: static;
    align-self: flex-end;
    margin-top: -0.5rem;
  }
}

/* Dark mode enhancements */
.dark .extension-card {
  background: var(--vp-c-bg-alt);
}

.dark .extension-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.dark .extension-badge {
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.5);
}
</style>
