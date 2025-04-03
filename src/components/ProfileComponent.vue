<script lang="ts" setup>

import { defineProps, defineEmits } from "vue";
import { supabase } from "../supabase"; 

const props = defineProps({
  isOpen: Boolean,
  user : {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["close"]);

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Erreur lors de la déconnexion :", error.message);
  } else {
    emit("close");
  }
};

</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
    >
      <div class="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <!-- Bouton de fermeture -->
        <button
          @click="emit('close')"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <!-- Contenu de la modal -->
        <div class="p-5">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Profil Utilisateur de {{ user.email }}
          </h3>

          <form class="space-y-4 mt-4">
          
            <button
              type="submit"
              @click="logOut"
              class="w-full bg-primary text-white p-2.5 rounded-lg hover:hover-bg-primary"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>
