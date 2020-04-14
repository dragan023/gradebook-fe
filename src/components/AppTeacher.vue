<template>
  <b-card
    v-if="teacher"
    :title="teacher.first_name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="gradebook"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Gradebook',
  computed: {
    ...mapGetters(['teacher'])
  },
  methods: {
    ...mapActions(['getSingleTeacher'])
  },
  created() {
    this.getSingleTeacher(this.$route.params.id);
  }
};
</script>

<style></style>
