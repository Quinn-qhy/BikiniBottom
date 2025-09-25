<!-- 根组件 -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <!-- 顶部导航栏 -->
  <NavBar />
  <!-- 路由出口 -->
  <RouterView id="home-view" />
</template>

<style>
/* 根容器样式 */
#app {
  width: 100%;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: block; /* 确保子元素不被 flex 居中 */
}
</style>