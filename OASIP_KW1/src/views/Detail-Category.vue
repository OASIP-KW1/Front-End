<script setup>
import DetailCategory from '../components/Detail-Category.vue'


const myRouter = useRouter()
const {params} = useRoute()
let eventDetail = ref({})
// GET
const getEvents = async () =>{

    const res = await fetch(`${import.meta.env.BASE_URL}api/events/${params.id}`)
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
</script>
 
<template>
    <DetailCategory :categoryDetails="eventDetail"></DetailCategory>
    
</template>
 
<style>

</style>