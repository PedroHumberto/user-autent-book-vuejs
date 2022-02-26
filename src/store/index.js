import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {id: 0, name: '', email: '' }
  },
  getters: {
  },
  mutations: {
    LOGIN: (state, { id, name, email }) => {
      state.user = { id, name, email }
    },
  },
  actions: {
    logUser(context, { id, name, email}){
      context.commit('LOGIN', { id, name, email})
    }
  },
  modules: {
  }
})
