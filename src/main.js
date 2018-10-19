import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Game1 } from './components/Game1.vue';
Vue.config.productionTip = false

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/game1', name: 'game1', component: require( './components/Game1.vue' ).default },
  { path: '/game2', component: Game1 }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
