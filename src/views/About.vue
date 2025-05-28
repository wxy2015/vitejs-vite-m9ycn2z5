<!-- src/views/About.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const message = ref('Welcome to About Page')

const goBack = () => {
  router.go(-1) // 返回上一页
}
</script>

<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <button @click="goBack">Back to Previous Page</button>
    
    <!-- 示例内容 -->
    <section>
      <h2>About Us</h2>
      <p>This is a demo about page using Vue 3 Composition API</p>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
button {
  margin: 10px;
  padding: 8px 16px;
}
</style>