import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import BusinessView from '../views/BusinessView.vue'
import PricingView from '../views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView
    },
    {
      path: '/business/:id',
      name: 'business',
      component: BusinessView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    }
  ]
})

export default router
