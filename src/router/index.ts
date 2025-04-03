import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
=======
import BusinessView from '../views/BusinessView.vue'
>>>>>>> dev

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path:"/register",
      name:"register",
      component: RegisterView,
=======
      path: '/business/:id',
      name: 'business',
      component: BusinessView
>>>>>>> dev
    }
  ],
})

export default router
