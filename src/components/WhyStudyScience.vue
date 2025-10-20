<template>
  <section class="why-science">
    <h2>{{ t('whyScience.title') }}</h2>
    <h4>{{ t('whyScience.subtitle') }}</h4>

    <div class="grid">
      <div class="card">
        <div class="icon-wrap" aria-hidden="true">
          <svg class="icon-svg" viewBox="0 0 24 24">
            <path d="M12 3 21 7.5 12 12 3 7.5 12 3Z" />
            <path d="m3 12 9 4.5 9-4.5" />
            <path d="m3 16.5 9 4.5 9-4.5" />
          </svg>
        </div>
        <h3>{{ t('whyScience.cards.knowledgeTitle') }}</h3>
        <p v-html="t('whyScience.cards.knowledgeText')"></p>
      </div>

      <div class="card">
        <div class="icon-wrap" aria-hidden="true">
          <svg class="icon-svg" viewBox="0 0 24 24">
            <circle cx="12" cy="10" r="7" />
            <path d="M6 21h12" />
            <path d="M8 21a4 4 0 0 1 8 0" />
            <path d="M14.5 7.5a2.5 2.5 0 0 0-2-1" />
          </svg>
        </div>
        <h3>{{ t('whyScience.cards.futureTitle') }}</h3>
        <p v-html="t('whyScience.cards.futureText')"></p>
      </div>

      <div class="card">
        <div class="icon-wrap" aria-hidden="true">
          <svg class="icon-svg" viewBox="0 0 24 24">
            <rect x="3" y="11" width="8" height="7" rx="1" />
            <rect x="13" y="11" width="8" height="7" rx="1" />
            <path d="M7 11V7" />
            <path d="M17 11V7" />
            <circle cx="5.5" cy="7" r="1" />
            <circle cx="8.5" cy="7" r="1" />
            <circle cx="14.5" cy="7" r="1" />
            <circle cx="17.5" cy="7" r="1" />
          </svg>
        </div>
        <h3>{{ t('whyScience.cards.funTitle') }}</h3>
        <p v-html="t('whyScience.cards.funText')"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.why-science {
  text-align: center;
  padding: 80px 20px;
  background-color: #ffffff;
}

h2 {
  color: #44d78b;
  font-size: 2.8em;
  font-weight: 700;
  margin-bottom: 5px;
}

h4 {
  color: #b7f0ce;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: #fff;
  padding: 20px;
  border: none;
}

.icon-wrap {
  display: inline-flex;
  margin-bottom: 30px;
}

.icon-svg {
  width: 88px;
  height: 88px;
  stroke: #44d78b;
  stroke-width: 2.75;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

h3 {
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 20px;
  color: #111;
}

p {
  color: #333;
  line-height: 1.6;
  font-size: 1em;
  text-align: left;
  max-width: 360px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  p {
    text-align: center;
    max-width: 600px;
  }
}
</style>
