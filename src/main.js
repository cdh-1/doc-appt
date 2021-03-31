import Vue from 'vue'
import App from './App.vue'
import router from './router/routes.js'
import store from './store'
import VueGoodTablePlugin from 'vue-good-table';
// import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-good-table/dist/vue-good-table.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' 

Vue.use(VueMaterial)
Vue.use(VueGoodTablePlugin);
Vue.config.productionTip = false

// Vue.use(VueRouter);

// configure router
// const router = new VueRouter({
//   // mode: 'history',
//   base: process.env.BASE_URL,
//   routes, // short for routes: routes
//   linkActiveClass: 'active'
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   store,
//   router,
// }) 