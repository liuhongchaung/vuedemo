import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: '登录页面',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/home',
    name: '首页',
    icon: 'location',
    component: () => import('../views/Home.vue'),
    children:[
        {
          path: '/user',
          name: '用户管理',
          icon: 'location',
          showMenu: true,
          component: () => import('../views/user/User.vue'),
        },
        {
          path: '/test1',
          name: 'test1',
          icon: 'setting',
          showMenu: true,
          component: () => import('../views/Test1.vue'),
          children:[
            {
              path: '/test1',
              name: '测试1',
              icon: 'setting',
              showMenu: true,
              component: () => import('../views/Test1.vue'),
            }
          ]
        },
        {
          path: '/test2',
          name: 'test2',
          icon: 'location',
          showMenu: true,
          component: () => import('../views/Test2.vue'),
        },
        {
          path: '/test3',
          name: 'test3',
          icon: 'location',
          showMenu: true,
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
