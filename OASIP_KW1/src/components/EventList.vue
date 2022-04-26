<script setup>
defineProps({
  eventList: {
    type: Object,
    require: true
  },
})
</script>
 
<template>
<div>
    <p v-for="(event,index) in eventList" key="index">
    {{event.id}} {{event.bookingName}} {{event.bookingEmail}} 
    {{event.eventCategory.eventCategoryName}} {{event.eventStartTime}} 
    {{event.eventDuration}} {{event.eventNote}}
    </p>
</div>
</template>
 
<style>

</style>