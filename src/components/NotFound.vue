<template>
  <section class="notfound">
    <div class="content">
      <h1 class="code">{{ t('notfound.code') }}</h1>
      <p class="text">{{ t('notfound.text') }}</p>
      <button @click="goBack" class="btn">{{ t('notfound.back') }}</button>
    </div>

    <div class="bottom">
      <h2 class="bottom__title">{{ t('notfound.bandTitle') }}</h2>
      <p class="bottom__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco.</p>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.notfound {
  --band-h: clamp(180px, 30vh, 240px);
  display: grid;
  grid-template-rows: calc(100vh - var(--band-h)) var(--band-h);
  height: 100vh;
  width: 100%;
  font-family: "Arial", sans-serif;
  background: #fff;
  overflow: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 16px 0;
}

.code {
  font-size: clamp(160px, 23vw, 320px);
  font-weight: 700;
  color: #b7f0ce;
  line-height: 0.9;
  margin: 0 0 25px;
}

.text {
  color: #666;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.5;
  margin-bottom: 32px;
}

.btn {
  background-color: #44d78b;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 12px 34px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

.btn:hover {
  background-color: #3acb80;
  transform: translateY(-2px);
}

.bottom {
  background-color: #44d78b;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 14px;
}

.bottom__title {
  font-size: clamp(20px, 2.2vw, 26px);
  font-weight: 700;
  margin-bottom: 10px;
}

.bottom__text {
  max-width: 520px;
  margin: 0 auto;
  font-size: clamp(12px, 1.5vw, 14px);
  line-height: 1.45;
  opacity: 0.95;
}

@media (max-height: 700px) {
  .code {
    font-size: clamp(130px, 20vw, 240px);
  }
  .text {
    margin-bottom: 20px;
  }
  .btn {
    padding: 10px 28px;
  }
}
</style>
