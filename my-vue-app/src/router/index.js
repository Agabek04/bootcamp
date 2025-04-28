import { createRouter, createWebHistory } from 'vue-router'
import SignIN from '../components/LoginPage.vue'
import SignUP from '../components/SignUpPage.vue'
import HomeView from '../views/HomeView.vue'
import ResetPassword from '../components/ResetPassword.vue'
import CheckEmail from '../components/CheckEmail.vue'
import Verification from '../components/Verification.vue'
import CreateNewpass from '../components/CreateNewpass.vue'
import Brands from '../views/Brands.vue'
import About from '../views/About.vue'
import Shops from '../views/Shops.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUP,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIN,
  },
  {
    path: '/resetpass',
    name: 'resetpass',
    component: ResetPassword,
  },
  {
    path: '/checkemail',
    name: 'checkemail',
    component: CheckEmail
  },
  {
    path: '/verification',
    name: 'verification',
    component: Verification
  },
  {
    path: '/newpass',
    name: 'newpass',
    component: CreateNewpass
  },
  {
    path: '/brands',
    name: 'brands',
    component:Brands
  },
  {
    path: '/shops',
    name: 'shops',
    component:Shops
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contact
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
})

export default router
