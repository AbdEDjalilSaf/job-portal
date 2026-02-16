<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
    <div class="container mx-auto px-4">

      <h1 class="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        My Candidatures
      </h1>

      <!-- Filters -->
      <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
        <div class="grid md:grid-cols-4 gap-4">

      <input
        v-model="filters.q"
        @input="filters._page = 1"
        type="text"
        placeholder="Search..."
        class="input outline-0"
      />


          <select v-model="filters.statut" class="input outline-0">
            <option class="bg-black py-2 px-3 text-white" value="">All Status</option>
            <option class="bg-black py-2 px-3 text-white" value="Applied">Applied</option>
            <option class="bg-black py-2 px-3 text-white" value="Interviewing">Interviewing</option>
            <option class="bg-black py-2 px-3 text-white" value="Rejected">Rejected</option>
          </select>

          <input
            v-model="filters.poste"
            type="text"
            placeholder="Poste"
            class="input outline-0"
          />

          <input
            v-model="filters.competences"
            type="text"
            placeholder="Competences"
            class="input outline-0"
          />
        </div>
      </div>

      <!-- Loader -->
      <div v-if="loading" class="text-center py-10">
        <div class="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
      </div>

      <!-- Error -->
      <div v-if="error" class="bg-red-100 text-red-700 p-4 rounded mb-4">
        {{ error }}
      </div>

      <!-- Cards -->
      <div class="space-y-4">
        <CandidatureCard
          v-for="item in candidatures.filter(c => c && c.id)"
          :key="item.id"
          :candidature="item"
        />
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8 gap-2 flex-wrap">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="filters._page = page"
          :class="[
            'px-4 py-2 rounded-lg',
            filters._page === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
          ]"
        >
          {{ page }}
        </button>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
import { useCandidatures } from '@/composables/useCandidatures'
import CandidatureCard from '@/components/CandidatureCard.vue'

const {
  candidatures,
  loading,
  error,
  filters,
  totalPages
} = useCandidatures()
</script>

<!-- <style scoped>
.input {
  @apply w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none;
}
</style> -->
