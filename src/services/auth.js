import baseService from './base';

export default class AuthService {
  constructor() {
    this.setDefaultHeaders(localStorage.getItem('token'))
  }

  async registerUser(user) {
    const response = await baseService.post('/register', user);
    this.setDefaultHeaders(response.data.token)

    return response;
  }

  async login(user) {
    const response = await baseService.post('/login', user)
    this.setDefaultHeaders(response.data.token)

    return response;
  }

  async logout() {
    return new Promise((resolve) => {
      baseService.defaults.headers.common['Authorization'] = ``;
      localStorage.removeItem('token');

      resolve();
    })
  }

  setDefaultHeaders(token) {
    if (!token) {
      return;
    }

    localStorage.setItem('token', token)
    baseService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

}

export const authService = new AuthService();
