<template>
  <h1>YangMingShan</h1>
  <h2>name: {{ $route.name }}</h2>
  <h2>path: {{ $route.path }}</h2>
  <h2>apple: {{ $route.meta.apple }}</h2>
  <input type="button" value="顯示路由資訊" @click="showInfo" />
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const showInfo = () => {
  console.log(route.name)
  console.log(route.path)
  console.log(route.meta.apple)
}
</script>

<!--
<script>
export default {
  methods: {
    showInfo() {
      console.log(this.$route.name)
      console.log(this.$route.path)
      console.log(this.$route.meta.apple)
    },
  },
}
</script>
-->
