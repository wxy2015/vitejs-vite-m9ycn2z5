<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const counter = ref(0)

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <h1>Home Page</h1>
  <p>Count: {{ counter }}</p>
  <button @click="counter++">Increment</button>
  <button @click="goToAbout">Go to About</button>
</template>