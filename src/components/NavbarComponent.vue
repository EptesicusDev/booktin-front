<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import ProfileComponent from '@/components/ProfileComponent.vue'
import ShoppingCartDrawerComponent from '@/components/ShoppingCartDrawerComponent.vue'

const isProfileOpen = ref(false)
const user = ref()

const isCartOpen = ref(false)

const fetchUser = async () => {
  const { data } = await supabase.auth.getSession()
  user.value = data.session?.user || null
}

onMounted(() => {
  fetchUser()
})

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'Entreprises', href: '#', current: false },
  { name: 'Booktin+', href: '/pricing', current: false },
]
</script>

<template>
  <Disclosure as="nav" class="bg-secondary" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-gray-800 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto" src="/src/assets/booktin.ico" alt="Logo booktin" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current ? 'bg-primary text-white' : 'text-black hover:text-gray-800',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div v-if="user != null" class="flex items-center">
            <button
              type="button"
              @click="isCartOpen = true"
              class="rounded-full border border-primary border-2 p-1"
            >
              <ShoppingBagIcon class="size-5 text-primary" aria-hidden="true" />
            </button>

            <ShoppingCartDrawerComponent :isOpen="isCartOpen" @close="isCartOpen = false" />

            <Menu as="div" class="relative ml-3">
              <MenuButton
                @click="isProfileOpen = true"
                class="relative flex rounded-full bg-black text-sm focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary focus:outline-hidden"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
              <ProfileComponent
                :isOpen="isProfileOpen"
                @close="isProfileOpen = false"
                :user="user"
              />
            </Menu>
          </div>

          <div v-else>
            <router-link to="/login" class="text-primary font-bold">Connexion &rarr;</router-link>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current ? 'bg-primary text-white' : 'text-black hover:text-gray-800',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
