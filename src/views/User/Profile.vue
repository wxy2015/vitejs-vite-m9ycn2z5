<!-- src/views/User/Profile.vue -->
<script setup>
import { ref } from 'vue'

const editMode = ref(false)
const userData = ref({
  name: 'John Doe',
  email: 'john@example.com'
})
</script>

<template>
  <div class="profile">
    <h1>Profile Management</h1>
    
    <div v-if="!editMode">
      <p>Name: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
      <button @click="editMode = true">Edit</button>
    </div>

    <div v-else>
      <input v-model="userData.name" />
      <input v-model="userData.email" />
      <button @click="editMode = false">Save</button>
    </div>
  </div>
</template>