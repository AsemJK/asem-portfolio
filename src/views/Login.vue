<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const login = () => {
  console.log(username.value, password.value);
};
</script>
