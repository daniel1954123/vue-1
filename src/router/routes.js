
const routes = [
  {
    path: '/',
    component: () => import('app/vue-1/src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('app/vue-1/src/pages') }
    ]
  },
  {
    path:'/birth',
    component: () =>import('../components/birthday'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('app/vue-1/src/pages/Error404.vue')
  }
]

export default routes
