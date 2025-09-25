<!-- 轮播图组件 -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 轮播图图片，可传 props 或者这里写死
const images = ref(
  Object.values(
    import.meta.glob('@/assets/images/carousel/*.{jpg,png,gif}', { eager: true, import: 'default' })
  )
);

const currentIndex = ref(0);
let timer = null;

// 自动轮播
const startAutoPlay = () => {
  timer = setInterval(() => {
    next();
  }, 5000); // 每 5 秒切换一次
};

const stopAutoPlay = () => {
  clearInterval(timer);
};

// 切换下一张
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// 切换上一张
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// 点击圆点切换
const goTo = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startAutoPlay();
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<template>
  <div class="carousel">
    <!-- 图片列表 -->
    <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(img, index) in images" :key="index">
        <img :src="img" alt="" />
      </div>
    </div>

    <!-- 前后按钮 -->
    <button class="prev" @click="prev">‹</button>
    <button class="next" @click="next">›</button>

    <!-- 圆点指示器 -->
    <div class="dots">
      <span 
        v-for="(img, index) in images" 
        :key="index" 
        :class="{ active: index === currentIndex }" 
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>


<style scoped>
.carousel {
  position: relative;
  width: 600px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  /* 位置上下居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  display: block;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.3);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.prev { left: 10px; }
.next { right: 10px; }

.dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dots .active {
  background: white;
}
</style>