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
   <img src="../assets/project-manage.png" alt="" v-if="category.id ==1" class="id1">
   <img src="../assets/devops.png" alt="" v-if="category.id ==2" class="id2">
   <img src="../assets/data.png" alt="" v-if="category.id ==3" class="id3">
   <img src="../assets/client.png" alt="" v-if="category.id ==4" class="id4">
   <img src="../assets/back.png" alt="" v-if="category.id ==5" class="id5">
    <p class="clinics"><b>{{category.eventCategoryName}}</b></p>
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
.id1 {
  margin-left: 1em;
}
.id2 , .id4 , .id5{
  margin-left: 1.5em;
}
.id3{
  margin-left: 2em;
}
.titleCategory{
  font-family: 'Mali', cursive;
  text-align: center;
  margin-top: -17em;
  font-size: 2.5em;
  font-weight: bolder;
  padding-top: 0.5em;
  }
.clinics{
  text-align: center;
}
.flex-container {
  display: flex;
  /* grid-auto-rows: 1fr; */
  height: 85%;
  font-family: 'Mali', cursive;
  /* width: 60%; */
  /* margin-left: 5em; */
}
.flex-container > div {
  background: linear-gradient(#E0BBE4,#FFDFD3,#FFC8D8,#FFDFD3);
  margin: 10px;
  padding: 20px;
  width: 30%;
  height: 80%;
  box-shadow: 5px 5px 10px #D0D3D4;
  border-radius: 5px;
}
</style>