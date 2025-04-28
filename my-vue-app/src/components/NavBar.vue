<template>
  <div>
    <div class="flex justify-between">
      <img
        src="../assets/images/logo.png"
        class="w-[223px] h-[64px] ml-6 mt-8 mb-3"
      />
      <div class="flex mt-9 ml-100">
        <div class="relative mr-4">
          <div
            class="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center mb-6"
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

          <input
            type="text"
            placeholder="Search"
            class="w-[386px] h-[42px] pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          class="bg-gray-100 rounded-lg w-[42px] h-[42px] flex items-center justify-center mr-4"
          @click="clicked"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>

        <button
          class="bg-gray-100 rounded-lg w-[42px] h-[42px] flex items-center justify-center mr-4"
          @click="clicked"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A11.954 11.954 0 0112 15c2.21 0 4.288.635 6.004 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>

        <button
          class="bg-gray-100 rounded-lg w-[42px] h-[42px] flex items-center justify-center mr-12"
          @click="clicked"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
      <div class="flex">
        <button
          class="flex justify-center flex-wrap mt-5 w-[69px] h-[80px] mr-3"
          @click="clicked"
        >
          <img src="../assets/images/eng.png" class="w-[39px] h-[39px]" />
          <p>English</p>
        </button>
        <button
          class="flex justify-center flex-wrap mt-5 w-[69px] h-[80px] mr-3"
          @click="clicked"
        >
          <img src="../assets/images/tm.png" class="w-[39px] h-[39px]" />
          <p>Turkmen</p>
        </button>
        <button
          class="flex justify-center flex-wrap mt-5 w-[69px] h-[80px] mr-10"
          @click="clicked"
        >
          <img src="../assets/images/ru.png" class="w-[39px] h-[39px]" />
          <p>Russian</p>
        </button>
      </div>
    </div>
    <div
      class="border border-gray-300 h-[60px] flex justify-center items-center"
    >
      <nav
        class="w-[550px] h-[40px] flex justify-between items-center text-2xl"
      >
        <router-link to="/">Main</router-link>
        <router-link to="/brands">Brands</router-link>
        <router-link to="/shops">Shops</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  setup() {
    const clicked = () => {
      console.log("clicked");
    };

    return { clicked };
  },
};
</script>

