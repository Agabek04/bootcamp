<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img4.jpg";
const images = [
  {
    image: img1,
    name: "Knitted Joggers",
  },
  {
    image: img2,
    name: "Full Sleeve",
  },
  {
    image: img3,
    name: "Active T-Shirts",
  },
  {
    image: img4,
    name: "Urban Shirts",
  },
  {
    image: img5,
    name: "Urban Shirts",
  },
];
</script>

<template>
  <div class="flex justify-center mb-30">
    <div class="w-[1240px] h-[320px] mt-12">
      <div class="flex justify-between mb-5">
        <div class="flex">
          <div
            class="w-[6px] h-[30px] bg-purple-600 rounded-xl ml-4 mt-1"
          ></div>
          <p class="text-3xl font-semibold ml-2">Categories</p>
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
        class=""
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div
            class="flex flex-col justify-center items-center hover:bg-gray-100 rounded-xl w-[297px] h-[348px]"
          >
            <img
              :src="image.image"
              alt=""
              class="w-[262px] h-[262px] rounded-xl object-cover"
            />
            <p class="text-3xl font-normal mt-2">{{ image.name }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>


