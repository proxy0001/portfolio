<template>
  <div class="app container">
    <v-header></v-header>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> 
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'v-header': Header
  }
}
</script>

<style lang="sass">
@import './sass/main.sass'

.app 
  font-family: $font-default
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $color-default
.app.container
  margin-top: $header-min-height

</style>
