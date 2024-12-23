<template>
  <v-app>
    <v-main>
      <!-- <router-view /> -->
      <swiper
        class="mySwiper"
        :navigation="true"
        :modules="modules"
        :pagination="{
          dynamicBullets: true,
        }"
      >
        <swiper-slide v-for="(item, index) of imgArray" :key="index">
          <img :src="item" />
        </swiper-slide>
      </swiper>
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive } from "vue";
// 引入 swiper
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入功能模組
import { Navigation, Pagination } from "swiper/modules";
// swiper 樣式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imgArray = reactive([
  "https://picsum.photos/800/500/?random=1",
  "https://picsum.photos/800/500/?random=2",
  "https://picsum.photos/800/500/?random=3",
  "https://picsum.photos/800/500/?random=4",
  "https://picsum.photos/800/500/?random=5",
  "https://picsum.photos/800/500/?random=6",
  "https://picsum.photos/800/500/?random=7",
  "https://picsum.photos/800/500/?random=8",
  "https://picsum.photos/800/500/?random=9",
]);
const modules = [Navigation, Pagination];
</script>

<style>
.mySwiper {
  width: 800px;
  height: 500px;
}
</style>
