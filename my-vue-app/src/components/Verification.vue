<template>
        <div>
        <SignHeader />
        <div class="grid grid-cols-2">
            <img src="../assets/images/verify.png" class="w-[695px] h-[956px]">
            <div class="mt-10 w-[567px]">
                <p class="text-3xl font-bold">Verification</p>
                <p class="text-gray-700 mb-6">Verify your code.</p>
                <p class="font-bold text-gray-600 mb-2">Verification Code</p>
                <form action="">
                    <label for="email"></label>
                    <input type="email" class="border w-full h-12 rounded-lg px-3 py-2" >
                    <p class="mb-12"></p>
                    <button class="border bg-purple-600 border-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg w-34 h-12"
                    
                    >Verify Code
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SignHeader from './SignHeader.vue'
export default {
    name:'Verification',
    components:{
        SignHeader
    },
    setup() {
        
    },
}
</script>