<template>
  <div>
    <Header />
    <div class="content-wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from "./parts/Header.vue";
import Footer from "./parts/Footer.vue";
</script>
