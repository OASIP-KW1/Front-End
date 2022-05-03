<script setup>

</script>
 
<template>
<nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home'}"><a class="nav-link" style="color: #D13A27; font-size: larger;">Home</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventCategory'}"><a class="nav-link" style="color: #9E538E;; font-size: larger;">Category</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventListAll'}"><a class="nav-link" style="color: #F1802A;; font-size: larger;">Event</a></router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{  name: 'AddEvents' }"><a class="nav-link" style="color: #47251C;; font-size: larger;">Add Event</a></router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view></router-view>
</template>
 
<style>
้html , body{
  background-color: #FDE5EC;
}
.navbar{
  padding: 40em;
  width: max-content;
  background-color: #F8A9BF;
  height: 90px;
  font-family: 'Changa One';
}
.nav-item{
  position: relative;
  padding-left: 8em;
  margin-left: -1em;
}
</style>