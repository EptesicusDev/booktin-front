<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <RouterView />
  <footer>
    <FooterComponent />
  </footer>
</template>
