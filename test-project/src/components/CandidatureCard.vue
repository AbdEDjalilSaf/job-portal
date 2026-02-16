<!-- <template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div>
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          {{ candidature.poste }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          {{ candidature.company }}
        </p>
      </div>

      <span
        :class="statusClass(candidature.statut)"
        class="px-3 py-1 rounded-full text-sm font-medium"
      >
        {{ candidature.statut }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Candidature {
  id: number
  poste: string
  company: string
  statut: string
  competences?: string
  [key: string]: any
}

interface Props {
  candidature: Candidature
}

defineProps<Props>()

const statusClass = (status: string) => {
  switch (status) {
    case 'Interviewing':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    case 'Applied':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    case 'Rejected':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
</script> -->













<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition w-full  mx-auto"
  >
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4"
    >
      <div>
        <h2 class="text-xl font-semibold mb-1.5 text-gray-800 dark:text-white">
          {{ candidature.poste }}
        </h2>
        <p class="text-gray-600 mb-2 dark:text-gray-400">{{ candidature.nom }}</p>
        <p class="text-gray-500 dark:text-gray-300 text-sm">
          {{ candidature.localisation }}
        </p>
      </div>

      <span
        :class="statusClass(candidature.statut)"
        class="px-3 text-center py-1 rounded-full text-sm font-medium"
      >
        {{ candidature.statut }}
      </span>
    </div>

    <!-- Details Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-gray-700 dark:text-gray-300">
      <div>
        <strong>Experience:</strong> {{ candidature.experience }}
      </div>
      <div>
        <strong>Disponibilité:</strong> {{ candidature.disponibilite }}
      </div>
      <div>
        <strong>Salaire souhaité:</strong> €{{ candidature.salaireSouhaite }}
      </div>
      <div>
        <strong>Email:</strong>
        <a
          :href="`mailto:${candidature.email}`"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {{ candidature.email }}
        </a>
      </div>
      <div>
        <strong>Téléphone:</strong>
        <a
          :href="`tel:${candidature.telephone}`"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {{ candidature.telephone }}
        </a>
      </div>
      <div>
        <strong>Date candidature:</strong>
        {{ formatDate(candidature.dateCandidature) }}
      </div>
    </div>

    <!-- Skills -->
    <div class="mb-4">
      <strong>Compétences:</strong>
      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-for="(skill, index) in candidature.competences"
          :key="index"
          class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full text-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- CV & Lettre de motivation -->
    <div class="flex flex-wrap gap-4 mb-4">
      <a
        :href="candidature.cv"
        target="_blank"
        class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-md hover:underline"
      >
        Voir CV
      </a>
      <a
        :href="candidature.lettreMotivation"
        target="_blank"
        class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-md hover:underline"
      >
        Lettre de motivation
      </a>
    </div>

    <!-- Commentaires -->
    <div v-if="candidature.commentaires?.length" class="mt-4">
      <strong>Commentaires:</strong>
      <ul class="mt-2 space-y-2">
        <li
          v-for="comment in candidature.commentaires"
          :key="comment.id"
          class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md"
        >
          <p class="text-sm text-gray-800 dark:text-gray-200">
            {{ comment.contenu }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            — {{ comment.auteur }}, {{ formatDate(comment.date) }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Commentaire {
  id: number
  auteur: string
  date: string
  contenu: string
}

interface Candidature {
  id: number
  nom: string
  poste: string
  statut: string
  competences: string[]
  experience: string
  dateCandidature: string
  email: string
  telephone: string
  cv: string
  lettreMotivation: string
  salaireSouhaite: number
  disponibilite: string
  localisation: string
  commentaires?: Commentaire[]
  [key: string]: any
}

interface Props {
  candidature: Candidature
}

defineProps<Props>()

const statusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'entretien rh':
    case 'interviewing':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    case 'applied':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    case 'rejected':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }
}

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

