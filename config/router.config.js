export default [
  {
    path: '/user',
    routes: [
      { path: '/user/login', component: './login', title: '登录' },
    ]
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      { path: '/home', component: './home', title: '首页' },
      { path: '/form', component: './xform', title: '表单' },
    ]
  },
]
