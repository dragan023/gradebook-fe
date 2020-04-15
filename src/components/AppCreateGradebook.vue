<template>
  <div class="l-main__register">
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="input-group-2"
        label="Gradebook Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="gradebook.name"
          required
          placeholder="Enter gradebook name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Choose Classmaster:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="gradebook.user_id"
          :options="availableTeachers"
        ></b-form-select>
      </b-form-group>

      {{ gradebook }}

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppCreateGradebook',
  data() {
    return {
      gradebook: {},
    };
  },
  methods: {
    ...mapActions(['getTeachers', 'createGradebook']),
    onSubmit() {
      this.createGradebook(this.gradebook);
      this.gradebook = {}
      this.$router.push('/')
    },
  },
  computed: {
    ...mapGetters(['allTeachers', 'availableTeachers']),
  },
  created() {
    this.getTeachers();
  },
};
</script>

<style></style>
