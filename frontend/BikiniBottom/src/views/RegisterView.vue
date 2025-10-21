<!-- 注册页面 -->

<script>
import { ref } from 'vue'
const username = ref('')
const email = ref('')
const password = ref('')

// // 处理注册逻辑
// const handleRegister = () => {
//     console.log('注册信息:', {
//         username: username.value,
//         email: email.value,
//         password: password.value
//     });
// };
</script>

<template>
  <div class="background-image">
    <div class="register-container">
      <h1>注册</h1>
      <form class="register-form">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">邮箱:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="verification">验证码:</label>
          <input type="text" id="verification" v-model="verification" required />
          <button type="button" id="send-button" @click="sendVerificationCode">发送验证码</button>
        </div>
        <button type="submit" id="register-button">注册</button>
        <router-link to="/login" id="login-link">已有账号？登录</router-link>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #000;
  text-align: center;
  margin-bottom: 50px;
}
/* 登录页面背景图片 */
.background-image {
  width: 600px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto; /* 横向居中 */
  background-image: url('@/assets/images/border7.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 15px;
  /* 边缘虚化 */
  backdrop-filter: blur(1px);
  /* 添加阴影 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.register-container {
  /* 偏左上 */
  width: 450px;
  height: 500px;
  margin: 50px 50px 100px 60px; /* 上 右 下 左 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* 背景色及透明度 */
  background: rgba(255, 255, 255, 0.9);
}
.register-form {
  width: 100%;
  max-width: 400px;
}
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
/* 标签样式 */
label {
  color: #000;
  display: block;
  margin-bottom: 5px;
}
/* 表单输入框 */
input {
  width: 85%;
  padding: 8px;
  margin-bottom: 6px;
  box-sizing: border-box;
}
/* 验证码输入框 */
#verification {
  width: 55%;
  display: inline-block;
}
#send-button {
  width: 25%;
  padding: 8px;
  margin-left: 10px;
  background-color: #0bd5e8;
  color: white;
  border: none;
  cursor: pointer;
}
/* 注册按钮 */
#register-button {
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  background-color: #0bd5e8;
  color: white;
  border: none;
  cursor: pointer;
}
#register-button:hover {
  background-color: #0aaac0;
}
#login-link {
  display: block;
  margin-top: 10px;
  text-align: center;
}
</style>
