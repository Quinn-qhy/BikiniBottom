<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

// 导入背景图片
import bg from '@/assets/images/home_bg.jpg'
</script>

<template>
  <div id="app" :style="{ backgroundImage: `url(${bg})` }">
    <NavBar />
    <RouterView />
  </div>
</template>

<style>
#app {
  width: 100%;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>