import { ref, watch } from 'vue'
import candidatureService from '../api/candidatureService'

export function useCandidatures() {
  const candidatures = ref([])
  const loading = ref(false)
  const error = ref(null)

  const filters = ref({
    statut: '',
    poste: '',
    competences: '',
    q: '',
    _page: 1,
    _limit: 5
  })

  const totalPages = ref(1)

  const fetchCandidatures = async () => {
    loading.value = true
    error.value = null

    try {
      const { data, headers } = await candidatureService.getCandidatures(filters.value)

      candidatures.value = data

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

  watch(filters, fetchCandidatures, { deep: true })

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
