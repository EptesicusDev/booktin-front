<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  date: string,
  title: string,
  content: string,
  imgLink: string,
  company: string,
  site: string,
  address: string,
  activity: string
}>()
</script>
<template>
  <div class="my-3 w-full flex py-3 mb-6">
    <img :src="props.imgLink" alt="image" class="object-cover bg-gray-200 rounded-xl h-64 w-64" />
    <div class="ml-6 grow h-fit">
      <div class="border-b border-gray-200 pb-4">
        <div class="flex">
          <p class="my-auto card-dim mr-4">{{ props.date }}</p>
          <span
            class="mr-1 inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">{{
              props.site }}</span>
          <span
            class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">{{
              props.activity }}</span>
        </div>
        <p class="card-title my-4">{{ props.title }}</p>
        <p>{{ props.content }}</p>
      </div>
      <div class="pt-4">
        <p class="font-bold text-black">{{ props.company }}</p>
        <p>{{ props.address }}</p>
        <a href="" class="text-primary flex m-2">
          <p class="mr-2 underline">Découvrir</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
