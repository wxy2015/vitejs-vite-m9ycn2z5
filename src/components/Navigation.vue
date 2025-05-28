<template>
  <nav>
    <!-- 导航内容将在这里添加 -->
    <button @click="navigate('/')">Home</button>
    <button @click="navigate('/about')">About</button>
    <button @click="navigate('/user/profile')">Profile</button>
    <!-- <button @click="navigate('/charts/bar')">Bar</button> -->
    <button @click="navigate('/charts/appUseOverviewBar')">应用使用概况柱形图</button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (path) => {
  router.push(path)
}
</script>


<style>
/* 样式将在这里添加 */
</style>
