<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  id: string
}>()
</script>
<template>
  <div>test {{ props.id }}</div>
</template>
