<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbars/Navbar.vue'
</script>

<template>
<Navbar></Navbar>
<div class="container container-fluid">
  <router-view></router-view>
</div>
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
