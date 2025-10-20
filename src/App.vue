<template>
  <Header v-if="!$route.meta.hideChrome" />
  <router-view />
  <Footer v-if="!$route.meta.hideChrome" />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
}
</style>
