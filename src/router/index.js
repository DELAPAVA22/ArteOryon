import { createRouter, createWebHistory } from 'vue-router'

// Importación dinámica de vistas para mejorar el rendimiento
const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // Carga dinámica de HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView, // Carga dinámica de AboutView
    },
  ],
})

export default router
