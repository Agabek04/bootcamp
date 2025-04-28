<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/images/raf.jpg";
import imgnew from "../assets/images/new.png";
import rectangle from "../assets/images/rectangle.png";
const images = [img1, img1, img1, img1, img1, img1];
</script>

<template>
  <div class="flex justify-center mb-30">
    <div class="w-[1240px] h-[320px] mt-12">
      <div class="flex justify-between mb-5">
        <div class="flex">
          <div class="w-[6px] h-[30px] bg-blue-400 rounded-xl ml-4 mt-1"></div>
          <p class="text-3xl font-semibold ml-2">Last Products</p>
        </div>
        <button class="text-2xl mr-4 font-semibold">
          View All <Span class="text-4xl">→ </Span>
        </button>
      </div>
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="4"
        :space-between="1"
        navigation
        loop
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div
            class="relative flex flex-col items-center border border-blue-300 shadow-xl rounded-xl w-[294px] h-[450px] mb-30 ml-2"
          >
            <img
              :src="imgnew"
              alt=""
              class="absolute left-0 top-0 w-[100px] h-[100px]"
            />
            <img
              :src="image"
              alt=""
              class="w-[245px] h-[238px] rounded-xl object-cover"
            />
            <div class="h-0 w-[239px] border border-blue-300 shadow-2xl"></div>

            <p class="text-3xl font-semibold mt-2">Raf ütük R-1234</p>
            <p class="text-3xl font-semibold text-green-500">158 TMT</p>
            <div
              class="h-0 w-[137px] border border-blue-300 shadow-2xl mt-2"
            ></div>
            <button class=" relative w-[234px] h-[42px]">
              <img :src="rectangle" alt="" class="object-cover absolute"/>
              <div class=" absolute flex justify-around text-white font-bold bg-opacity-50 right-20 top-7 text-xl">
                <p >Sebede goş</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8 absolute left-30 top-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>


