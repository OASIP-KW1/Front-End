<script setup>
import { ref,onBeforeMount } from 'vue'

console.clear();

let data = ref({})
let toggle = ref(true)
// GET
const getNotes = async () =>{
    const res = await fetch(`${import.meta.env.BASE_URL}api/events`)
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
  <img src="../assets/logo-1.png" alt="logo" class="logo">

</div>
<div class="welcome">
  Welcome to 
</div>
<div class="welcome-1">
  OASIP-KW1 
</div>

<p class="sub">Online Appoinment Scheduling System</p>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
html , body{
  background-color: #EFEFEF;
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
.logo{
margin-left: 42em;
margin-top: 5em;
width: 219px;
height: 224px;

}
.welcome{
 font-family: 'Changa One';
 font-size: 2em;
 margin-top: 3em;
 color: #172B3A;
 position: absolute;
 width: 671px;
 height: 68px;
 left: 700px;
 top: 280px;
 /* text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black */
}
.welcome-1{
font-family: 'Changa One';
 font-size: 4em;
 margin-top: 2em;
 color: #172B3A;
 position: absolute;
 width: 671px;
 height: 68px;
 left: 615px;
 top: 280px;
}
.sub{
  font-size: 1.2em;
  text-align: center;
  font-family: 'Changa One', cursive;
  color: #172B3A;
  position: absolute;
  width: 540px;
  height: 32px;
  left: 510px;
  top: 670px;
  /* text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black */
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