<template>
  <div class="l-main__register">
    <b-form @submit.stop.prevent="login(user)">
      <b-form-group
        label="Email address:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Password:"
        label-for="password"
        description="We'll never share your password with anyone else."
        class="mb-1"
      >
        <b-form-input
          id="password"
          v-model="user.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <div class="text-danger" v-if="getErrors.error">
        <p class="text-capitalize">
          {{ getErrors.error.replace('_', ' ') }}
        </p>
      </div>
      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppRegister',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(['login']),
  },
  computed: {
    ...mapGetters(['getErrors']),
  },
};
</script>
