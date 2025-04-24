<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'

const route = useRoute()
const business = ref()
const products = [
  {
    id: 1,
    name: 'Head Wc Rebels',
    href: '#',
    imageSrc:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRlGsFvGZ-uyt1bYHUjsl46ui7bx3B7R0o00jOjOeRnjmazRRrBKlBg0hu6w2o87f2EQManjRZJsx8UhiNCxb9Kml7nhAeSRi0PHfV_GERpdAwLBVL_ejJmA',
    imageAlt: 'ski',
    price: '35€',
    color: 'Location à la journée',
  },
  {
    id: 2,
    name: 'Wedze Boost 500',
    href: '#',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRhgybn_kdtV20j7rAI9Z7bld5FcFT9zrs_FlKiaoLFrOv2ZWb_lGy1AIevbt3jd8ek7VTxGor9K2QTx3bchFUytA9kQ2A1d2Pq5C5wRW6pM6DTiCvd3DJ',
    imageAlt: 'ski',
    price: '217€',
    color: 'Location à la semaine',
  },
  {
    id: 2,
    name: 'Rossignol Attraxion W',
    href: '#',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgTaJgEtH9ncGNDcQ6AOoqpfFvYSxR6l-II8R2sIDAlDk3C1vNlk5VRCOaX_0incZUMOWoFI3pSVikMMO0BC-9nyqMDF6cR8XVrwtBIXZTtPx2RE22Ro8f',
    imageAlt: 'ski',
    price: '206€',
    color: 'Location à la semaine',
  },
]

const initialize = async () => {
  var { data } = await supabase.from('entreprise').select().eq('en_id', route.params.id).limit(1)
  business.value = data[0]
  console.log(business.value)
}

onMounted(() => initialize())
</script>
<template>
  <div
    class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
  >
    <svg
      viewBox="0 0 1024 1024"
      class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
      aria-hidden="true"
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fill-opacity="0.7"
      />
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stop-color="#1115D6" />
          <stop offset="1" stop-color="#E935C1" />
        </radialGradient>
      </defs>
    </svg>
    <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
      <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
        {{ business.en_nom }}
      </h2>
      <p class="mt-6 text-lg/8 text-pretty text-gray-300">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
        sagittis vel nulla.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
        <a
          href="#"
          class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >Contacter</a
        >
        <a href="#" class="text-sm/6 font-semibold text-white"
          >A propos <span aria-hidden="true">→</span></a
        >
      </div>
    </div>
    <div class="relative mt-16 h-80 lg:mt-8">
      <img
        class="absolute top-0 left-0 w-[57rem] max-h-[32.2rem] object-cover max-w-none rounded-s-md bg-white/5 ring-1 ring-white/10"
        src="https://www.chalet-montagne.com/photoslocations/82/16583/10081712.jpg"
        alt="App screenshot"
        width="1824"
        height="1080"
      />
    </div>
  </div>
  <div class="mx-auto max-w-2xl p-10 lg:max-w-7xl">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Offres de l'entreprise</h2>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div v-for="product in products" :key="product.id" class="group relative">
        <img
          :src="product.imageSrc"
          :alt="product.imageAlt"
          class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>
