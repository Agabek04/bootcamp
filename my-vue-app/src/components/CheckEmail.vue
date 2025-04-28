<template>
  <SignHeader />
  <div class="grid grid-cols-2">
    <img src="../assets/images/checkEmail.png" />
    <div class="w-[530px] ml-5 mt-10">
        <p class="text-3xl font-bold mb-6">Check Email</p>
        <p class="text-gray-500 font-bold mb-6">Please check your email inbox and click on the provided link to reset your password . If you don’t receive email,
         <a href="#" class="text-purple-600">Click here to resend</a></p>
         <p class="text-gray-500 font-bold">Back to <a href="/signin" class="underline">Login</a></p>
    </div>
  </div>
</template>

<script>
import SignHeader from "./SignHeader.vue";
export default {
  components: {
    SignHeader,
  },
  setup() {},
};
</script>