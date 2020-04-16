import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/AppLogin';
import Register from './components/AppRegister';
import Gradebooks from './components/AppGradebooks';
import Teacher from './components/AppTeacher';
import TeacherList from './components/AppTeacherList';
import CreateGradebook from './components/AppCreateGradebook';
import MyGradebook from './components/AppMyGradebook';

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Gradebooks, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/gradebooks/create', component: CreateGradebook, name: 'create-gradebook' },
  { path: '/gradebooks/:id', component: MyGradebook, name: 'gradebook' },
  { path: '/teachers', component: TeacherList, name: 'teachers-list' },
  { path: '/teachers/:id', component: Teacher, name: 'teacher' },
  { path: '/my-gradebook', component: MyGradebook, name: 'my-gradebook' },
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