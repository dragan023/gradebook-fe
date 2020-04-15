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
    <b-card-text v-if="gradebook.students">
      Number of students: {{ gradebook.students.length }}
    </b-card-text>
    <b-card-text> Date of creation: {{ getDate(gradebook.created_at) }} </b-card-text>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'Gradebook',
  mixins: [dateMixin],

  computed: {
    ...mapGetters(['gradebook']),
  },
  methods: {
    ...mapActions(['getSingleGradebook']),
  },
  created() {
    this.getSingleGradebook(this.$route.params.id);
  },
};
</script>

<style></style>
