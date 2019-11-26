import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import Clientes from "./components/Clientes.vue";
import Livros from "./components/Livros.vue";
import Login from "./components/Login.vue";
import Menu from "./components/Menu.vue";
import Emprestimos from "./components/Emprestimos.vue";
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  { path: '/', component: Login },
  { path: '/Clientes', component: Clientes },
  { path: '/Emprestimos', component: Emprestimos },
  { path: '/Livros', component: Livros },
  { path: '/Menu', component: Menu }
    ]
  }
)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
