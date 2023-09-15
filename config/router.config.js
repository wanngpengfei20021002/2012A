// export default [
//   {
//     path: '/user',
//     component: '@/layouts/B1',
//     routes: [
//       { path: '/user/login', component: './login', title: '登录' },
//     ]
//   },
//   {
//     path: '/',
//     component: '@/layouts/BasicLayout',
//     wrappers: ['@/pages/authorized'], // 路由守卫
//     routes: [
//       { path: '/home', component: './home', title: '首页' },
//       { path: '/business', component: './business', title: 'business' },
//       { path: '/form', component: './xform', title: '表单' },
//       { path: '/login/:id', component: './login', title: '登录' },
//       { path: '/login', component: './login', title: '登录' },
//       { path: '/order', component: './orderManagement', title: 'order' },
//     ]
//   },
// ]

export default [
  {
    path: '/user',
    routes: [
      { path: '/user/login', component: './login', title: '登录' },
    ]
  },
  {
    path: '/',
    component: '@/max/Layouts',
    // wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      { path: '/home', component: './home', title: '首页' },
      { path: '/tablex', component: './tablex', title: '客服信息' },
      { path: '/tab', component: './tab', title: '表格' },
      { path: '/add', component: './add', title: '表单' },
      { path: '/uploadx', component: './uploadx', title: '上传' },
      { path: '/data', component: './data', title: '上传' },
      { path: '/addx', component: './addx', title: '表单2' },
    ]
  },
]
