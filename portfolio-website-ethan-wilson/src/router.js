import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import MyProjects from './components/MyProjects.vue';
import ContactInfo from './components/ContactInfo.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/about', name: 'about', component: AboutMe },
  { path: '/portfolio', name: 'portfolio', component: MyProjects },
  { path: '/contact', name: 'contact', component: ContactInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
