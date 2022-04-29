<script setup>
import Details from '../components/Details.vue'
import {useRouter, useRoute} from 'vue-router'
import { ref , onBeforeMount} from 'vue'

const myRouter = useRouter()
const {params} = useRoute()
let eventDetail = ref({})
// GET
const getEvents = async () =>{

    const res = await fetch(`/api/events/${params.id}`)
    if(res.status === 200) {
    console.log(`response.status: ${res.status}`)
    console.log(res);
    eventDetail.value = await res.json()
    }else 
    console.log("error, cann't get data");
}
onBeforeMount( async () => {
   await getEvents()
})

// console.log("game");
</script>
 
<template> 
<Details :eventDetails="eventDetail"/> 
</template>
 
<style>

</style>