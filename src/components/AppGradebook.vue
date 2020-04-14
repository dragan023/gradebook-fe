<template>
  <b-card
    v-if="gradebook"
    :title="gradebook.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="gradebook"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text> Date of creation: {{ gradebook.created_at }} </b-card-text>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Gradebook',
  computed: {
    ...mapGetters(['gradebook'])
  },
  methods: {
    ...mapActions(['getSingleGradebook'])
  },
  created() {
    this.getSingleGradebook(this.$route.params.id);
  }
};
</script>

<style></style>
