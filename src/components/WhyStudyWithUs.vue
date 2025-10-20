<template>
  <section class="study">
    <h1 class="study__title">{{ t('whyUs.title') }}</h1>

    <div class="study__grid">
      <div
          class="card"
          v-for="(item, i) in cards"
          :key="i"
      >
        <div
            class="card__image"
            :style="{ backgroundImage: `url(${item.image})` }"
        ></div>

        <div class="card__body">
          <h2>{{ item.title }}</h2>
          <p v-html="item.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const cards = computed(() => [
  {
    image: 'src/assets/001.jpg',
    title: t('whyUs.cards.wide.title'),
    text: t('whyUs.cards.wide.text'),
  },
  {
    image: 'src/assets/001.jpg',
    title: t('whyUs.cards.cont.title'),
    text: t('whyUs.cards.cont.text'),
  },
  {
    image: 'src/assets/001.jpg',
    title: t('whyUs.cards.modern.title'),
    text: t('whyUs.cards.modern.text'),
  },
  {
    image: 'src/assets/001.jpg',
    title: t('whyUs.cards.noExam.title'),
    text: t('whyUs.cards.noExam.text'),
  },
  {
    image: 'src/assets/001.jpg',
    title: t('whyUs.cards.individual.title'),
    text: t('whyUs.cards.individual.text'),
  },
  {
    image: 'src/assets/001.jpg',
    title: t('whyUs.cards.life.title'),
    text: t('whyUs.cards.life.text'),
  },
])
</script>

<style scoped>
.study {
  width: 100%;
  background: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 60px 100px;
  box-sizing: border-box;
}

.study__title {
  color: #44d78b;
  font-size: 2.3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
}

.study__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 1fr));
  gap: 36px 36px;
  width: 100%;
  max-width: 1320px;
  align-items: stretch;
}

.card {
  background: #eaf8f1;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
  height: auto;
  min-height: 420px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.card__image {
  width: calc(100% - 40px);
  height: 200px;
  margin: 20px 20px 0;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f1f9fd;
}

.card__body {
  padding: 20px;
  text-align: left;
  flex: 1;
}

.card__body h2 {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 10px 0 10px;
  color: #1e1e1e;
}

.card__body p {
  font-size: 0.95rem;
  line-height: 1.55;
  color: #2f2f2f;
  white-space: normal;
  word-break: break-word;
  margin: 0;
}

.card__body p br {
  display: none;
}

@media (max-width: 650px) {
  .card__body p br {
    display: inline;
  }
}

@media (max-width: 1200px) {
  .study__grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1000px;
  }
}

@media (max-width: 750px) {
  .study__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .study {
    padding: 40px 30px 60px;
  }
}
</style>
