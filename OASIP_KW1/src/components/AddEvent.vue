<script setup>

</script>
 
<template>
    <p class="addtitle">Add Events / Booking</p>
    <div class="input">
       <p>Name : <input type="text" size="50"> &nbsp;&nbsp;
       Email : <input type="text" size="50"> </p> 
    </div>
    <div class="select1">
        <p class="select">Select Category do you need</p>
<select class="option">
    <option value="">--Please choose an option--</option>
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
</div >
<p class="addnotes">Add Note :</p> <textarea id="notes" cols="50" rows="10"></textarea> 

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
.input{
 font-family: 'Changa One', cursive;
 font-size: 1.25em;
 text-align: center;
}
.addnotes{
    font-size: larger;
    margin-left: 6em;
    font-family: 'Changa One', cursive; 
    margin-top: 2em;
}
.select2{
    font-size: larger;
    margin-left: 6em;
    font-family: 'Changa One', cursive;
     /* text-align: center; */
    margin-top: 2em;
    display: flex;
}
.select1{
    font-size: larger;
    margin-left: 6em;
    font-family: 'Changa One', cursive;
    display: flex;
    margin-top: 2em;
}
.option{
    margin-left: 3em;
    width:52.2em;
    text-align: center;
}
#notes{
    position: relative;
    margin-left: 15em;
    margin-top: -2em;
}
#party{
    margin-left: 2em;
}
</style>