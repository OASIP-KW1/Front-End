<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

defineEmits(['createAppointment'])
const props = defineProps ({
    categories: {
    type: Array,
    default: []
  }
}) 

const name = ref()
const email = ref()
const category = ref()
const date = ref()
// const time = ref()
const addnotes = ref()
const alldata  = computed(() => {
    return {bookingName: name.value , bookingEmail: email.value , eventCategory:{"id": categoryId.value,
            "eventCategoryName": category.value,
            "eventCategoryDescription": null,
            "eventDuration":  null } , eventStartTime: datetime() , eventDuration: duration.value , eventNote: addnotes.value }
})

const datetime  = () =>{
    const disdate = new Date(date.value) 
    // date.setDate(date.value) 
    // date.setTime(time.value)
    return  disdate
}

const duration = computed(() => {
    const currentCategoryId = ref(0);
    for (let i = 0; i < props.categories.length; i++) {
        console.log(props.categories[i]);
        console.log(i);
        if (category.value == props.categories[i].eventCategoryName) {
            currentCategoryId.value = props.categories[i].eventDuration;
        }
    }
    return currentCategoryId.value;
})

const categoryId = computed(() => {
    const currentCategoryId = ref(0);
    for (let i = 0; i < props.categories.length; i++) {
        if (category.value == props.categories[i].eventCategoryName) {
            currentCategoryId.value = props.categories[i].id;
        }
    }
    return currentCategoryId.value;
})
</script>
 
<template>
    <p class="addtitle">Add Events / Booking</p>
    <div class="input">
       <p>Name : <input type="text" size="50" v-model="name"> &nbsp;&nbsp;
       Email : <input type="text" size="50" v-model="email"> </p> 
    </div>
    <div class="select1">
        <p class="select">Select Category do you need</p>
<select class="option" v-model="category">
    <option v-for="(category,index) in categories" :key="index">{{category.eventCategoryName}}</option>
    <!-- <option value="1">Project Management Clinic</option>
    <option value="2">DevOps/Infra Clinic</option>
    <option value="3">Database Clinic</option>
    <option value="4">Client-side Clinic</option>
    <option value="5">Server-side Clinic</option> -->
</select>
    </div>
<div class="select2">
    <p>Date - Time </p>
    <input id="party" type="datetime-local" name="partydate" v-model="date">
</div >
<!-- <div class="select3">
    <p>Time</p>
    <input id="party" type="time" name="partydate" v-model="time" >
</div > -->
<p class="addnotes">Add Note :</p> <textarea id="notes" cols="157" rows="5" maxlength="100" v-model="addnotes"></textarea> 
<!-- <div class ="button"><router-link :to="{  name: 'EventListAll' }"><button type="button" class="Close btn btn-success btn-lg" @click="$emit('createAppointment' , alldata)">Create Appointment</button></router-link></div> -->
<div class ="button"><button type="button" class="Close btn btn-success btn-lg" @click="$emit('createAppointment' , alldata)">Create Appointment</button></div>
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
.select3{
    display: flex;
    font-size: larger;
    margin-left: 6em;
    font-family: 'Changa One', cursive;
     /* text-align: center; */
         margin-top: -2.5em;
    justify-content: center;
    
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
.button{
    display: flex;
    justify-content: center;
    /* padding: 15px 32px; */
    font-size: 16px;

}
.button:hover{
    color: white;
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