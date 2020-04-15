<template>
  <b-container class="bv-example-row pt-5">
    <b-row>
      <b-jumbotron v-if="teacher">
        <template v-slot:header
          >{{ teacher.first_name }} {{ teacher.last_name }}</template
        >
        <hr class="my-4" />
        <p>Gradebook:</p>
        <p>
          Name: <router-link :to="`/gradebooks/${teacher.gradebook.id}`" v-if="teacher.gradebook">{{ teacher.gradebook.name }}</router-link>
        </p>
        <p>
          Number of students:
          <span v-if="teacher.gradebook">{{ teacher.gradebook.students.length }}</span>
        </p>
      </b-jumbotron>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Gradebook',
  computed: {
    ...mapGetters(['teacher']),
  },
  methods: {
    ...mapActions(['getSingleTeacher', 'getGradebook']),
  },
  created() {
    this.getSingleTeacher(this.$route.params.id);
  },
};
</script>

<style></style>
