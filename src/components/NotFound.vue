<template>
  <section class="notfound">
    <h1 class="code">{{ t('notfound.code') }}</h1>
    <p class="text">{{ t('notfound.text') }}</p>
    <button @click="goBack" class="btn">{{ t('notfound.back') }}</button>
    <h2 class="bottom__title">{{ t('notfound.bandTitle') }}</h2>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.notfound {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.code {
  font-size: 6rem;
  font-weight: 800;
  color: #44d78b;
}
.text {
  margin: 20px 0;
  color: #555;
}
.btn {
  background: #44d78b;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
}
.bottom__title {
  margin-top: 50px;
  color: #44d78b;
}
</style>
