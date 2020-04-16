<template>
  <div class="mt-3" v-if="this.notTeacher">
    You currently dont have any Gradebooks.
    <b-button class="ml-4" to="/gradebooks/create" type="submit" variant="dark"
      >Add Gradebook</b-button
    >
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
        <b-button
          v-b-modal.modal-1
          v-if="checkIfMyGradebook"
          type="submit"
          variant="danger"
          >Delete Gradebook</b-button
        >
      </b-jumbotron>
      <h5>Comments</h5>
      <b-list-group>
        <b-list-group-item
          v-for="comment in getGradebook.comments"
          :key="comment.id"
        >
          <b-avatar
            href="#foobar"
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar
          ><span class="ml-2">{{ comment.author }}</span>
          <hr />
          <p>{{ comment.content }}</p>
        </b-list-group-item>
      </b-list-group>

      <h5 class="mt-4">Leave a comment:</h5>
      <b-form @submit.stop.prevent="handleSubmitComment">
        <b-form-textarea
          id="textarea"
          v-model="comment.content"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-button class="mt-3" type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
    <b-modal id="modal-1" title="Are you sure?" @ok="handleDelete()"> </b-modal>
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
      comment: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchCurrentUser').then(() => {
      if (to.params.id > 0) {
        store.dispatch('fetchSingleGradebook', to.params.id);
        next((vm) => {
          vm.comment.author = store.getters.getCurrentUser.first_name;
          vm.comment.gradebook_id = store.getters.getGradebook.id;
        });
      } else if (store.getters.getCurrentUser.gradebook) {
        store.dispatch(
          'fetchSingleGradebook',
          store.getters.getCurrentUser.gradebook.id
        );
        next((vm) => {
          vm.comment.author = store.getters.getCurrentUser.first_name;
          vm.comment.gradebook_id = store.getters.getGradebook.id;
        });
      } else {
        next((vm) => {
          vm.notTeacher = true;
        });
      }
    });
  },
  methods: {
    ...mapActions([
      'c',
      'fetchSingleGradebook',
      'deleteGradebook',
      'createComment',
      'getGradebooks',
    ]),
    async handleDelete() {
      await this.deleteGradebook(this.getCurrentUser.gradebook.id);
      this.$router.push('/');
    },
    handleSubmitComment() {
      this.createComment(this.comment).then(() => {
        this.fetchSingleGradebook(this.getCurrentUser.gradebook.id);
        this.comment = {};
      });
    },
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
  },
};
</script>

<style lang="scss">
.modal-body {
  padding: 0;
}

.modal-footer,
.modal-header {
  border: none;
}
</style>
