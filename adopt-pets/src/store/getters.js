export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.cats.length
  },
  getAllDogs: (state) => {
    return state.dogs.length
  }
}
