import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import ContactView from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
