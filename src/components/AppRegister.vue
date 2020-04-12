<template>
  <div class="l-main__register">
    <b-form @submit.stop.prevent="registerUser(user)">
      <b-form-group label="First name" label-for="first_name">
        <b-form-input
          id="first_name"
          v-model="user.first_name"
          type="text"
          required
          placeholder="Enter your first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Last name" label-for="last_name">
        <b-form-input
          id="last_name"
          v-model="user.last_name"
          type="text"
          required
          placeholder="Enter your last name"
        ></b-form-input>
      </b-form-group>

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
      >
        <b-form-input
          id="password"
          v-model="user.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Confirm password:" label-for="password_confirmation">
        <b-form-input
          id="password_confirmation"
          v-model="user.password_confirmation"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppRegister',
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(['registerUser'])
  }
};
</script>

