import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User/index.vue'),
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/User/Profile.vue')
      }
    ]
  },
  {
    path: '/charts/bar',
    name: 'Bar',
    component: () => import('../views/charts/SimpleBar.vue')
  },
  {
    path: '/charts/appUseOverviewBar',
    name: 'Bar',
    component: () => import('../views/charts/appUseOverviewBar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router