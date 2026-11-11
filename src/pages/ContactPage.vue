<script setup>
import { company } from '../company'
</script>

<template>
  <h1>Контакты</h1>
  <p class="muted">Служба поддержки «{{ company.brand }}». {{ company.workingHours }}.</p>

  <div class="grid">
    <div class="card contact-row">
      <span class="muted">Телефон</span>
      <strong><a :href="`tel:${company.phoneHref}`">{{ company.phone }}</a></strong>
    </div>
    <div class="card contact-row">
      <span class="muted">Электронная почта</span>
      <strong><a :href="`mailto:${company.email}`">{{ company.email }}</a></strong>
    </div>
    <div v-if="company.telegram" class="card contact-row">
      <span class="muted">Telegram</span>
      <strong>
        <a :href="`https://t.me/${company.telegram}`" target="_blank" rel="noopener">
          @{{ company.telegram }}
        </a>
      </strong>
    </div>
  </div>

  <h2 id="requisites">Реквизиты</h2>
  <table class="requisites">
    <tbody>
      <tr>
        <td>Организация</td>
        <td>{{ company.legalName }}</td>
      </tr>
      <tr>
        <td>ИНН</td>
        <td>{{ company.inn }}</td>
      </tr>
      <tr>
        <td>ОГРН</td>
        <td>{{ company.ogrn }}</td>
      </tr>
      <tr>
        <td>Юридический адрес</td>
        <td>{{ company.legalAddress }}</td>
      </tr>
    </tbody>
  </table>

  <p class="muted" style="margin-top: 24px">
    Адреса складов и часы работы смотрите в приложении «{{ company.brand }}».
  </p>
</template>
