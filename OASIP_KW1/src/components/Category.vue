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
        <h5 class="card-title">ID : {{eventCategory.id}}</h5>
        <p class="card-text">Clinic Name : {{eventCategory.eventCategoryName}}</p>
        <img src="../assets/project-management.png" class="card-img-top" alt="project-management" v-if="eventCategory.id == 1">
        <img src="../assets/dev-ops.png" class="card-img-top" alt="dev-ops" v-if="eventCategory.id == 2">
        <img src="../assets/database.png" class="card-img-top" alt="database" height="325" v-if="eventCategory.id == 3">
        <img src="../assets/client-side.png" class="card-img-top" alt="client-side" width="80%" height="350" v-if="eventCategory.id == 4">
        <img src="../assets/back-end.png" class="card-img-top" alt="back-end" v-if="eventCategory.id == 5">
        <p class="card-text">Description : {{eventCategory.eventCategoryDescription}}</p>
        <p class="card-text">Duration : {{eventCategory.eventDuration}} minute</p>
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
  background-color: #dee0e4;
  border-radius: 10px;
  font-family: 'Itim', cursive;
  /* margin-top: 8em; */
}
.modal-body {
  margin-left: 1em;
}

.modal-button {
  display: flex;
  justify-content: end;
  margin-left: -15em;
}
.titleCategory{
 font-family: 'Changa One', cursive;
 font-size: 3em;
 text-align: center;
 margin-top: 0.5em;
}
</style>