<script setup lang="ts">
import PostComponent from '@/components/PostComponent.vue'

const posts: Array<{
  id: string
  title: string
  content: string
  date: string
  imgLink: string
  company: string
  site: string
  address: string
  activity: string
}> = [
  {
    id: '0',
    title: 'Refonte complète de la décoration au Chalet de JP',
    content:
      'Fini les paillassons en peau de couilles de Jhonny. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mardi 17 Dec, 2024',
    imgLink: 'https://www.chalet-montagne.com/photoslocations/82/16583/10081712.jpg',
    company: 'Le Chalet de JP',
    site: "Val d'Isère",
    address: '12 Route de Rue, 12345 Villeville',
    activity: 'Restauration',
  },
  {
    id: '1',
    title: "Nouveau magasin d'équipement de ski sur la station des Alpes Guez",
    content:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Lundi 9 Mar, 2025',
    imgLink: 'https://www.hotel-la-clusaz.com/wp-content/uploads/2022/02/location-laclusaz.jpg',
    company: 'Les skis touneuf',
    site: "Val d'Isère",
    address: '12 Route de Rue, 12345 Villeville',
    activity: 'Location ski',
  },
]
</script>
<template>
  <main class="flex">
    <div class="flex-none p-6">Filtrage</div>
    <div class="grow p-6">
      <h1 class="section-title">Actualités</h1>
      <div v-for="(post, index) in posts" :key="index" class="mb-3">
        <PostComponent
          :id="post.id"
          :title="post.title"
          :content="post.content"
          :date="post.date"
          :imgLink="post.imgLink"
          :company="post.company"
          :site="post.site"
          :address="post.address"
          :activity="post.activity"
        />
      </div>
    </div>
    <div class="flex-none p-6">Tendances</div>
  </main>
</template>
