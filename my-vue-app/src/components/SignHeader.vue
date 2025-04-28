<template>
  <div class="grid grid-cols-2 border-b border-gray-300 ml-0">
    <div class="flex justify-center gap-30 m-4">
      <p class="text-3xl">Euphoria</p>
      <div class="relative w-40">
        <!-- Search Icon -->
        <div
          class="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center"
        >
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>

        <!-- Input Field -->
        <input
          type="text"
          placeholder="Search"
          class="w-44 h-12 pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div class="flex justify-around gap-20 m-4 mr-10">
      <select class="font-bold">
        <option>English (united states)</option>
        <option>Russian</option>
        <option>Turkmen</option>
      </select>
      <div class="flex justify-around gap-10 mr-10">

          <button
            :class="{'bg-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg w-34 h-12':isTrue, 'border border-purple-600 hover:bg-purple-400 text-purple-600 font-bold py-2 px-4 rounded-lg w-34 h-12':!isTrue}"
            @click="signINPAge"
          >
            Login
          </button>
          <button
          :class="{'bg-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg w-34 h-12':istrue, 'border border-purple-600 hover:bg-purple-400 text-purple-600 font-bold py-2 px-4 rounded-lg w-34 h-12':!istrue}"
            @click="signUpPAge"
          >
            Sign Up
          </button>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "SignHeader",
  props:['isTrue','istrue','isActive'],
  setup(props) {
    console.log(props)
    const router=useRouter()
    const signUpPAge=()=>{
      router.push('/signup')
    }
    const signINPAge=()=>{
      router.push('/signin')
    }

    return{signUpPAge, signINPAge}
  },
};
</script>