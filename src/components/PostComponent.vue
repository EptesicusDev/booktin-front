<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  content: string
  imgLink: string
}>()
</script>
<template>
  <div class="m-3 w-full rounded-xl flex p-3">
    <img :src="props.imgLink" alt="image" class="bg-gray-200 rounded-lg h-64 w-64" />
    <div class="ml-3 grow">
      <h2>{{ props.title }}</h2>
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>
