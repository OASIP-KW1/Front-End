<script setup>

</script>
 
<template>
<nav class="navbar navbar-expand-lg navbar-warning bg-secondary">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home'}"><a class="nav-link" style="color: black; font-size: larger;">Home</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventCategory'}"><a class="nav-link" style="color: black; font-size: larger;">Category</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventListAll'}"><a class="nav-link" style="color: black; font-size: larger;">Event</a></router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{  name: 'AddEvents' }"><a class="nav-link" style="color: black; font-size: larger;">Add Event</a></router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view></router-view>
</template>
 
<style>
.navbar{
  padding: 40em;
  width: max-content;
}
</style>