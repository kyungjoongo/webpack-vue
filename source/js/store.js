import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  testBoolean: true
}

const mutations = {
  toggleTestBoolean(state) {
    state.testBoolean = !state.testBoolean
  }
}

const actions = {
  // example...
  // incrementAsync({ commit }) {
  //   setTimeout(() => {
  //     commit('INCREMENT')
  //   }, 200)
  // }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store