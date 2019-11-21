import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router"
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Clientes from "@/pages/Clientes.vue"
import Livros from "@/pages/Livros.vue"

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.use(Router)

const routes = [
  { path: '@/pages/Clientes.vue', component: Clientes },
  { path: '@/pages/Livros.vue', component: Livros }
]

new Vue({
  routes,
  render: h => h(App)
}).$mount('#app')
