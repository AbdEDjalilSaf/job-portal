import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useCandidatureDetails(id: string) {
  const candidature = ref(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchCandidature = async () => {
    try {
      loading.value = true
      const { data } = await axios.get(
        `http://localhost:3000/candidatures/${id}`
      )
      candidature.value = data
    } catch (err: any) {
      error.value = 'Failed to load candidature.'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchCandidature)

  return {
    candidature,
    loading,
    error
  }
}
