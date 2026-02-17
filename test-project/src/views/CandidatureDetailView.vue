<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
    <div class="container mx-auto px-4">

      <!-- Back Button -->
      <RouterLink
        to="/candidatures"
        class="inline-block mb-6 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Retour
      </RouterLink>

      <!-- Loader -->
      <div v-if="loading" class="text-center py-10">
        <div class="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
      </div>

      <!-- Error -->
      <div v-if="error" class="bg-red-100 text-red-700 p-4 rounded mb-4">
        {{ error }}
      </div>

      <!-- Content -->
      <CandidatureCard 
        v-if="candidature"
        :candidature="candidature"
      />

    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCandidatureDetails } from '@/composables/useCandidatureDetails'
import CandidatureCard from '@/components/CandidatureCard.vue'

const route = useRoute()

const {
  candidature,
  loading,
  error
} = useCandidatureDetails(route.params.id as string)
</script>
