import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import TermsPage from './pages/TermsPage.vue'
import HelpPage from './pages/HelpPage.vue'
import ContactPage from './pages/ContactPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Складбери' } },
  { path: '/privacy', component: PrivacyPage, meta: { title: 'Политика конфиденциальности' } },
  { path: '/terms', component: TermsPage, meta: { title: 'Условия использования' } },
  { path: '/help', component: HelpPage, meta: { title: 'Помощь' } },
  { path: '/contact', component: ContactPage, meta: { title: 'Контакты' } },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, meta: { title: 'Страница не найдена' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    // Anchors from the app (/terms#autopay) are rendered after navigation.
    if (to.hash) {
      return new Promise((resolve) =>
        setTimeout(() => resolve({ el: to.hash, top: 88, behavior: 'smooth' }), 50),
      )
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title
  document.title = title === 'Складбери' ? title : `${title} — Складбери`
})

export default router
