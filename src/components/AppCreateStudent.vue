<template>
  <div v-if="this.teacher">
    <div class="l-main__register">
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group
          id="input-group-2"
          label="Student first name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="student.first_name"
            required
            placeholder="Enter student first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Student last name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="student.last_name"
            required
            placeholder="Enter student last name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Student image:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="student.image_url"
            required
            placeholder="Enter url"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
  </div>

  <div v-else>
    <p>Sorry, you need student in order to add students.</p>
    <b-button to="/students/create" type="submit" variant="dark"
      >Add student</b-button
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import store from '../store/index';

export default {
  name: 'AppMystudent',
  data() {
    return {
      teacher: {},
      student: {},
      prevRoute: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchCurrentUser').then(() => {
      next((vm) => {
        if (store.getters.checkIfUserIsTeacher) {
          vm.teacher = true;
          vm.student.gradebook_id = store.getters.getCurrentUser.gradebook.id;
        } else {
          vm.teacher = false;
        }
        vm.prevRoute = from;
      });
    });
  },
  methods: {
    ...mapActions(['fetchCurrentUser', 'fetchSinglestudent', 'createStudent']),
    onSubmit() {
      this.createStudent(this.student);
      this.$router.push(this.getPrevRoute);
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    getPrevRoute() {
      return this.prevRoute ? this.prevRoute.path : '/';
    },
  },
};
</script>
