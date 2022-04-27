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
        <h3 v-if ="eventList.length == 0" class="p-3 text-center">VIEW-EVENT-LIST-EMPTY</h3>
        <h3 v-else class="p-3 text-center">VIEW-EVENT-LIST-ALL</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Booking Name</th>
                    <th>Booking Email</th>
                    <th>Category</th>
                    <th>Start-Time</th>
                    <th>Duration</th>
                    <th>Event Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(event,index) in eventList" :key="event.id" >
                    <td>{{index +1}}</td>
                    <td>{{event.bookingName}}</td>
                    <td>{{event.bookingEmail}}</td>
                    <td>{{event.eventCategory.eventCategoryName}}</td>
                    <td>{{event.eventStartTime}}</td>
                    <td>{{event.eventDuration}} minute</td>
                    <td>{{event.eventNote}}</td>
                    <td><router-link :to="{ name: 'Detailsbase' , params:{id:event.id}}"><button class="btnclick">Click</button></router-link></td>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if ="eventList.length == 0" class="null">No Scheduled Events</div>
  </div>
</template>
 
 
<style>
.container{
  text-align: center;
}
.btnclick{
  border-radius: 10px;
}
.btnclick:hover{
  background-color: blanchedalmond;
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
h6 {
  text-align: center;
}
.modal-container {
  max-width: max-content;
  margin: 10px auto;
  padding: 30px 200px;
  background-color: #ffffff;
  border-radius: 10px;
}

.modal-body {
  margin-left: -10em;
}

.modal-button {
  display: flex;
  justify-content: end;
}
.null{
  text-align: center;
  font-size: 2em;
  color: red;
  margin-top: 2.5em;
}
</style>