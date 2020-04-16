<template>
  <div v-if="this.notTeacher">
    You currently dont have any Gradebooks.
    <b-button type="submit" variant="dark">Get Gradebook</b-button>
  </div>
  <div class="l-mygradebook" v-else>
    <div class="l-mygradebook-col">
      <div class="d-flex justify-content-between mb-3">
        <b-button
          v-if="checkIfMyGradebook"
          :to="`/gradebooks/${getGradebook.id}/create`"
          type="submit"
          variant="dark"
          >Add New Students</b-button
        >

        <h3>Students</h3>
      </div>
      <b-list-group v-if="gradebookHasStudents">
        <b-list-group-item
          v-for="student in getGradebook.students"
          :key="student.id"
        >
          <span>{{ student.first_name }}</span>
          <span> {{ student.last_name }}</span>
        </b-list-group-item>
      </b-list-group>

      <p v-else>This gradebook does not have any students yet.</p>
    </div>

    <div class="l-mygradebook-col">
      <b-jumbotron :header="getGradebook.name">
        <h5>
          Teacher:
          <router-link :to="`/teachers/${getTeacherId}`">
            {{ getTeacherFullname }}
          </router-link>
        </h5>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import store from '../store/index';

export default {
  name: 'AppMyGradebook',
  data() {
    return {
      notTeacher: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchCurrentUser').then(() => {
      if (to.params.id > 0) {
        store.dispatch('fetchSingleGradebook', to.params.id);
        next();
      } else if (store.getters.getCurrentUser.gradebook) {
        store.dispatch(
          'fetchSingleGradebook',
          store.getters.getCurrentUser.gradebook.id
        );
        next();
      } else {
        next((vm) => {
          vm.notTeacher = true;
        });
      }
    });
  },
  methods: {
    ...mapActions(['fetchCurrentUser', 'fetchSingleGradebook']),
  },
  computed: {
    ...mapGetters([
      'getGradebook',
      'getCurrentUser',
      'checkIfMyGradebook',
      'gradebookHasStudents',
    ]),
    getTeacherId() {
      return this.getGradebook.user && this.getGradebook.user.id;
    },
    getTeacherFullname() {
      return this.getGradebook.user
        ? `${this.getGradebook.user.first_name} ${this.getGradebook.user.last_name}`
        : '';
    },
    gradebookStudens() {
      return this.getGradebook.students;
    },
  },
};
</script>
