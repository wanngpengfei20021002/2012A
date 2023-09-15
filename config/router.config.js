export default [
  {
    path: '/user',
    routes: [
      { path: '/user/login', component: './login', title: '登录' },
    ]
  },
  // 路由前端给后台
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      { path: '/home', component: './home', title: '首页' },
      { path: '/list', component: './list', title: '表单' },
      { path: '/add', component: './add', title: '表格' },
      { path: '/day1', component: './day1', title: '表单' },
      { path: '/cars', component: './cars', title: '卡片' },
      { path: '/xq/:id', component: './xq', title: '详情' },
    ],
  },
]
