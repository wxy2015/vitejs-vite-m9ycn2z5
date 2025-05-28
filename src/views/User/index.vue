<!-- src/views/User/index.vue -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProfile = () => {
  router.push('/user/profile') // 导航到子路由
}
</script>

<template>
  <div class="user-container">
    <h1>User Center</h1>
    
    <!-- 嵌套路由出口 -->
    <router-view />
    
    <!-- 导航区 -->
    <nav>
      <button @click="navigateToProfile">Go to Profile</button>
      <button @click="router.back()">Back</button>
    </nav>
    
    <!-- 用户中心的其他内容 -->
    <section>
      <h2>User Information</h2>
      <p>This is the main user center interface</p>
    </section>
  </div>
</template>

<style scoped>
.user-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

nav {
  margin: 20px 0;
  padding: 10px;
  background: #f5f5f5;
}

button {
  margin-right: 10px;
  padding: 8px 16px;
}
</style>