<script setup>
const sections = [
  {
    to: '/privacy',
    title: 'Политика конфиденциальности',
    text: 'Какие данные мы собираем, зачем и как их защищаем.',
  },
  {
    to: '/terms',
    title: 'Условия использования',
    text: 'Правила сервиса, аренда боксов, оплата и автоплатёж.',
  },
  {
    to: '/help',
    title: 'Помощь',
    text: 'Ответы на частые вопросы и удаление аккаунта.',
  },
  {
    to: '/contact',
    title: 'Контакты',
    text: 'Как связаться со службой поддержки.',
  },
]
</script>

<template>
  <h1>Складбери</h1>
  <p class="muted">
    Аренда складских боксов: выберите бокс на карте, оформите аренду и пользуйтесь им через
    мобильное приложение.
  </p>

  <div class="grid">
    <RouterLink v-for="s in sections" :key="s.to" :to="s.to" class="card card-link">
      <h3>{{ s.title }}</h3>
      <p>{{ s.text }}</p>
    </RouterLink>
  </div>
</template>
