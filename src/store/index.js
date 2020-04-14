import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!window.localStorage.getItem('token'),
    gradebooks: [],
    professors: [],
    gradebook: {},
    teacher: {}
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },
    gradebooks: state => state.gradebooks,
    gradebook: state => state.gradebook,
    teacher: state => state.teacher
  },
  mutations,
  actions
});
