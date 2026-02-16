import { http } from './http'

export default {
  getCandidatures() {
    return http.get('/candidatures')
  },

  getById(id: number) {
    return http.get(`/candidatures/${id}`)
  },

  updateCandidature(id: number, data: any) {
    return http.patch(`/candidatures/${id}`, data)
  }
}
