<template>
  <div id="app">
    <div class="container">
      <vue-header></vue-header>
    </div>
    <div class="container">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive>  -->
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    vueHeader:Header,
  }
}
</script>

<style>

</style>
