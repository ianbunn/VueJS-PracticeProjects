export default {
  // `commit` comes from vuex
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
