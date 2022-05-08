<script setup>
import { ref , onBeforeMount} from 'vue';
import AddEvent from '../components/AddEvent.vue';

let data = ref({})
// GET
const getCategories = async () =>{

    const res = await fetch(`${import.meta.env.BASE_URL}api/eventCategory`)
    if(res.status === 200) {
    console.log(`response.status: ${res.status}`)
    console.log(res);
    data.value = await res.json()
    console.log(data.value);
    }else 

    console.log("error, cann't get data");
}
onBeforeMount( async () => {
   await getCategories()
})

// post
const createAppointment = async (newEvent) => {
  if(newEvent.status == 0){
    console.log('no data');
  }else{
  const res = await fetch(`${import.meta.env.BASE_URL}api/events`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ bookingName: newEvent.bookingName , bookingEmail: newEvent.bookingEmail , eventCategory:newEvent.eventCategory,
                           eventStartTime: newEvent.eventStartTime , eventDuration: newEvent.eventDuration , eventNote: newEvent.eventNote })
  })
  if (res.status === 200) {
    console.log("complete")
  }else console.log("fail")
}
}

//modify
const modifyEvent = async (events) => {
  const res = await fetch(`${import.meta.env.BASE_URL}api/events/${events.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ bookingName: events.bookingName , bookingEmail: events.bookingEmail , eventCategory:events.eventCategory,
                           eventStartTime: events.eventStartTime , eventDuration: events.eventDuration , eventNote: events.eventNote })
  })
}

// const modifyEvent = async (events) => {
//   const date = new Date(events.eventStartTime)
//   const dateUTC = date.toISOString()
//   const res = await fetch(`/api/event/${events.id}?eventStartTime=${dateUTC}&eventNote=${events.eventNote}` ,{
//     method : 'PUT',
//     headers: {'content-type' : 'application/json'}
//   })
// }


</script>
 
<template>
<AddEvent :categories="data" @createAppointment="createAppointment" @edit="modifyEvent"/>
<!-- <AddEvent :categories="data"  /> -->
</template>
 
<style>

</style>