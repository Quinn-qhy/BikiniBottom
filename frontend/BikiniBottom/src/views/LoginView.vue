<!-- login view -->
<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')

// // 处理登录逻辑
// const handleLogin = () => {
//     console.log('登录信息:', {
//         email: email.value,
//         password: password.value
//     });
// };
</script>

<template>
  <div class="background-image">
    <div class="login-container">
      <h1>登录</h1>
      <form class="login-form">
        <div class="form-group">
          <label for="email">邮箱:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">登录</button>
        <router-link to="/register" id="register-link">没有账号？注册</router-link>
      </form>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  width: 600px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; /* 横向居中 */
  background-image: url('@/assets/images/border3.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  /* 边缘虚化 */
  backdrop-filter: blur(1px);
  /* 添加阴影 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.login-container {
  /* 偏左上 */
  width: 900px;
  height: 400px;
  margin: 50px 200px 180px 40px; /* 上 右 下 左 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* 背景色及透明度 */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-group {
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
h1 {
  text-align: center;
  margin-bottom: 80px;
  color: #000;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #000;
}
button {
  margin-top: 30px;
  width: 50%;
  padding: 10px;
  align-self: center;
  background-color: #0bd5e8;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #fbd737;
}

#register-link {
  display: block;
  margin-top: 10px;
  text-align: right;
  color: #007bff;
}
#register-link:hover {
  text-decoration: underline;
  background-color: transparent;
}
</style>
