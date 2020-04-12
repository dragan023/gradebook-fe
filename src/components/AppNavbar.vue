<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
      <b-icon class="h2" icon="book-half" variant="warning"></b-icon>
      <span>Gradebook</span>
    </b-navbar-brand>

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
  created() {
    console.log(this.$store.state)
  },
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
</style>
