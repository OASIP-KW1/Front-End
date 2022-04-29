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
<div class="modal-mask">
      <div class="modal-wrapper">
      <div v-for="(eventCategory,index) in eventCategory">
        <div class="modal-container">
        <p>ID : {{eventCategory.id}}</p>
        <p>Clinic Name : {{eventCategory.eventCategoryName}}</p>
        <p>Description : {{eventCategory.eventCategoryDescription}}</p>
        <p>Duration : {{eventCategory.eventDuration}} minute</p>
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