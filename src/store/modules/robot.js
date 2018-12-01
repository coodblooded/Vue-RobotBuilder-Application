import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null
  },
  mutations: {
    addRobotToCart (state, robot) {
      state.cart.push(robot)
    },
    updateParts (state, parts) {
      state.parts = parts
    }
  },
  actions: {
    getParts ({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error)
    },
    addTocart ({ commit, state }, robot) {
      const cart = [...state.cart, robot]
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
        .catch(console.error)
    }
  },
  getters: {
    cartOnSale (state) {
      return state.cart.filter(data => data.heads.onSale)
    }
  }
}
