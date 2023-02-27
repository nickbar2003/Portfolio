import { createApp } from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import TodoList from './components/TodoList/TodoList.vue'
import "./styles.css";
import * as VueRouter from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: TodoList },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app')
