import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
 /* {
    path: '/home',
    name: 'home',
    component: Home
  },*/
  {
    path: '/home',
    name: '首页',
    component: () => import('../views/Home.vue'),
    children:[
        {
          path: '/test1',
          name: 'test1',
          component: () => import('../views/Test1.vue'),
        },
      {
          path: '/test2',
          name: 'test2',
          component: () => import('../views/Test2.vue'),
        },

    ]
  },
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/login',
    name: '登录页面',
    component: () => import('../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
