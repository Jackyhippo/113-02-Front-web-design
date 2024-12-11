<template>
  <RouterLink to="/yangmingshan">YangMingShan</RouterLink>
  <router-link :to="{ name: 'home' }" replace>Home</router-link>
  <table id="menu">
    <template v-for="(link, i) in links" :key="i">
      <tr>
        <td>
          <RouterLink :to="link.to">
            <img :src="link.image" />
          </RouterLink>
        </td>
      </tr>
      <tr>
        <td class="a">&nbsp;</td>
      </tr>
    </template>
  </table>
</template>

<script setup>
const links = [
  { to: '/yangmingshan', image: new URL('@/assets/park0302.jpg', import.meta.url).href },
  { to: '/sheipa', image: new URL('@/assets/park0303.jpg', import.meta.url).href },
  { to: '/', image: new URL('@/assets/park0304.jpg', import.meta.url).href },
  { to: '/', image: new URL('@/assets/park0305.jpg', import.meta.url).href },
]
</script>

<style scoped lang="sass">
#menu
  width: 100%
  text-align: center

  img
    width: 120px
    height: 40px

    &:hover
      filter: hue-rotate(120deg)
</style>
