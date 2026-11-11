<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { company } from './company'

const links = [
  { to: '/privacy', label: 'Конфиденциальность' },
  { to: '/terms', label: 'Условия' },
  { to: '/help', label: 'Помощь' },
  { to: '/contact', label: 'Контакты' },
]

const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => (menuOpen.value = false))

const year = new Date().getFullYear()
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="brand">
        <img src="/logo.png" alt="" width="36" height="36" />
        <span>{{ company.brand }}</span>
      </RouterLink>
      <button
        class="menu-btn"
        :aria-expanded="menuOpen"
        aria-label="Меню"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
      <nav class="nav" :class="{ 'nav--open': menuOpen }">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="nav__link">
          {{ l.label }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="container main">
    <RouterView />
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <div class="footer__brand">{{ company.brand }}</div>
        <div class="muted">{{ company.legalName }}, ИНН {{ company.inn }}</div>
      </div>
      <nav class="footer__nav">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
      </nav>
      <div class="muted">© {{ year }} {{ company.brand }}</div>
    </div>
  </footer>
</template>
