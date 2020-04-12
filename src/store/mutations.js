export default {
  login(state) {
    state.isLoggedIn = true;
  },

  logout(state) {
    state.isLoggedIn = false;
    console.log(state)
  }
};
