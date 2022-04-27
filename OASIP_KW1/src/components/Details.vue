<script setup>
defineProps({
  eventDetails: {
    type: Object,
    require: true
  },
})
</script>
 
<template>
<div v-if="eventDetails.eventCategory !== null">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h6>Detail ID: {{eventDetails.id}}</h6>
            <div class="modal-body">
            <table>
              <tr>
                <th>Name</th>
                <th>Booking Email</th>
                <th>Category</th>
                <th>Start-Time</th>
                <th>Duration</th>
                <th>eventNote</th>
              </tr>
              <tr>
                <td>{{eventDetails.id}}</td>
                <td>{{eventDetails.bookingName}}</td>
                <td>{{eventDetails.bookingEmail}}</td>
                <td>{{eventDetails.eventCategory.eventCategoryName}}</td>
                <td>{{eventDetails.eventStartTime}}</td>
                <td>{{eventDetails.eventDuration}} minute</td>
                <td>{{eventDetails.eventNote}}</td>
              </tr>
            </table>
          </div>
          <div class="modal-button">
            <!-- <button class="button">OK</button> -->
          </div>
        </div>
      </div>
    </div> 
</div> 
</template>
 
<style>

</style> 
