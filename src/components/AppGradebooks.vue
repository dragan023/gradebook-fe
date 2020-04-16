<template>
  <table class="table" v-if="gradebooks">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Class Teacher</th>
        <th scope="col">Date of Creation</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="gradebook in gradebooks" :key="gradebook.id">
        <td>
          <router-link :to="`gradebooks/${gradebook.id}`"
            >{{ gradebook.name }}
            <span v-if="gradebook.user_id == getCurrentUser.id">(Mine)</span>
          </router-link>
        </td>

        <td v-if="gradebook.user">
          <router-link :to="`teachers/${gradebook.user.id}`">
            <span>
              {{ gradebook.user.first_name }} &nbsp;
              {{ gradebook.user.last_name }}
            </span>
          </router-link>
        </td>

        <td v-else>This gradebook doesnt have classmaster.</td>

        <td>
          {{ getDate(gradebook.created_at) }}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>There are currently no gradebooks created.</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'Gradebooks',
  mixins: [dateMixin],
  computed: {
    ...mapGetters(['gradebooks', 'getCurrentUser']),
  },
  methods: {
    ...mapActions(['getGradebooks', 'fetchCurrentUser']),
  },
  created() {
    this.getGradebooks();
    this.fetchCurrentUser();
  },
};
</script>

<style></style>
