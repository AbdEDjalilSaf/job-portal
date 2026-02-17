import { ref, watch } from 'vue'
import candidatureService from '../api/candidatureService'

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
  company: string
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

export function useCandidatures() {
  const candidatures = ref<Candidature[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  let debounceTimer: any

  const filters = ref({
    statut: '',
    poste: '',
    competences: '',
    q: '',
    _page: 1,
    _limit: 4
  })

  const totalPages = ref(1)

  const fetchCandidatures = async () => {
    loading.value = true
    error.value = null

    try {
      const { data, headers } = await candidatureService.getCandidatures()
      console.log('data ============', data, headers)
      candidatures.value = Array.isArray(data) ? data : []
      
      const total = headers['x-total-count']
      if (total) {
        totalPages.value = Math.ceil(total / filters.value._limit)
      }

    } catch (err: any) {
      error.value = err.message || 'Something went wrong'
    } finally {
      loading.value = false
    }
  }

watch(
    filters,
    (newFilters, oldFilters) => {
      clearTimeout(debounceTimer)

      // Reset page when search/filter changes (not when clicking pagination)
      if (
        newFilters.q !== oldFilters?.q ||
        newFilters.statut !== oldFilters?.statut ||
        newFilters.poste !== oldFilters?.poste ||
        newFilters.competences !== oldFilters?.competences
      ) {
        filters.value._page = 1
      }

      debounceTimer = setTimeout(() => {
        fetchCandidatures()
      }, 400)
    },
    { deep: true }
  )

//   watch(filters, fetchCandidatures, { deep: true })

  fetchCandidatures()


  
  return {
    candidatures,
    loading,
    error,
    filters,
    totalPages,
    fetchCandidatures
  }
}
