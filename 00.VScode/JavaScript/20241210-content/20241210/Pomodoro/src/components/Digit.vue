<template>
  <svg
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="408.165px"
    height="796.007px"
    viewBox="0 0 408.165 796.007"
    enable-background="new 0 0 408.165 796.007"
    xml:space="preserve"
  >
    <path
      :class="{ active: '02356789'.includes(data) }"
      class="digit-a"
      fill="#E60012"
      d="M387.842,10.162c0,5.612-4.551,10.162-10.162,10.162H30.485c-5.613,0-10.162-4.55-10.162-10.162l0,0
		C20.323,4.55,24.873,0,30.485,0H377.68C383.291,0,387.842,4.55,387.842,10.162L387.842,10.162z"
    />
    <path
      :class="{ active: '045689'.includes(data) }"
      class="digit-b"
      fill="#E60012"
      d="M10.161,387.842C4.549,387.842,0,383.291,0,377.68V30.485c0-5.612,4.549-10.161,10.161-10.161l0,0
		c5.612,0,10.162,4.549,10.162,10.161V377.68C20.323,383.291,15.773,387.842,10.161,387.842L10.161,387.842z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      class="digit-c"
      fill="#E60012"
      d="M10.161,775.685C4.549,775.685,0,771.134,0,765.522V418.327c0-5.611,4.549-10.162,10.161-10.162l0,0
		c5.612,0,10.162,4.551,10.162,10.162v347.195C20.323,771.134,15.773,775.685,10.161,775.685L10.161,775.685z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      class="digit-d"
      fill="#E60012"
      d="M398.003,387.842c-5.613,0-10.161-4.551-10.161-10.162V30.485c0-5.612,4.548-10.161,10.161-10.161l0,0
		c5.612,0,10.162,4.549,10.162,10.161V377.68C408.165,383.291,403.615,387.842,398.003,387.842L398.003,387.842z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      class="digit-e"
      fill="#E60012"
      d="M398.003,775.685c-5.613,0-10.161-4.551-10.161-10.162V418.327c0-5.611,4.548-10.162,10.161-10.162l0,0
		c5.612,0,10.162,4.551,10.162,10.162v347.195C408.165,771.134,403.615,775.685,398.003,775.685L398.003,775.685z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      class="digit-f"
      fill="#E60012"
      d="M387.842,398.004c0,5.611-4.551,10.161-10.162,10.161H30.485c-5.613,0-10.162-4.55-10.162-10.161l0,0
		c0-5.612,4.549-10.162,10.162-10.162H377.68C383.291,387.842,387.842,392.392,387.842,398.004L387.842,398.004z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      class="digit-g"
      fill="#E60012"
      d="M387.842,785.845c0,5.613-4.551,10.162-10.162,10.162H30.485c-5.613,0-10.162-4.549-10.162-10.162l0,0
		c0-5.611,4.549-10.16,10.162-10.16H377.68C383.291,775.685,387.842,780.233,387.842,785.845L387.842,785.845z"
    />
    <circle :class="{ active: data === ':' }" fill="#E60012" cx="204.083" cy="204.083" r="41.998" />
    <circle :class="{ active: data === ':' }" fill="#E60012" cx="204.083" cy="591.925" r="41.998" />
  </svg>
</template>

<script setup>
// 定義digit元件要接收那些資料
defineProps({
  data: {
    type: String,
    default() {
      return ''
    },
  },
  // 字要呈現什麼顏色
  color: {
    type: String,
    default() {
      return 'white'
    },
  },
})
</script>

<style scoped lang="sass">
.digit
  width: 100px
  height: 200px
  margin: 7px
path, circle
  // fill => svg的填滿，預設為透明
  fill: transparent
  // 變成傳入的顏色
  &.active
    // v-bind 把 CSS 的值和 Vue 的變數綁定
    fill: v-bind(color)
</style>
