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
    currentUser: {},
    errors: {}
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    gradebooks: (state) => state.gradebooks,
    getGradebook: (state) => state.gradebook,
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
    getCurrentUser: (state) => state.currentUser,
    checkIfMyGradebook: state => state.gradebook.user_id == state.currentUser.id,
    gradebookHasStudents: state => state.gradebook.students && !state.gradebook.students.length.gradebook,
    checkIfUserIsTeacher: state => state.currentUser.gradebook && state.currentUser.gradebook,
    getErrors: state => state.errors && state.errors
  },
  mutations,
  actions,
});
