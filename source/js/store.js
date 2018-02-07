import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// State is accessed using this.$store.state.count

const state = {
  count: 0
}

// Mutations called using this.$store.commit('increment') are synchronous

const mutations = {
  increment(state, n) {
    state.count += n || 1
  }
}

// Actions called using this.$store.dispatch('increment') can be asynchronous

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 200)
  }
}


const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store