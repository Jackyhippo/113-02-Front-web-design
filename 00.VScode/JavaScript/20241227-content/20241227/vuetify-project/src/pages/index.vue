<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-col v-for="product of filteredProducts" :key="product._id" cols="12" md="6" lg="3">
        <product-card v-bind="product"></product-card>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAxios } from '@/composables/axios'
import ProductCard from '@/components/ProductCard.vue'

const { api } = useAxios()

// 一頁要放幾個卡片
const ITEMS_PER_PAGE = 3
const currentPage = ref(1)
const totalPage = computed(() => Math.ceil(products.value.length / ITEMS_PER_PAGE))

const products = ref([])
const search = ref('')
const filteredProducts = computed(() => {
  return products.value
    .filter(product => product.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
    // 一頁 2 筆
    // 第 1 頁 = 0 ~ 1
    // 第 2 頁 = 2 ~ 3
    // 第 3 頁 = 4 ~ 5
    // .slice(開始索引, 結束索引)
    // 不包含結束索引
    .slice((currentPage.value - 1) * ITEMS_PER_PAGE, currentPage.value * ITEMS_PER_PAGE)
})

const getProducts = async () => {
  try {
    const { data } = await api.get('/product')
    products.value.push(...data.result)
  } catch (error) {
    console.log(error)
  }
}
getProducts()
</script>

<route lang="yaml">
  meta:
    login: false
    admin: false
    title: 'nav.home'
  </route>
