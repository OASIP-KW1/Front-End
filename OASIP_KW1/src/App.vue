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
<nav class="navbar navbar-expand-lg">
  <div class="photo">
<img src="./assets/snoopy.png" width="150em">
</div>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" style="color: aliceblue; font-size: x-large; margin-left: -2em;">Home</a>
      <a class="nav-item nav-link" style="color: aliceblue; font-size: x-large; margin-left: 1.5em;" >Patient</a>
      <a class="nav-item nav-link" style="color: aliceblue; font-size: x-large; margin-left: 1.5em;">Scheduling</a>
      <input type="text" id="search" placeholder="   Search... " >
    </div>
  </div>
  <Fa6RegularBell/>
</nav>
<div class="selectcategory">
  <h2>Category</h2>
  <!-- <select name="Category" id="Category">
      <option value="Project Management">Project Management</option>
      <option value="Dev-Ops Infra">Dev-Ops Infra</option>
      <option value="Database">Database</option>
      <option value="Front-End">Front-End</option>
      <option value="Back-End">Back-End</option>
  </select> -->
</div>
<div class="date-time">
<h2>Date/Time</h2>
</div>
  <h3 id="text">Appointment</h3>
  <div class="appointment">
  </div>
<button class="next">Next</button>
</template>
 
<style>
html , body{
  background-color: #36628F;
}
#search{
  margin-left: 28em;
  position: absolute;
  width: 590px;
  height: 40px;
  margin-top: 0.40em;
  border-radius: 10px;
}
.navbar-nav{
  margin-left: 10em;
  color: #36628F;
}
.navbar{
  background-color: #36628F;
}
.photo{
  margin-top: 0.1em;
  margin-left: 3.5em;
  position: fix; 
}
.selectcategory{
  margin-top: 6em;
  margin-left: 2.5em;
  position: absolute;
  border-radius: 12px;
  cursor: pointer; 
  padding: 10px 30px;
  text-decoration: none;
  background-color: #A8DA89;
  color: 00000;
  font-family: 'Laila';
  color: black;
}
.date-time{
  margin-top: 13em;
  margin-left: 2.5em;
  position: absolute;
  border-radius: 12px;
  cursor: pointer; 
  padding: 10px 30px;
  text-decoration: none;
  background-color: #F5C89F;
  color: 00000;
  font-family: 'Laila';
  color: black;
}
#text{
  position: absolute;
  margin-top: -1em;   
  margin-left: 12em;
  color: white;
  font-family: 'Laila';
}
.appointment{
  background-color: #EDC557;
  position: absolute;
  width: 1180px;
  height: 485px; 
  margin-top: 1em;   
  margin-left: 20em;
  border-radius: 12px;
}
.next{
  border-radius: 12px;
  cursor: pointer; 
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  margin-left: 86em;
  margin-top: 31.5em;
  background-color: #D3EAC0;
  color: 00000;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  position:  absolute;
}
</style>