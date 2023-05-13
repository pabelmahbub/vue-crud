import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Students from '../views/Students/Students.vue';
import StudentCreate from '../views/Students/StudentCreate.vue';
import StudentEdit from '../views/Students/StudentEdit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/Students/Students.vue')
    },
    {
      path: '/student/create',
      name: 'studentsCreate',
      component: () => import('../views/Students/StudentCreate.vue')
    },
    {
      path: '/student/:id',
      name: 'studentsEdit',
      component: () => import('../views/Students/StudentEdit.vue')
    }
  ]
})

export default router