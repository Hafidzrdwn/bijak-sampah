import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    alias: ['/'],
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  document.title = `BijakSampah - ${to.meta.title}`
  
  next()
})

export default router