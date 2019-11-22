import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Clientes from "./components/Clientes.vue"
import Livros from "./components/Livros.vue"
import Login from "./components/Login.vue"
import Menu from "./components/Menu.vue"

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  { path: '/', component: Login },
  { path: '/Clientes', component: Clientes },
  { path: '/Livros', component: Livros },
  { path: '/Menu', component: Menu }
    ]
  }
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
