<script setup>
defineEmits(['edit'])
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
                <p> Duration : {{eventDetails.eventDuration.split(':')[1]}} minutes</p>
                <p v-if="eventDetails.eventNote !== null"> Note : {{eventDetails.eventNote}}</p>
                <p v-else> Note : - </p>
          </div>
          <div class="modal-button">
            <div class ="close"><router-link :to="{  name: 'EventListAll' }"><button type="button" class="btn btn-danger">Close</button></router-link></div>
            <div class ="edit"><router-link :to="{  name: 'AddEvents' }"><button type="button" class="btn btn-1 btn-success" @click="$emit('edit',eventDetails)">Edit</button></router-link></div>
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
  padding: 20px 100px;
  background-color: #f8a9bfb5;
  border-radius: 10px;
  font-family: 'Itim', cursive;
  margin-top: 5em;

}
.title-id{
  text-align: center;
  /* margin-left: 4em; */
  font-size: 1.5em
}
.modal-body {
  margin-left: -1em;
  width: 300px;
  height: 15em;  
}
.modal-button {
  display: flex;
  justify-content: end;
  margin-top: 2em;
  /* padding-left: 1em; */
  /* margin-left: 12em; */
}
.edit{
  margin-left: -1em;
  margin-right: 3.75em;
  
}
.close{
  /* margin-top: 2em; */
  margin-left: -12.5em;
  margin-right: 0.5em;
}
</style>