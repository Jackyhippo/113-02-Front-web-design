<template>
  <TopImage></TopImage>
  <div id="left">
    <LeftMenu></LeftMenu>
  </div>
  <div id="right">
    <RightMarquee></RightMarquee>
    <div id="view">
      <RouterView></RouterView>
    </div>
  </div>
  <BottomFooter></BottomFooter>
</template>

<style lang="sass">
#app
  width: 1024px
  height: 768px
  margin: auto
</style>

<style scoped lang="sass">
#left
  width: 200px
  height: calc(768px - 65px - 20px)
  margin-left: 12px
  float: left
  background: #00FFFF

#right
    width: 800px
    height: calc(768px - 65px - 20px)
    float: right
    margin-right: 12px

#view
  width: 800px
  height: calc(768px - 65px - 29px - 20px)
</style>

<script setup>
import TopImage from '@/components/TopImage.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import RightMarquee from '@/components/RightMarquee.vue'
import BottomFooter from '@/components/BottomFooter.vue'
</script>
