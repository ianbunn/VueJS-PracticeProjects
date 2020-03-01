import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cats from '../views/Cats.vue'
import dogs from '../views/Dogs.vue'
import pet from '../views/Pet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: cats
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: dogs
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    component: pet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
