<script setup>
import { ref,onBeforeMount } from 'vue'
import eventlist from '../components/EventList.vue'

console.clear();

let data = ref({})
let toggle = ref(true)
// GET
const getNotes = async () =>{
    const res = await fetch('/api/events')
    if(res.status === 200) {
    console.log(`response.status: ${res.status}`)
    console.log(res);
    data.value = await res.json()
    console.log(data.value.length);
    toggle.value = false
    }else 
    console.log("error, cann't get data");
}
onBeforeMount( async () => {
   await getNotes()
})
console.log(toggle.value);
</script>
 
<template>
  <div>
   <div v-if ="data.length == 0" class="null">No Scheduled Events</div>
    <eventlist :eventList="data"/>
  </div>
  <router-view></router-view>
</template>

<style>
html , body{
  background-color: #BEBEBE;
  max-width: 100%;
  max-height: 0em
}
</style>