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
    teacher: {},
    allTeachers: [],
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    gradebooks: (state) => state.gradebooks,
    gradebook: (state) => state.gradebook,
    teacher: (state) => state.teacher,
    allTeachers: (state) => state.allTeachers,
    availableTeachers: (state) =>
      state.allTeachers
        .filter((teacher) => !teacher.gradebook)
        .map((item) => {
          let teacher = {};
          teacher.value = item.id;
          teacher.text = item.first_name;
          return teacher;
        }),
  },
  mutations,
  actions,
});
