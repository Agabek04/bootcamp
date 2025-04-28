<template>
    <div>
        <SignHeader />
        <div class="grid grid-cols-2">
            <img src="../assets/images/resetpass.png" class="w-[695px] h-[956px]">
            <div class="mt-10 w-[567px]">
                <p class="text-3xl font-bold">Reset Your Password</p>
                <p class="text-gray-700">Enter your email and we'll send you a link to reset your password.</p>
                <p class="text-gray-400 font-bold mb-6">Please check it.</p>
                <p class="font-bold text-gray-600 mb-2">Email</p>
                <form action="">
                    <label for="email"></label>
                    <input type="email" class="border w-full h-12 rounded-lg px-3 py-2" placeholder="    focus001@gmail.com" v-model="email">
                    <p v-if="isActive" class="text-red-400">We can not find your email.</p>
                    <button class="border bg-purple-600 border-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg w-34 h-12 mt-12"
                    @click.prevent="sending"
                    >Send
                    </button>
                    <p class="font-bold tecxt-gray-600">Back to <a href="/signin" class="underline"> Login</a></p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SignHeader from "./SignHeader.vue"
import {ref} from 'vue'
import getUser from "../compasable/getUsers"
import { useRouter } from 'vue-router'
export default {
    name:'ResetPassword',
    components: {
    SignHeader
  },
    setup() {
        const email=ref('')
        const isActive=ref(false)
        const router=useRouter()
        const {users, getData}=getUser()
        getData()
        
        const sending=()=>{
            if(users.value.find(user => user.email===email.value)){
                router.push('/checkemail')
            }
            else{
                isActive.value=true
                email.value=''
            }
        }
        return{email,isActive,sending}
    },
}
</script>