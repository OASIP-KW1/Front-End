<script setup>
defineProps({
  eventCategory: {
    type: Object,
    require: true
  },
})
</script>
 
<template>
<p class="titleCategory">Category</p>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div v-for="(eventCategory,index) in eventCategory">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <img src="../assets/project-management.png" class="card-img-top" alt="project-management" style="background-color: #9090CF;" v-if="eventCategory.id == 1">
        <img src="../assets/dev-ops2.png" class="card-img-top" alt="dev-ops" style="background-color: #DB7688;" v-if="eventCategory.id == 2">
        <img src="../assets/database2.png" class="card-img-top" alt="database" style="background-color: #ACCAD9;" v-if="eventCategory.id == 3">
        <img src="../assets/client-side2.png" class="card-img-top" alt="client-side" style="background-color: #B7C274;" v-if="eventCategory.id == 4">
        <img src="../assets/back-end2.png" class="card-img-top" alt="back-end" style="background-color: #C6A46B;" v-if="eventCategory.id == 5">
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
้html , body{
  background-color: #B16A97;
}
.titleCategory{
 font-family: 'Changa One', cursive;
 font-size: 3em;
 text-align: center;
 margin-top: 0.5em;
 color: #ffffff;
}
.add{
  /* position: relative; */
  /* margin-top: 0.0015em; */
  margin-left: -80em;
}
</style>