<script setup lang="ts">
import PostComponent from '@/components/PostComponent.vue'

const posts: Array<{ title: string; content: string; imgLink: string }> = [
  {
    title: 'titre1',
    content: 'content',
    imgLink: '',
  },
  {
    title: 'titre2',
    content: 'content',
    imgLink: '',
  },
]
</script>
<template>
  <main class="flex">
    <div class="flex-none p-6">Filtrage</div>
    <div class="grow p-6">
      <div v-for="(post, index) in posts" :key="index" class="mb-3">
        <PostComponent :title="post.title" :content="post.content" :imgLink="post.imgLink" />
      </div>
    </div>
    <div class="flex-none p-6">Tendances</div>
  </main>
</template>
