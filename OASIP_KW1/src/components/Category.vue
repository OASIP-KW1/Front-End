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
<div class="row row-cols-2 row-cols-md-3 g-2 justify-content-center">
  <div v-for="(eventCategory,index) in eventCategory">
  <div class="col">
      <div class="card-body">
         <img src="../assets/Pic_ProjectManagementClinic.png" class="card-img-top" alt="project-management" style="background-color: #9090CF;" v-if="eventCategory.id == 1">
        <img src="../assets/Pic_InfraClinic.png" class="card-img-top" alt="dev-ops" style="background-color: #DB7688;" v-if="eventCategory.id == 2">
        <img src="../assets/Pic_DatabaseClinic.png" class="card-img-top" alt="database" style="background-color: #ACCAD9;" v-if="eventCategory.id == 3">
      <div class="">
        <img src="../assets/Pic_1.png" class="card-img-top" alt="client-side" style="background-color: #B7C274;" v-if="eventCategory.id == 4">
        <img src="../assets/Pic_Server-sideClinic.png" class="card-img-top" alt="back-end" style="background-color: #C6A46B;" v-if="eventCategory.id == 5">
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
  position: relative;
  /* margin-top: 0.0015em; */
  margin-left: -80em;
}
.img-bottom{
  position: relative;
  /* margin-left: 80em; */
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
</style>
<!-- <script setup>
import { ref } from 'vue'
defineProps({
  eventCategory: {
    type: Object,
    require: true
  },
})
const picture = ref("src/assets/Pic_1.png")
</script>
 
<template>
<p class="titleCategory">Category</p>
<div class="row row-cols-2 row-cols-md-3 g-2 justify-content-center">
  <div v-for="(eventCategory,index) in eventCategory">
    <img :src="picture">
    <p> {{ eventCategory.eventCategoryName }} </p>
    <p> {{ typeof(String(eventCategory.id))}} </p>
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
  position: relative;
  /* margin-top: 0.0015em; */
  margin-left: -80em;
}
.img-bottom{
  position: relative;
  /* margin-left: 80em; */
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
</style> -->