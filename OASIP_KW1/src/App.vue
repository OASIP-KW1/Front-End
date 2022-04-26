<script setup>
import { ref,onBeforeMount } from 'vue'
import Fa6RegularBell from './components/icons/Fa6RegularBell.vue';

console.clear();

let data = ref([])
// GET
const getNotes = async () =>{

    const res = await fetch('/api/events')
    if(res.status === 200) {
    // .json ดึงส่วนข้อมูลใน data มาเป็น js
    // addEventListener.value = await res.json()
    console.log(`response.status: ${res.status}`)
    console.log(res);
    data.value = await res.json()
    }else 
    console.log("error, cann't get data");
}
onBeforeMount( async () => {
   await getNotes()
})

</script>
 
<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" >Home</a>
      <a class="nav-item nav-link" >Patient</a>
      <a class="nav-item nav-link" >Scheduling</a>
      <input type="text" id="search" placeholder="   Search...">
    </div>
  </div>
  <Fa6RegularBell/>
</nav>
{{data}}
</template>
 
<style>
html , body{
  background-color: #36628F;
}
#search{
  margin-left: 45em;
  position: absolute;
  width: 500px;
  margin-top: 0.25em;
}
.navbar-nav{
  margin-left: 8em;
}
</style>