<script setup>
import { ref,onBeforeMount } from 'vue'
</script>
 
<template>
    <p class="addtitle">Add Events / Booking</p>
    <p class="select">Select Category do you need</p>
<select class="option">
    <option value="1">Project Management Clinic</option>
    <option value="2">DevOps/Infra Clinic</option>
    <option value="3">Database Clinic</option>
    <option value="4">Client-side Clinic</option>
    <option value="5">Server-side Clinic</option>
</select>
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
.addtitle{
 font-family: 'Changa One', cursive;
 font-size: 3em;
 text-align: center;
 margin-top: 0.5em;
}
.select{
    font-size: larger;
    margin-left: 2em;
}
.option{
    margin-left: 2.5em;
}
</style>