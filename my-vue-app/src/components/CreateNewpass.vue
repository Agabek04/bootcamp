<template>
  <div>
    <SignHeader />
    <div class="grid grid-cols-2">
      <img src="../assets/images/resetpass.png" class="w-[695px] h-[956px]" />
      <div class="mt-10 w-[567px]">
        <p class="text-3xl font-bold">Create New Password</p>
        <p class="text-gray-700 mb-10">
          Your new password must be different from previous used passwords.
        </p>
        <p class="font-bold text-gray-700">Password</p>
        <div class="relative">
          <button
            type="button"
            class="absolute right-1 top-2 inline-flex gap-2 text-gray-400 text-sm"
            @click="showPassword = !showPassword"
          >
            <component
              :is="showPassword ? EyeIcon : EyeSlashIcon"
              class="w-5 h-5"
            />
          </button>
          <input
            id="password"
            v-model="newPassword"
            :type="showPassword ? 'text' : 'password'"
            class="w-full border rounded-lg px-3 py-2 text-sm pr-10"
          />
          <p :class="{'text-sm':true, 'mb-10':true,'text-red-600':isTrue}">Must be at least 8 characters.</p>
          <p class="font-bold text-gray-700">Confirm Password</p>
          <input
            id="password"
            v-model="confimPassword"
            :type="showPassword ? 'text' : 'password'"
            class="w-full border rounded-lg px-3 py-2 text-sm pr-10"
          />
          <p class="text-sm text-red-600 font-bold" v-if="isMatch">
            New password and comfirm new password do not match
          </p>
          <button
            class="border bg-purple-600 border-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg w-40 h-12 mt-12"
            @click.prevent="resetPass"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignHeader from "./SignHeader.vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import {useRouter} from 'vue-router'
export default {
  components: {
    SignHeader,
  },
  setup() {
    const showPassword = ref(false);
    const isMatch = ref(false);
    const newPassword=ref('')
    const confimPassword=ref('')
    const isTrue=ref(false)
    const router=useRouter()
    const resetPass=()=>{
        if(newPassword.value===confimPassword.value){
            if(newPassword.value.length>=8){
                router.push('/signin')
            }
            else{
                isTrue.value=true
            }
        }
        else{
            isMatch.value=true
        }
    }
    return {
      EyeIcon,
      EyeSlashIcon,
      showPassword,
        isMatch,
        newPassword,
        confimPassword,
        isTrue,
        resetPass
    };
  },
};
</script>