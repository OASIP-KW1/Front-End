<script setup>
defineProps({
  eventList: {
    type: Object,
    require: true
  },
})
</script>
 
<template>
    <table style="width:100%">
  <tr>
    <th>ID</th>
    <th>Booking Name</th>
    <th>Booking Email</th>
    <th>Category</th>
    <th>Start-Time</th>
    <th>Duration</th>
    <th>Event Notes</th>
  </tr>
  <tr>
      <p v-for="(event,index) in eventList" key="index">
    <td>{{event.id}}</td>
    <td>{{event.bookingName}}</td>
    <!-- <td>{{event.bookingEmail}}</td>
    <td>{{event.eventCategory.eventCategoryName}}</td>
    <td>{{event.eventStartTime}}</td>
    <td>{{event.eventDuration}}</td>
    <td>{{event.eventNote}}</td> -->
     </p>
</tr>
</table>
</template>
 
<style>

</style>