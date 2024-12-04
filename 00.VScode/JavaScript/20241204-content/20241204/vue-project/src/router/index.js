import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SheiPaView from '@/views/SheiPaView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // 開個放路由的資料，名字自己取
      meta: {
        apple: '首頁',
      },
    },
    {
      path: '/yangmingshan',
      name: 'yangmingshan',
      component: () => import('@/views/YangMingShanView.vue'),
      meta: {
        apple: '陽明山',
      },
    },
    {
      path: '/sheipa',
      name: '雪霸國家公園',
      component: SheiPaView,
      meta: {
        apple: '雪霸',
      },
    },
  ],
})

// router.beforeEach(() => {})

// 進到每一頁後執行
// to = 目標路由
// from = 來源路由
router.afterEach((to, from) => {
  document.title = to.meta.apple + '| 國家公園介紹網'
})

export default router
