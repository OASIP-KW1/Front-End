<script setup>
const props = defineProps({
  eventCategory: {
    type: Array,
    require: true
  },
})
</script>
 
<template>
<div id="grad1">
  <!-- <div v-for="category in eventCategory" class="background">
    <p>{{category.id}}</p>
    <p>{{category.eventCategoryName}}</p>
    <p>{{category.eventCategoryDescription}}</p>
    <p>{{category.eventDuration}}</p>
  </div> -->
  <p class="titleCategory">CATEGORY</p>
  <div class="flex-container">
   <div v-for="category in eventCategory">
    <p class="clinics">{{category.eventCategoryName}}</p>
    <p v-if="category.eventCategoryDescription == null">Description : - </p>
    <p v-else>Description : {{category.eventCategoryDescription}}</p>
    <p>Duration : {{category.eventDuration}} minutes</p>
  </div>
</div>
</div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.titleCategory{
  font-family: 'Mali', cursive;
  text-align: center;
  margin-top: -15.85em;
  font-size: 2.5em;
  font-weight: bolder;
  padding-top: 0.5em;
}
.clinics{
  text-align: center;
}
.flex-container {
  display: flex;
  grid-auto-rows: 1fr;
  height: 85%;
  /* margin-top: -35em; */
}
.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  width: 50%;
  height: 90%;
}
</style>