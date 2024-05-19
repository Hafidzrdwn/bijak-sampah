import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Materi from '../views/Materi.vue'
import DetailMateri from '../views/DetailMateri.vue'
import Quiz from '../views/Quiz.vue'

const routes = [
  {
    path: '/',
    alias: ['/'],
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/materi',
    name: 'Materi',
    component: Materi,
    meta: {
      title: 'Daftar Materi'
    }
  },
  {
    path: '/materi/:id',
    name: 'DetailMateri',
    component: DetailMateri,
    meta: {
      title: 'Detail Materi'
    }
  },
  {
    path: '/quiz',
    alias: ['/'],
    name: 'Quiz',
    component: Quiz,
    meta: {
      title: 'Quiz'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  document.title = `BijakSampah - ${to.meta.title}`
  
  next()
})

export default router