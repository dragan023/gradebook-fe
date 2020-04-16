import { authService } from '../services/auth';
import gradebookService from '../services/gradebook';
import teacherService from '../services/teacher';
import { router } from '../router';

export default {
  async registerUser({ commit }, user) {
    await authService.registerUser(user);
    commit('login');
    router.push('/');
  },

  async login({ commit }, user) {
    await authService.login(user);
    commit('login');
    router.push('/');
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

  async fetchCurrentUser({ commit }) {
    const currentUser = await authService.getCurrentUser();

    commit('setCurrentUser', currentUser.data.user);
  }
};
