<template>
  <div id="update">最近更新日期：{{ date }}</div>
</template>

<script setup>
const date = new Date().toLocaleDateString()
</script>

<style scoped lang="sass">
#update
  width: 215px
  height: 25px
  font-family: "標楷體"
  font-size: 16px
  color: #000
  text-align: center
</style>
