<script setup>
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
        <table class="table table-striped table-bordered">
            <thead>
                <tr class="title">
                    <th>ID</th>
                    <th>Booking Name</th>
                    <th>Booking Email</th>
                    <th>Category</th>
                    <th>Start-Time</th>
                    <th>Duration</th>
                    <!-- <th>Event Notes</th> -->
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(event,index) in eventList" :key="event.id " class="datas" >
                    <td>{{index +1}}</td>
                    <td>{{event.bookingName}}</td>
                    <td>{{event.bookingEmail}}</td>
                    <td>{{event.eventCategory.eventCategoryName}}</td>
                    <td>{{event.eventStartTime}}</td>
                    <td>{{event.eventDuration}} minute</td>
                    <!-- <td v-if="event.eventNote == null">-</td>
                    <td v-else>{{event.eventNote}}</td> -->
                    <td><router-link :to="{ name: 'Detailsbase' , params:{id:event.id}}">
                    <button type="button" class="btn btn-warning">Detail</button>
                    </router-link>
                    </td>
                    <td>
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
.container{
  text-align: center;
}
td{
  font-size: 0.98em;
}
.btn{
  margin-right: 1.5em;
  margin-top: 2em;
  position: relative;
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
}
.title{
  font-family: 'Itim', cursive;
  font-size: 1.25em;
}
.datas{
  font-family: 'Itim', cursive;
}
.null{
  text-align: center;
  font-size: 2em;
  color: red;
  margin-top: 2.5em;
}
</style>