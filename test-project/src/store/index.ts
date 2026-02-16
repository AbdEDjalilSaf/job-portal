import { createStore } from 'vuex'
import candidatureService from '../api/candidatureService'

interface State {
  items: any[]
  current: any | null
  loading: boolean
  isMobileMenuOpen: boolean
  error: string | null
  pagination: {
    page: number
    limit: number
    total: number
  }
  filters: {
    statut: string
    search: string
  }
}

// Create a new store instance
const store = createStore<State>({
  state: () => ({
    items: [],
    current: null,
    loading: false,
    error: null,
    isMobileMenuOpen: false,
    pagination: {
      page: 1,
      limit: 10,
      total: 0
    },
    filters: {
      statut: '',
      search: ''
    }
  }),

  
  mutations: {
    SET_LOADING(state: State, value: boolean) {
      state.loading = value
    },
 
    TOGGLE_MOBILE_MENU(state: State) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    SET_ERROR(state: State, error: string | null) {
      state.error = error
    },
    SET_ITEMS(state: State, items: any[]) {
      state.items = items
    },
    SET_TOTAL(state: State, total: number) {
      state.pagination.total = total
    },
    SET_CURRENT(state: State, candidature: any) {
      state.current = candidature
    },
    UPDATE_STATUS(state: State, { id, statut }: { id: any; statut: any }) {
      const item = state.items.find((c: any) => c.id === id)
      if (item) item.statut = statut
    }
  },
  
  actions: {
    async fetchCandidatures({ commit, state }: { commit: any; state: State }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)

      try {
        const params = {
          _page: state.pagination.page,
          _limit: state.pagination.limit,
          statut: state.filters.statut,
          q: state.filters.search
        }

        const response = await candidatureService.getCandidatures(params)

        commit('SET_ITEMS', response.data)
        commit('SET_TOTAL', response.headers['x-total-count'])
      } catch (error) {
        commit('SET_ERROR', 'Erreur lors du chargement')
      } finally {
        commit('SET_LOADING', false)
      }
    },

    toggleMobileMenu({ commit }: { commit: any }) {
      commit('TOGGLE_MOBILE_MENU');
    },
    async updateStatus({ commit }: { commit: any }, { id, statut }: { id: any; statut: any }) {
      // Optimistic update
      commit('UPDATE_STATUS', { id, statut })

      try {
        await candidatureService.updateCandidature(id, { statut })
      } catch (error) {
        commit('SET_ERROR', 'Erreur mise à jour')
      }
    }
  },
  
  getters: {
    totalPages(state: State) {
      return Math.ceil(state.pagination.total / state.pagination.limit)
    },

  }

})

export default store
