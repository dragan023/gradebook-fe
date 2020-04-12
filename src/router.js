import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/AppLogin';
import Register from './components/AppRegister';
import Gradebooks from './components/AppGradebooks';

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Gradebooks, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if ((to.name !== 'login' && to.name !=='register') && !isAuthenticated) {
    next({ name: 'login' })

    return;
  } else if ((to.name === 'login' || to.name ==='register') && isAuthenticated) {
    return next({name: 'home'})
  }
  else next()
})