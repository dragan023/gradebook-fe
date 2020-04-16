export default {
  login(state) {
    state.isLoggedIn = true;
  },

  logout(state) {
    state.isLoggedIn = false;
  },

  setGradebooks(state, gradebooks) {
    state.gradebooks = gradebooks;
  },

  setGradebook(state, gradebook) {
    state.gradebook = gradebook;
  },

  setTeacher(state, teacher) {
    state.teacher = teacher;
  },

  setTeachers(state, teachers) {
    state.allTeachers = teachers;
  },

  setCurrentUser(state, currentUser) {
    state.currentUser = currentUser;
  },

  setDeletedGradebook(state, deletedGradebook) {
    state.deletedGradebook = deletedGradebook;
  },

  storeErrors(state, errors) {
    state.errors = errors;
  },

  setComment(state, comment) {
    state.comment = comment;
  }
};
