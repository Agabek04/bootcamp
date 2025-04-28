<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/images/banner.jpg";
import img2 from "../assets/images/loginPage.png";
import img3 from "../assets/images/signUp.png";
const images = [img1, img2, img3];
</script>

<template>
  <Swiper
    :modules="[Navigation, Pagination]"
    navigation
    pagination
    loop
    class="w-full"
  >
    <SwiperSlide
      v-for="(image, index) in images"
      :key="index"
      class="flex items-center justify-center"
    >
      <div class="relative">
        <img :src="image" alt="" class="w-full opacity-30 h-[716px]" />
        <img
          :src="image"
          alt=""
          class="absolute left-40 top-20 w-[1196px] h-[544px] object-cover"
        />
        <div
          class="absolute left-240 top-30 grid grid-cols-1 gap-0 bg-opacity-50 w-[439px] h-[455px]"
        >
          <p class="text-orange-200 font-bold text-3xl flex items-end">
            Düýpbaha
          </p>
          <p class="text-white text-7xl grid grid-cols-1">
            <span>First-rate</span> <span>products</span>
          </p>
          <p class="text-rose-200 text-3xl">cool / colorful / convenient</p>
          <button class="bg-white w-[248px] h-[63px] rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
