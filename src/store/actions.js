import { authService } from '../services/auth';
import gradebookService from '../services/gradebook';
import teacherService from '../services/teacher';
import studentService from '../services/student';
import { router } from '../router';

export default {
  async registerUser({ commit }, user) {
    try {
      await authService.registerUser(user);
      commit('login');
      router.push('/');
    } catch (error) {
      commit('storeErrors', error.response.data);
    }
  },

  async login({ commit }, user) {
    try {
      await authService.login(user);
      commit('login');
      router.push('/');
    } catch (error) {
      commit('storeErrors', error.response.data);
    }
  },

  async logout({ commit }) {
    await authService.logout();
    commit('logout');
    router.push('/login');
  },

  async getGradebooks({ commit }) {
    const gradebooks = await gradebookService.getGradebooks();
    commit('setGradebooks', gradebooks);
  },

  async fetchSingleGradebook({ commit }, gradebookId) {
    const gradebook = await gradebookService.getSingleGradebook(gradebookId);

    commit('setGradebook', gradebook);
  },

  async getSingleTeacher({ commit }, teacherId) {
    const teacher = await teacherService.getSingleTeacher(teacherId);

    commit('setTeacher', teacher);
  },

  async getTeachers({ commit }) {
    const teachers = await teacherService.getTeachers();

    commit('setTeachers', teachers);
  },

  async createGradebook({ commit }, gradebook) {
    const createdGradebook = await gradebookService.createGradebook(gradebook);

    commit('setGradebook', createdGradebook);
  },

  async deleteGradebook({ commit }, gradebookId) {
    const deletedGradebook = await gradebookService.deleteGradebook(
      gradebookId
    );

    commit('setDeletedGradebook', deletedGradebook);
  },

  async fetchCurrentUser({ commit }) {
    const currentUser = await authService.getCurrentUser();

    commit('setCurrentUser', currentUser.data.user);
  },

  async createStudent({ commit }, student) {
    const createdStudent = await studentService.createStudent(student);

    commit('setCurrentUser', createdStudent);
  },

  async createComment({ commit }, comment) {
    const createdComment = await gradebookService.createComment(comment);

    commit('setComment', createdComment);
  },
};
