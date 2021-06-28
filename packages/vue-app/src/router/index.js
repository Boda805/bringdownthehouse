import { createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import WhitePaper from '../views/WhitePaper.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/WhitePaper',
    name: 'WhitePaper',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WhitePaper //() => import(/* webpackChunkName: "about" */ '../views/WhitePaper.vue')
  }
]
const router = createRouter({
  
  routes
})
export default router