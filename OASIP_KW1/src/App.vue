<script setup>

</script>
 
<template>
<nav class="navbar navbar-expand-lg navbar-warning bg-secondary">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home'}"><a class="nav-link">Home</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventCategory'}"><a class="nav-link">Category</a></router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'EventListAll'}"><a class="nav-link">Event</a></router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{  name: 'AddEvents' }"><a class="nav-link">Add Event</a></router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view></router-view>
</template>
 
<style>
.navbar{
  padding: 39em;
  width: max-content;
}
</style>