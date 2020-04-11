<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
      <b-icon class="h2" icon="book-half" variant="warning"></b-icon>
      <span>Gradebook</span>
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">Login</b-nav-item>
      <b-nav-item href="#">Register</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
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
