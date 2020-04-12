<template>
  <div id="app">
    <div class="l-nav">
      <app-navbar />
    </div>
    <div class="l-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar';

export default {
  name: 'App',
  components: {
    AppNavbar
  }
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
