import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import MenuView from './views/MenuView.vue'
import NewsView from './views/NewsView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/carte', component: MenuView },
    { path: '/actualites', component: NewsView },
    { path: '/a-propos', component: AboutView },
    { path: '/contact', component: ContactView },
  ],
})

createApp(App).use(router).mount('#app')
