<script setup>

</script>
 
<template>
<nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home'}"><a class="nav-link" style="color: #EFEFEF; font-size: larger; margin-left: 2em;">Home</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventCategory'}"><a class="nav-link" style="color: #EFEFEF; font-size: larger;">Category</a></router-link>
      </li> 
       <img src="./assets/logo-1.png" alt="loco" class="logonav" style="margin-left: 2em;">
       <li class="nav-item">
        <router-link :to="{ name: 'EventListAll'}"><a class="nav-link" style="color: #EFEFEF; font-size: larger;">Event</a></router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{  name: 'AddEvents' }"><a class="nav-link" style="color: #EFEFEF; font-size: larger;">Add Event</a></router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view></router-view>
</template>
 
<style>
้html , body{
  background-color: #EFEFEF;
}
.navbar{
  margin-left: -10em;
  padding: 38em;
  width: max-content;
  background-color: #2D5272;
  height: 90px;
  font-family: 'Kanit';
  /* text-align: center; */
  /* vertical-align: middle; */
}
.nav-item{
  position: relative;
  margin-top: 0.99em;
  /* margin-left: 0.99em; */
  padding-left: 2em;
}
.logonav{
  height: 5em;
}
</style>