<script setup>
defineEmits(['deleteEvent'])
defineProps({
  eventList: {
    type: Object,
    require: true
  },
  
})

</script>
 
<template>
<div class="container">
        <p v-if ="eventList.length == 0" class="p-3 text-center">VIEW-EVENT-LIST-EMPTY</p>
        <p v-else class="p-3 text-center">VIEW-EVENT-LIST-ALL</p>
        <table class="table table-hover">
            <thead>
                <tr class="title">
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
                <tr v-for="(event,index) in eventList" :key="event.id " class="datas">
                    <td>{{index +1}}</td>
                    <td>{{event.bookingName}}</td>
                    <td>{{event.bookingEmail}}</td>
                    <td>{{event.eventCategory.eventCategoryName}}</td>
                    <td>{{event.eventStartTime}}</td>
                    <td>{{event.eventDuration}} minute</td>
                    <td><router-link :to="{ name: 'Detailsbase' , params:{id:event.id}}"><button class="detail">Detail</button></router-link>
                    <button class="delete" @click="$emit('deleteEvent',event.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if ="eventList.length == 0" class="null">No Scheduled Events</div>
  </div>
</template>
 
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
html , body{
  background-color: #8E689C;
  }
.container{
  text-align: center;
}
tr{
  border: #ffffff;
}
td{
  font-size: 0.98em;
  color: white;
}
.detail{
  background-color: #F7D97C;
  border-radius: 10px;
}
.delete{
  background-color: #FB757E;
  border-radius: 10px;
}
.modal-mask {
  width: 100%;
  height: 50%;
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.p-3{
  font-family: 'Changa One', cursive;
 font-size: 3em;
 color: #ffffff;
}
.title{
  font-family: 'Kanit';
  font-size: 1.25em;
  color: #ffffff;
}
.datas{
  font-family: 'Kanit';
  color: #ffffff;
}
.null{
  text-align: center;
  font-size: 2em;
  color: red;
  margin-top: 2.5em;
}
thead{
  border: #ffffff;
}
</style>