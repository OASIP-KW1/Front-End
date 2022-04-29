<script setup>

</script>
 
<template>
    <p class="addtitle">Add Events / Booking</p>
    <div class="select1">
        <p class="select">Select Category do you need</p>
<select class="option">
    <option value="1">Project Management Clinic</option>
    <option value="2">DevOps/Infra Clinic</option>
    <option value="3">Database Clinic</option>
    <option value="4">Client-side Clinic</option>
    <option value="5">Server-side Clinic</option>
</select>
    </div>
<div class="select2">
    <p>Date / Time</p>
    <input id="party" type="datetime-local" name="partydate">
</div>

</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.addtitle{
 font-family: 'Changa One', cursive;
 font-size: 3em;
 text-align: center;
 margin-top: 0.5em;
}
.select{
    font-size: larger;
    margin-left: 2em;
    font-family: 'Changa One', cursive;
     text-align: center;
}
.option{
    margin-left: 2.5em;
    text-align: center;
}
.select2{
    font-size: larger;
    margin-left: 2em;
    font-family: 'Changa One', cursive;
     text-align: center;
}
.select1{
    /* font-size: larger; */
    margin-left: 2em;
    /* font-family: 'Changa One', cursive; */
    text-align: center; 
}
.party{
    font-family: 'Itim', cursive;
    margin-left: 2em
}
</style>