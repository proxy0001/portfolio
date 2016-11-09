<template>
  <header>
    <div class="container flexbox">
      <div class="f-1">
        <p>{{ logo }}</p>  
      </div>
      <div class="f-4">
        <nav class="flexbox">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link  v-for="nav in navsReverse" :to="nav.path">
            {{ nav.name }}
          </router-link>
        </nav>  
      </div>
      
    </div>
  </header>  
</template>
<script>
export default {
  name: 'header',
  data () {
    return {
      logo: 'proxy0001',
      navs: [
        {name: 'About', path: '/about'},
        {name: 'Works', path: '/works'}
      ]
    }
  },
  computed: {
    navsReverse: function () {
      return this.navs.reverse()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../sass/main.sass'

header
  position: fixed
  top: 0
  left: 0
  width: 100%
  background: rgba($color-gs-0, .95)
  z-index: 1
  padding: $dp-3 0
  .flexbox.container
    min-height: $header-min-height
    // justify-content: center
    align-items: center
    nav.flexbox
      flex-direction: row-reverse 
      a.router-link-active
        color: $color-main
        cursor: default
      a:hover
        color: $color-main
      a
        padding-left: $dp-6
        +respond-to(mobile)
          font-size: 3rem
    p
      +respond-to(mobile)
        font-size: 3rem
        
          
    nav  

</style>
