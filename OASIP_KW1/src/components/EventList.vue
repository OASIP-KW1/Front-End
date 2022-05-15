<script setup>
import { ref,onBeforeMount } from 'vue';

defineEmits(['deleteEvent'])
defineProps({
    categories: {
        type: Array,
        default: []
    }
})
let data = ref([])
// GET
const getEvent = async () =>{
    const res = await fetch(`${import.meta.env.BASE_URL}api/events`)
    if(res.status === 200) {
    data.value = await res.json()
    } 
}
onBeforeMount( async () => {
   await getEvent()
})

const searchByEmail = ref('')
const searchByCategory = ref('')
const searchByTime = ref('')
//ควรจะ search เปน function อันเดียว

const searchLastest = () =>{
  getEvent()
  setTimeout(() => {
    if(searchByEmail.value !== ''){
      console.log('search by e-mail');
    data.value = data.value.filter((event) =>{
      return event.bookingEmail == searchByEmail.value
    })
    }
    if(searchByCategory.value !== ''){
      console.log('search by category');
    data.value = data.value.filter((event) => {
      return event.eventCategory.eventCategoryName == searchByCategory.value
    })
    }
    if(searchByTime.value == 'Past'){
      console.log('search by past');
    data.value = data.value.filter((event) => {
        return new Date() > new Date(event.eventStartTime)
    })
    }else if(searchByTime.value == 'Today'){
      console.log('search by today');
    data.value = data.value.filter((event) => {
        return new Date().setHours(0,0,0,0) == new Date(event.eventStartTime).setHours(0,0,0,0)
    })
    }else if(searchByTime.value == 'Future / On going'){
    data.value = data.value.filter((event) => {
      console.log('search by Future');
        return new Date() < new Date(event.eventStartTime)
    })
    }
  }, 400);
}

const restoreDate = () =>{
  if(search.value == ''){
    getEvent()
  }
}
const deleteData = (eventID) =>{
  data.value = data.value.filter((event) => event.id !== eventID)
}
const refresh = () =>{
  getEvent()
  searchByEmail.value = ''
  searchByCategory.value = ''
  searchByTime.value = ''
}

const monthName = ref(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])

const formatdate = (date) => {
  const checkdate = new Date(date)
  return `${checkdate.getDate()} ${monthName.value[checkdate.getMonth()]} ${checkdate.getFullYear()}
  ${checkdate.getHours()}:${String(checkdate.getMinutes()).padStart(2, '0')}`
}

</script>
 
<template>
<div id="grad1">
  <div class="container">
        <p v-if ="data.length == 0" class="p-3 text-center">CHECK APPOINMENT</p>
        <p v-else class="p-3 text-center">CHECK APPOINMENT</p>
        <table>
  <tr class="head">
    <th>Check Email</th>
    <th>Check Clinics or Category</th>
    <th>Current Date</th>
    <th>Option</th>
  </tr>
  <tr>
    <td><input type="text" v-model="searchByEmail" placeholder="Your Email" @keyup="restoreDate" style="border-radius: 10px;"></td>
    <td>
      <select class="option2" v-model="searchByCategory" required>
      <option value="" disabled selected hidden>Choose Clinics or Category</option>
      <option v-for="(category, index) in categories" :key="index">{{ category.eventCategoryName }}</option>
      </select>
    </td>
    <td>
      <select class="option3" v-model="searchByTime">
      <option value="" disabled selected hidden id="time">Filter by Date-Time</option>
      <option>Future / On going</option>
      <option>Today</option>
      <option>Past</option>
      </select>
    </td>
    <td>
      <button @click="refresh" class="refresh">Refresh</button>&nbsp;&nbsp;<button @click="searchLastest" id="search">Search</button>
    </td>
  </tr>
  </table>
  <br>
        <div class="table-responsive-lg"> 
        <table class="table table-hover">
            <thead>
                <tr class="head">
                    <th>ID</th>
                    <th>Booking Name</th>
                    <th>Booking Email</th>
                    <th>Category</th>
                    <th>Start-Time</th>
                    <th>Duration</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(event,index) in data" :key="event.id" class="datas" tr-hover>
                    <td>{{index +1}}</td>
                    <td>{{event.bookingName}}</td>
                    <td>{{event.bookingEmail}}</td>
                    <td>{{event.eventCategory.eventCategoryName}}</td>
                    <td>{{formatdate(event.eventStartTime)}}</td>
                    <td>{{event.eventDuration}} minutes</td>
                    <td><router-link :to="{ name: 'Detailsbase' , params:{id:event.id}}"><button class="detail">Detail</button></router-link>&nbsp;&nbsp;
                    <button class="delete" @click="$emit('deleteEvent',event.id); deleteData(event.id)">Cancel</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        <div v-if ="data.length == 0" class="null">No Scheduled Events</div>
</div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@500&display=swap');
table {
  border-collapse: collapse;
  width: 100%;
}
tr.head{
  /* font-family: 'Ubuntu Mono', monospace; */
  font-family: 'Mali', cursive;
}
td{
  font-family: 'Mali', cursive;
}
.container{
  text-align: center;
  margin-top: -39.5em;
}
.option2{
  margin-top: 0.5em;
  height: 2em;
  margin-left: -0.7em;
  border-radius: 10px;
}
.option3{
  margin-top: 0.25em;
  height: 2em;
  border-radius: 10px;
}
.col{
  margin-left: 5em;
}
tr , td{
  border: #172B3A;
}
.refresh{
  font-family: 'Ubuntu Mono', monospace;
  border-radius: 10px;
  background-color: aquamarine;
}
#search{
  font-family: 'Ubuntu Mono', monospace;
  border-radius: 10px;
  background-color: darksalmon;
}
.detail{
  background-color: #F7D97C;
  border-radius: 10px;
  font-family: 'Ubuntu Mono', monospace;
}
.delete{
  background-color: #FB757E;
  border-radius: 10px;
  font-family: 'Ubuntu Mono', monospace;
}
.p-3{
 /* font-family: 'Ubuntu Mono', monospace; */
 font-family: 'Mali', cursive;
 font-weight: bold;
 font-size: 3em;
 color: #172B3A;
}
.title{
  font-family: 'Kanit';
  /* font-size: 1.25em; */
  color: #172B3A;
}
.datas{
  font-family: 'Kanit';
  color: #172B3A;
}
.null{
  text-align: center;
  font-size: 2em;
  color: red;
  margin-top: 2.5em;
  font-family: 'Changa One', cursive;
}
thead{
  border: #172B3A;
}
</style>