<template>
  <nav class="navbar">
    <div class="logo">
      <!-- put logo image here -->
      <RouterLink to="/">
        <img src="@/assets/images/logo.jpg" alt="Logo" />
      </RouterLink>
    </div>

    <ul class="nav-links">
      <!-- 遍历器循环导航项 -->
      <li v-for="(item, index) in navItems" :key="index">
        <!-- 用vue的方式放超链接 -->
        <RouterLink :to="item.href">{{ item.label }}</RouterLink>
      </li>
    </ul>
    <ul class="nav-links" style="margin-left: auto">
      <li v-for="(item, index) in rightItems" :key="index">
        <RouterLink :to="item.href">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// 导航栏项目
const navItems = [
  { label: '首页', href: '/' },
  { label: '角色', href: '#' },
  { label: '产品', href: '#' },
  { label: '关于我们', href: '#' },
  { label: '联系我们', href: '#' },
]
const rightItems = [
  { label: '购物车', href: '#' },
  { label: '登录', href: '/login' },
]
</script>

<style scoped>
/* logo 样式 */
.logo img {
  height: 60px; /* 根据需要调整 logo 大小 */
  border-radius: 50%; /* 圆形 logo */
  margin-top: 25px;
  align-items: center;
}
.navbar {
  width: 100%; /* 确保撑满屏幕 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  background-color: #0bd5e8;
  height: 80px;
  line-height: 60px;
  position: sticky;
  top: 0;
  z-index: 1000;
  /* 边缘圆润 */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px; /* 每个链接间距 */
  margin-left: 20px;
  padding: 0;
  white-space: nowrap; /* 保证一行显示 */
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: border-bottom 0.3s;
}

.nav-links li a:hover {
  border-bottom: 2px solid #fbd737;
  background-color: #fbd737;
  /* 圆角 */
  border-radius: 5px;
}
</style>
