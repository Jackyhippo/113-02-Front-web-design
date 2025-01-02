<template>
  <v-app-bar>
    <v-container class="d-flex alaign-center">
      <v-btn to="/" :active="false">購物網站</v-btn>
      <v-spacer />
      <v-btn v-for="nav of navs" :key="nav.to" :to="nav.to" :prepend-icon="nav.icon">
        {{ nav.text }}
      </v-btn>
    </v-container>
  </v-app-bar>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 導覽列項目
const navs = computed(() => {
  return [
    { to: '/register', text: t('nav.register'), icon: 'mdi-account-plus' },
    { to: '/login', text: t('nav.login'), icon: 'mdi-account-arrow-left' },
  ]
})
</script>
