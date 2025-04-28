<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goPage">Go to home page</button>
  </div>
</template>

<script>

import {useRouter} from 'vue-router'
export default {
  name:'About',
  setup(){
    const router = useRouter()
    const goPage=()=>{
       router.push('/')
    }
     

    return{goPage}
  }
}
</script>
