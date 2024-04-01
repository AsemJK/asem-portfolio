<template>
  <div>
    <Header />
    <Sidebar />
    <div class="content-wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from "@/components/admin/Header.vue";
import Sidebar from "@/components/admin/Sidebar.vue";
import Footer from "@/components/admin/Footer.vue";

import { ref } from "vue";
</script>
