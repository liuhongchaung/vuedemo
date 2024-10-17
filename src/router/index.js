import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: '登录页面',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/user',
    name: '用户管理',
    component: () => import('../views/Home.vue'),
    showMenu:true,
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
        {
          path: '/test3',
          name: 'test3',
          component: () => import('../views/Test3.vue'),
        },

    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
