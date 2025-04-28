<template>
  <div class="flex justify-center mt-70">
    <div class="w-[1240px] h-[908px]">
      <div class="flex justify-center">
        <div class="w-[6px] h-[30px] bg-purple-600 rounded-xl ml-4 mt-1"></div>
        <p class="text-3xl font-semibold ml-4">Special Offers</p>
      </div>
      <div class="flex flex-wrap w-full">
        <div class="relative w-1/3 p-2">
            <img :src="img1" class="absolute object-cover">
            <div class="absolute left-8 top-16 bg-opacity-50 text-white">
                <p class="text-3xl mb-16">Raf 1234</p>
                <p class="text-[14px]">Dress up in summer vibe</p>
                <p class="text-[18px] mt-2">UPTO 50% OFF</p>
                <p class="transform rotate-90 absolute left-8 top-45 text-5xl">→</p>
                <button class="border w-[111px] h-[34px] mt-30 rounded-sm">SHOP NOW</button>
            </div>
        </div>
        <div class="w-1/3 p-2 relative">
            <img :src="img2">
            <div class="absolute right-8 top-16 bg-opacity-50 text-white flex flex-col items-end w-[153px]">
                <p class="text-3xl mb-16 ml-6">Printed     T-Shirt</p>
                <p class="text-[14px]">Dress up in summer vibe</p>
                <p class="text-[18px] mt-2">UPTO 50% OFF</p>
                <p class="transform rotate-90 absolute left-8 top-45 text-5xl">→</p>
                <button class="border w-[111px] h-[34px] mt-30 rounded-sm">SHOP NOW</button>
            </div>
        </div>
        <div class="w-1/3 p-2">
            <img :src="img3">
        </div>
        <div class="w-1/2 p-2">
            <img :src="img4">
        </div>
        <div class="w-1/2 p-2">
            <img :src="img5">
        </div>
       
       
      </div>
      

    </div>
  </div>
</template>

<script>
import img1 from '../assets/images/img5.png'
import img2 from '../assets/images/img6.png'
import img3 from '../assets/images/img7.png'
import img4 from '../assets/images/img8.png'
import img5 from '../assets/images/img9.png'
export default {
  setup() {
    return{
        img1,img2,img3,img4,img5
    }
  },
};
</script>