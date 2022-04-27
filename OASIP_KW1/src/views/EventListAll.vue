<script setup>
import { ref,onBeforeMount } from 'vue'
import eventlist from './components/EventList.vue'

console.clear();


let data = ref({})
// GET
const getNotes = async () =>{

    const res = await fetch('/api/events')
    if(res.status === 200) {
    console.log(`response.status: ${res.status}`)
    console.log(res);
    data.value = await res.json()
    console.log(data.value);
    }else 

    console.log("error, cann't get data");
}
onBeforeMount( async () => {
   await getNotes()
})

</script>
 
<template>
  <div>
    <eventlist :eventList="data"/>
  </div>
</template>

<style>
html , body{
  background-color: #BEBEBE;
  max-width: 100%;
  max-height: 0em
}
</style>