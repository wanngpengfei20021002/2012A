export default [
  {
    path: '/user',
    routes: [
      { path: '/user/login', component: './login', title: '登录' },
      { path: '/user/didaima', component: './didaima', title: '低代码' },
    ]
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      { path: '/home', component: './home', title: '首页' },
      { path: '/business', component: './business', title: 'business' },
      { path: '/form', component: './xform', title: '表单' },
      { path: '/form', component: './xform', title: '表单' },
      { path: '/login/:id', component: './login', title: '登录' },
      { path: '/login', component: './login', title: '登录' },
      { path: '/order', component: './orderManagement', title: 'order' },
    ]
  },
]
