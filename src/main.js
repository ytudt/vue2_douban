// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

//  eslint-disable no-new
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routes from './routes'
import store from './store/'
import './scss/common.scss'
import './css/reset.css'
import './css/index.css'
// import Vue from 'vue'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'

// Vue.use(Mint);
// import App from './App.vue'
Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.use(ElementUI)

// const Bar = { template: '<div>bar111</div>' }
    // const routers =[{path: '/', component: Bar}]
// const routes = [
//     { path: '/', component: App }
// ]
const router = new VueRouter({
  // mode: 'history',
  routes
  // scrollBehavior (to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   console.log(22222)
  //   return {x:0,y:100}
  // }
})
// new Vue({store, router }).$mount('#app')
new Vue({
  // el: '#app',
  // template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')
