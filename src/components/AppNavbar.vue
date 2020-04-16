<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <b-icon class="h2" icon="book-half" variant="warning"></b-icon>
      <span>My Gradebook</span>
    </b-navbar-brand>
    <b-navbar-nav v-if="isLoggedIn" class="l-nav-center">
      <b-nav-item to="/">Gradebooks</b-nav-item>
      <b-nav-item to="/teachers">All professors</b-nav-item>
      <b-nav-item to="/my-gradebook">My Gradebook</b-nav-item>
      <b-nav-item to="/gradebooks/create">Add Gradebook</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="!isLoggedIn" to="login">Login</b-nav-item>
      <b-nav-item v-if="!isLoggedIn" to="register">Register</b-nav-item>
      <b-nav-item v-if="isLoggedIn" @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  display: flex;
}

.navbar-brand {
  > svg {
    margin-right: 1rem;
  }
}

.l-nav-center {
  margin: 0 auto;
}
</style>
