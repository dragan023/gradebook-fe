import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!window.localStorage.getItem('token')
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    }
  },
  mutations,
  actions
});
