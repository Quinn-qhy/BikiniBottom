<!-- 这里是主页 -->
<script setup>
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <div class="container">
    <!-- Bikini Bottom intro -->
    <div class="intro">
      <h1>欢迎来到 Bikini Bottom</h1>
      <p>探索海底世界的奇妙之旅！</p>
    </div>
    <!-- 放轮播图 -->
    <Carousel id="home-carousel" />
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.intro {
  max-width: 45%;
  margin-left: 40px;
}
</style>
