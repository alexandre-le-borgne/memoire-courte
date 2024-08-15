const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: '/institutions', component: () => import('pages/InstitutionsPage.vue')},
      {path: 'characters/:slug', component: () => import('pages/CharacterPage.vue')},
      {path: 'search', component: () => import('pages/SearchPage.vue')},
      {path: 'about', component: () => import('pages/AboutPage.vue')}
    ]
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/'
  }
]

export default routes
