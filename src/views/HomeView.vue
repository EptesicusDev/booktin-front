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
    id: "0",
    title: "Refonte complète de la décoration au Chalet de JP",
    content: "Le Chalet de JP a entièrement repensé son ambiance intérieure pour offrir une atmosphère plus chaleureuse et authentique. Bois brut, éclairage tamisé et mobilier artisanal font désormais partie du décor. Cette transformation vise à améliorer l'expérience client tout en respectant l'esprit montagnard.",
    date: "Mardi 17 Dec, 2024",
    imgLink: "https://www.chalet-montagne.com/photoslocations/82/16583/10081712.jpg",
    company: "Le Chalet de JP",
    site: "Val d'Isère",
    address: "12 Route de Rue, 12345 Villeville",
    activity: "Restauration"
  },
  {
    id: "1",
    title: "Nouveau magasin d'équipement de ski sur la station des Alpes Guez",
    content: "Les Skis Touneuf ouvre un nouveau point de vente à Val d'Isère. Avec un large choix de matériel dernier cri, des conseils personnalisés et un atelier d'entretien, la boutique ambitionne de devenir une référence locale pour les amateurs de glisse.",
    date: "Lundi 9 Mar, 2025",
    imgLink: "https://www.hotel-la-clusaz.com/wp-content/uploads/2022/02/location-laclusaz.jpg",
    company: "Les Skis Touneuf",
    site: "Val d'Isère",
    address: "12 Route de Rue, 12345 Villeville",
    activity: "Location ski"
  },
  {
    id: "2",
    title: "Installation d’un espace bien-être au Refuge des Cimes",
    content: "Le Refuge des Cimes inaugure un tout nouvel espace spa avec jacuzzi panoramique, sauna traditionnel et salle de massage. Ce projet s’inscrit dans une volonté d’offrir à ses clients un moment de détente après une journée de ski.",
    date: "Jeudi 6 Février, 2025",
    imgLink: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2000,h_1333/https://www.hotel-lemaury.com/wp-content/uploads/2023/06/SAUNA-ESPACE-BIEN-ETRE.jpg",
    company: "Refuge des Cimes",
    site: "Les Arcs",
    address: "8 Route du Glacier, 73700 Bourg-Saint-Maurice",
    activity: "Hôtellerie"
  },
  {
    id: "3",
    title: "Modernisation du parc de remontées mécaniques",
    content: "La station de Tignes investit dans de nouvelles remontées mécaniques plus rapides et plus écologiques. Objectif : réduire le temps d’attente et l’impact environnemental grâce à des systèmes de motorisation de nouvelle génération.",
    date: "Vendredi 21 Mars, 2025",
    imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Skilift2.jpg/1200px-Skilift2.jpg",
    company: "Société des Remontées Tignes",
    site: "Tignes",
    address: "Station Tignes Le Lac, 73320 Tignes",
    activity: "Infrastructure montagne"
  }
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
