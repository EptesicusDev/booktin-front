<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '@/supabase'

const router = useRouter()
const email = ref('')
const password = ref('')

const onSubmit = async () => {
  if (!email.value && !password.value) return

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    alert(error.message)
  } else {
    router.push('/')
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
}
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../assets/booktin.ico" alt="Booktin" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Connexion</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Adresse mail</label>
          <div class="mt-2">
            <input
              type="email"
              name="email"
              v-model="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900"
              >Mot de passe</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-primary">Mot de passe oublié ?</a>
            </div>
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password"
              v-model="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            @click="onSubmit"
            class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:hover-bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Connexion
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Pas encore inscrit ?
        <router-link to="/register" class="font-semibold text-primary">S'inscrire</router-link>
      </p>
    </div>
  </div>
</template>
