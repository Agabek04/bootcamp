<template>
  <div>
    <SignHeader :istrue="istrue"/>
    <div class="grid grid-cols-2">
      <div class="w-[695px] h-[956px]">
        <img src="../assets/images/signUp.png" />
      </div>
      <div class="rounded-lg m-20 w-[597px] h-[804px]">
        <h2 class="text-2xl font-bold mb-1">Sign Up</h2>
        <p class="text-sm text-gray-500 mb-10">
          Sign up for free to access to in any of our products
        </p>

        <button
          class="w-full flex items-center justify-center gap-2 bg-white border rounded-lg py-2 mb-3 hover:bg-gray-50"
        >
        <svg
                  class="w-4 h-4"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.4H272v95.3h146.9c-6.3 33.9-25.1 62.6-53.4 82v68.1h86.3c50.5-46.5 81.7-115 81.7-195z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272 544.3c72.7 0 133.7-24 178.3-65.1l-86.3-68.1c-24 16.1-54.6 25.7-92 25.7-70.6 0-130.4-47.7-151.8-111.6h-89.5v69.9c44.4 88.1 135.8 149.2 241.3 149.2z"
                    fill="#34a853"
                  />
                  <path
                    d="M120.2 325.2c-10.1-30-10.1-62.2 0-92.2V163.1H30.7c-43.7 85.3-43.7 186.2 0 271.5l89.5-69.4z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272 107.7c39.5 0 75 13.6 102.9 40.3l77.1-77.1C405.5 24 344.5 0 272 0 166.5 0 75.1 61.1 30.7 149.2l89.5 69.9C141.6 155.4 201.4 107.7 272 107.7z"
                    fill="#ea4335"
                  />
                </svg>
          <span class="text-sm text-purple-600 font-medium m-1"
            >Continue With Google</span
          >
        </button>

        <button
          class="w-full flex items-center justify-center gap-2 text-blue-400 bg-white border border-gray-600 rounded-lg py-2 mb-10 hover:bg-gray-50"
        >
        <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1 4.48 4.48 0 00-7.63 4.1A12.72 12.72 0 013 2.15a4.48 4.48 0 001.38 5.96A4.4 4.4 0 012 7.09v.06a4.48 4.48 0 003.6 4.4 4.48 4.48 0 01-2.02.08 4.48 4.48 0 004.18 3.1A9 9 0 012 19.54a12.72 12.72 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78l-.01-.58A9.22 9.22 0 0023 3z"
                  />
                </svg>
          <span class="text-sm text-purple-600 font-medium m-1"
            >Continue With Twitter</span
          >
        </button>
        <form>
          <div class=" mb-6">

            <label class="block text-sm font-medium mb-1" for="email"
              >Email Address</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full border rounded-lg px-3 py-2 text-sm"
            />
            <p v-if="error" class="text-red-600 text-xs mt-1">Error</p>
          </div>
        
  
          <div class="mb-6 relative">
            <label class="block text-sm font-medium mb-1" for="password"
              >Password</label
            > <button
              type="button"
              class="absolute right-1 top-0 inline-flex gap-2 text-gray-400 text-sm"
              @click="showPassword = !showPassword"
            >
            <component
      :is="showPassword ? EyeSlashIcon  : EyeIcon"
      class="w-5 h-5"
      
    />
    <span >{{ showPassword ? ' Hide' : ' Show' }}</span>
            </button>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full border rounded-lg px-3 py-2 text-sm pr-10"
              placeholder=""
            />
            
            <p class="text-xs text-gray-500 mt-1">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="agreeTerms" class="mr-2" />
              <span class="text-sm"
                >Agree to our <a href="#" class="underline">Terms of use</a> and
                <a href="#" class="underline">Privacy Policy</a></span
              >
            </label>
          </div>
  
          <div class="mb-10">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="subscribe" class="mr-2" />
              <span class="text-sm">Subscribe to our monthly newsletter</span>
            </label>
          </div>
  
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg w-34 h-14"
            @click.prevent="signUp"
          >
            Sign Up
          </button>
  
          <p class="text-sm mt-2">
            Already have an account? <a href="/signin" class="underline">Log in</a>
          </p>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import SignHeader from "./SignHeader.vue";
import { ref } from "vue";
import {useRouter} from 'vue-router'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid'
import getUser from '../compasable/getUsers'
export default {
  components: {
    SignHeader,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const agreeTerms = ref(true);
    const subscribe = ref(false);
    const error = ref(false);
    const router=useRouter()
    const istrue=ref(true)

    const {addUser}=getUser()

    const signUp = () => {
      if (!email.value.includes('@gmail.com')) {
        error.value = true;
      } else {
        addUser(email.value,password.value)
        error.value = false;
        router.push('/signin')
      }
    };

    return{email,password,showPassword,agreeTerms,subscribe,error,signUp,EyeIcon,EyeSlashIcon,istrue}
  },
};
</script>