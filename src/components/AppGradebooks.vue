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
          <router-link :to="`gradebooks/${gradebook.id}`">{{
            gradebook.name
          }}</router-link>
        </td>

        <td v-if="gradebook.class_master">
          <router-link :to="`teachers/${gradebook.class_master.id}`">
            <span>
              {{ gradebook.class_master.first_name }} &nbsp;
              {{ gradebook.class_master.last_name }}
            </span>
          </router-link>
        </td>

        <td v-else>This gradebook doesnt have classmaster.</td>

        <td>
          {{ gradebook.created_at }}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>There are currently no gradebooks created.</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Gradebooks',
  computed: {
    ...mapGetters(['gradebooks']),
  },
  methods: {
    ...mapActions(['getGradebooks']),
  },
  created() {
    this.getGradebooks();
  },
};
</script>

<style></style>
