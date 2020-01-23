import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    snackbar: {
      show: false,
      variant: 'success',
      message: 'Success! Item added to the cart.'
    },
    cart: [] // { itemId, quantity }
  },
  mutations: {
    addItemToCart(state, payload) {
      const { itemId, quantity } = payload
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId
      })
      if (idx === -1) {
        state.cart.push({ itemId, quantity })
      } else {
        state.cart[idx].quantity += 1
      }
    },
    updateSnackbar(state, settings) {
      state.snackbar = {
        ...state.snackbar,
        ...settings
      }
    }
  },
  actions: {}
})
