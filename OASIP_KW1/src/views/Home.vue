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
<div class="welcome">
  Welcome to OASIP-KW1
</div>
<p class="sub">Online Appoinment Scheduling System</p>
<p class="sub">My Teams : </p>
<div class="teams">
  <table width="80%">
    <tr>
      <td><img src="../assets/dear.jpeg" alt="opal" width="250"></td> 
      <td><img src="../assets/game.jpg" alt="opal" width="250"></td> 
      <td><img src="../assets/opla.jpg" alt="opal" width="250"></td> 
   </tr>
    <tr >
      <td>Name : Naphatsawan</td>
      <td>Name : Pichaya</td>
      <td>Name : Wareewan</td>
    </tr>
        <tr>
      <td>ID : 63130500064</td>
      <td>ID : 63130500086</td>
      <td>ID : 63130500105</td>
    </tr>
  </table>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
html , body{
  background-color: #fcfade;
  max-width: 100%;
  max-height: 0em
}
.li{
  color: aliceblue;
}
.btn{
  margin-top: 2em;
  margin-left: 2em;
  font-family: 'Itim', cursive;
}
.welcome{
 font-family: 'Changa One', cursive;
 font-size: 3em;
 text-align: center;
 margin-top: 1em;
}
.sub{
  font-size: 1.5em;
  text-align: center;
  font-family: 'Changa One', cursive;
}
.teams{
  position: relative;
  margin-left: 14em;
}
td{
  text-align: center;
  font-family: 'Itim', cursive;
}
</style>