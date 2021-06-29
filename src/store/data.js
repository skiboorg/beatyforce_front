import { api } from 'boot/axios'

const state = () => ({
  banners:[],
  videos:[],


})

const mutations = {
  updateBanners(state,data){
    state.banners = data
  },
  updateVideos(state,data){
    state.videos = data
  },

}

const actions = {

  async fetchBanners({commit}) {
    const response = await api.get('/api/brand/banners')
    commit('updateBanners', response.data)

  },
  async fetchVideos({commit}) {
    const response = await api.get('/api/brand/videos')
    commit('updateVideos', response.data)

  },
}

export const getters = {
  banners: (state) => state.banners,
  videos: (state) => state.videos,

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
