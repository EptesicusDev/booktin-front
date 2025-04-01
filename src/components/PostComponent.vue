<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  content: string
  imgLink: string
}>()
</script>
<template>
  <div class="m-3 w-full h-64 bg-black rounded-lg flex">
    <img :src="props.imgLink" alt="image" class="bg-gray-200 h-64 w-64" />
  </div>
</template>
