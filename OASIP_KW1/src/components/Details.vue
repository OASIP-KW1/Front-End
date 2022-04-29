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
          <p class="title-id"><b>Detail ID / หมายเลขนัด : </b>{{eventDetails.id}}</p>
            <div class="modal-body">
                <p> Name : {{eventDetails.bookingName}}</p>
                <p> Email : {{eventDetails.bookingEmail}}</p>
                <p> Category : {{eventDetails.eventCategory.eventCategoryName}}</p>
                <p> Start-Time : {{eventDetails.eventStartTime}}</p>
                <p> Duration : {{eventDetails.eventDuration}} minute</p>
                <p v-if="eventDetails.eventNote !== null"> Note : {{eventDetails.eventNote}}</p>
                <p v-else> Note : - </p>
          </div>
          <div class="modal-button">
            <router-link :to="{  name: 'EventListAll' }"><button type="button" class="btn btn-warning">Close</button></router-link>
          </div>
        </div>
      </div>
    </div> 
</div> 
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.modal-container {
  max-width: max-content;
  margin: 5px auto;
  padding: 20px 150px;
  background-color: #ffdbdb;
  border-radius: 10px;
  font-family: 'Itim', cursive;
  margin-top: 8em;
}
.title-id{
  text-align: center;
  /* margin-left: 4em; */
  font-size: 1.5em
}
.modal-body {
  margin-left: 1em;
}

.modal-button {
  display: flex;
  justify-content: end;
  margin-left: -15em;
}
</style> 
