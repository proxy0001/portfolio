// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'normalize.css'

const App = r => require.ensure([], () => r(require('./App')), 'group-main')
const About = r => require.ensure([], () => r(require('./About')), 'group-about')
const Works = r => require.ensure([], () => r(require('./Works')), 'group-works')

Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {path: '/about', component: About},
  {path: '/works', component: Works},
  {path: '*', redirect: '/about'}
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
