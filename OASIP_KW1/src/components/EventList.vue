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
<div class="container"  >
        <p v-if ="eventList.length == 0" class="p-3 text-center">VIEW-EVENT-LIST-EMPTY</p>
        <p v-else class="p-3 text-center">VIEW-EVENT-LIST-ALL</p>
        <div class="table-responsive-lg">
        <table class="table table-hover" >
            <thead>
                <tr class="title" id="header" >
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
                <tr v-for="(event,index) in eventList" :key="event.id " class="datas" tr-hover>
                    <td>{{index +1}}</td>
                    <td>{{event.bookingName}}</td>
                    <td>{{event.bookingEmail}}</td>
                    <td>{{event.eventCategory.eventCategoryName}}</td>
                    <td>{{event.eventStartTime}}</td>
                    <td>{{event.eventDuration.split(':')[1]}} minutes</td>
                    <td><router-link :to="{ name: 'Detailsbase' , params:{id:event.id}}"><button class="detail">Detail</button></router-link>
                    <button class="delete" @click="$emit('deleteEvent',event.id)">Cancel</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        <div v-if ="eventList.length == 0" class="null">No Scheduled Events</div>
</template>
 
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300&display=swap');
html , body{
  background-color: #EFEFEF;
  }
.container{
  text-align: center;
}

#header:hover{
  background-color: unset;
}
tr:hover{
  background-color: #f59761;
}
tr{
  border: #172B3A;
}
td{
  font-size: 0.98em;
  color: #172B3A;
}
.table{
  margin-left: auto;
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
 font-family: 'Kanit', sans-serif;
 font-weight: bold;
 font-size: 3em;
 color: #172B3A;
}
.title{
  font-family: 'Kanit';
  font-size: 1.25em;
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