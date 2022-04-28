<script setup>
import { ref,onBeforeMount } from 'vue'


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
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'EventListAll'}"><a class="nav-link">Scheduled</a></router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<style>
html , body{
  background-color: #fcfade;
  max-width: 100%;
  max-height: 0em
}
.li{
  color: aliceblue;
}
</style>