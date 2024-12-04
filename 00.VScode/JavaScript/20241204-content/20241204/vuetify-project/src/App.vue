<template>
  <VApp>
    <VAppBar>
      <VContainer class="d-flex align-center">
        <VAppBarTitle>VUETIFY</VAppBarTitle>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/test">測試頁</v-btn>
      </VContainer>
    </VAppBar>
    <VMain>
      <RouterView></RouterView>
    </VMain>
  </VApp>
</template>
