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
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
html , body{
  background-color: #FDE5EC;
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
 font-family: 'Changa One';
 font-size: 3em;
 margin-top: 1em;
 color: #3593A7;
 position: absolute;
width: 671px;
height: 68px;
left: 858px;
top: 250px;
}
.sub{
  font-size: 1.5em;
  text-align: center;
  font-family: 'Changa One', cursive;
  color: #E5CDB1;
  position: absolute;
  width: 540px;
  height: 32px;
  left: 875px;
  top: 400px;
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