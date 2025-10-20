<template>
  <header class="header">
    <div class="left-side">
      <img src="@/assets/001.jpg" alt="Header Image" />
    </div>

    <div class="right-side">
      <div class="lang-selector">
        <span :class="{ active: locale.value === 'sk' }" @click="setLang('sk')">SK</span>
        <span :class="{ active: locale.value === 'en' }" @click="setLang('en')">EN</span>
        <span :class="{ active: locale.value === 'ua' }" @click="setLang('ua')">UA</span>
      </div>

      <div class="text-block">
        <h1>{{ t('header.title') }}</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing<br>
          elitr, sed diam nonumy eirmod tempor invidunt ut<br>
          labore et dolore magna aliquyam erat, sed diam<br>
          voluptua.</p>
        <div class="buttons">
          <button class="filled-btn" @click="scrollTo('section-fields')">{{ t('header.ctaPrograms') }}</button>
          <button class="outline-btn" @click="scrollTo('section-contact')">{{ t('header.ctaAbout') }}</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

function setLang(code) {
  locale.value = code
  localStorage.setItem('lang', code)
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
}
.left-side {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.left-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  position: relative;
}
.lang-selector {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #44d78b;
  font-weight: 600;
}
.lang-selector span {
  margin: 0 8px;
  cursor: pointer;
  opacity: 0.6;
}
.lang-selector .active {
  opacity: 1;
}
.text-block {
  max-width: 520px;
}
h1 {
  color: #44d78b;
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 20px;
}
p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 40px;
}
.buttons {
  display: flex;
  gap: 20px;
}
.filled-btn {
  background-color: #44d78b;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
}
.outline-btn {
  background: transparent;
  color: #44d78b;
  border: 2px solid #44d78b;
  padding: 10px 28px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
}
.filled-btn:hover {
  background-color: #3ac37e;
}
.outline-btn:hover {
  background-color: #44d78b;
  color: white;
}
@media (max-width: 950px) {
  .header {
    flex-direction: column;
    height: auto;
  }
  .right-side {
    padding: 60px 40px;
    align-items: center;
    text-align: center;
  }
}
</style>
