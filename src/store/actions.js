import { authService } from '../services/auth';
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
  }
};
