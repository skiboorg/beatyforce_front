
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'brands', component: () => import('pages/brands.vue') },
      { path: 'brands/:slug', component: () => import('pages/brand_page.vue') },
      { path: 'contacts', component: () => import('pages/contacts.vue') },
      { path: 'partnership', component: () => import('pages/partnership.vue') },
      { path: 'press', component: () => import('pages/press.vue') },
      { path: 'privacy', component: () => import('pages/privacy.vue') },
      { path: 'catalog', component: () => import('pages/catalog.vue') },
    ]
  },
  {
    path: '/lk',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'register', component: () => import('pages/lk/register') },
      { path: 'login', component: () => import('pages/lk/login') },
      { path: 'catalog', component: () => import('pages/lk/catalog') },
      { path: 'orders',name:'lk_orders', component: () => import('pages/lk/orders') },
      { path: 'cart', component: () => import('pages/lk/cart') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
