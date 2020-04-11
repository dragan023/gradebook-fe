<template>
  <div id="app">
    <app-navbar />
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
