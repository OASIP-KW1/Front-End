<script setup>
import { ref,onBeforeMount } from 'vue'

console.clear();

let data = ref({})
let toggle = ref(true)
// GET
const getNotes = async () =>{
    const res = await fetch(`/api/events`)
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
<div id="grad1">
<p class="sub">Welcome Online Appoinment Scheduling System</p>
<p class="sub2">About INT221 INFORMATION TECHNOLOGY INTEGRATED PROJECT</p>
<p class="sub4">By OASIP_KW1</p>
<div class="sub3">
  <img src="../assets/logo-1.png" alt="img">
</div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap');
#grad1{ 
  background: linear-gradient(-45deg,#C6DBDA,#FEE1E8,#FED7C3,#F6EAC2,#ECD5E3);
  width: 100%;
  height: 100vh;
  background-size: 400% 400%;
  position: relative;
  animation: change 1s ease-in-out infinite;
}
.sub{
  font-size: 2.5em;
  text-align: center;
  color: #000000;
  position: absolute;
  width: 1000px;
  left: 365px;
  margin-top: -10em;
  font-family: 'Ubuntu Mono', monospace;
  margin-left: -1.5em;
}
.sub2{
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  position: absolute;
  width: 702px;
  left: 480px;
  margin-top: -10em;
  font-family: 'Ubuntu Mono', monospace;
  margin-left: -1.5em;
}
.sub3{
  position: absolute;
  width: 702px;
  left: 480px;
  margin-top: -39em;
  font-family: 'Ubuntu Mono', monospace;
  margin-left: 12.5em;
    -webkit-animation-name: example; 
    -webkit-animation-duration: 1s; 
    -webkit-animation-iteration-count: infinite; 
    animation-name: example;
    animation-iteration-count:infinite;  
}


@-webkit-keyframes example {
    0%  {left:455px; top:0px;}
    25%  {left:495px; top:0px;}
    50%  {left:455px; top:20px;}
    100%  {left:495px; top:20px;}
}

@keyframes example {
    0%  {left:455px; top:0px;}
    25%  {left:495px; top:0px;}
    50%  {left:455px; top:20px;}
    100%  {left:495px; top:20px;}
}

.sub4{
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  position: absolute;
  width: 702px;
  left: 480px;
  margin-top: -8em;
  font-family: 'Ubuntu Mono', monospace;
  margin-left: -1.5em;
}

    
</style>