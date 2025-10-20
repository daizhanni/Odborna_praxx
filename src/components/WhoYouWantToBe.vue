<template>
  <section class="future">
    <div class="future__container">
      <div class="future__image"></div>
      <div class="future__text">
        <h2>{{ t('future.title') }}</h2>
        <p class="subtitle">{{ t('future.subtitle') }}</p>
        <p>
          Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.future {
  width: 100%;
  min-height: 100vh;
  background: #44d78b;
  display: flex;
  align-items: center;
  padding: 40px 56px;
  font-family: Arial, sans-serif;
}
.future__container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 48px;
}
.future__image {
  height: 420px;
  border-radius: 8px;
  background: #eef6fb url('src/assets/001.jpg') center/cover no-repeat;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}
.future__text {
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.future__text h2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 14px;
}
.future__text .subtitle {
  color: #d8ffe8;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 14px;
}
.future__text p {
  color: #eafff4;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 12px;
}
@media (max-width: 1024px) {
  .future__container {
    grid-template-columns: 1fr;
  }
  .future__text { text-align: center; align-items: center; }
}
</style>
