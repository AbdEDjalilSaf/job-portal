import { http } from './http'

export default {
  getCandidatures(params: any) {
    return http.get('/candidatures', { params })
  },

  getById(id: number) {
    return http.get(`/candidatures/${id}`)
  },

  updateCandidature(id: number, data: any) {
    return http.patch(`/candidatures/${id}`, data)
  }
}
