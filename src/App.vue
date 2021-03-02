<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <sidebar-com></sidebar-com>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
import sidebarCom from './components/sidebarCom'

export default {
  name: 'App',
  components: {
    sidebarCom,
    HelloWorld
  },
  computed: {
    ...mapState(['themeType'])
  },
  mounted () {
    window.document.documentElement.setAttribute('data-theme', this.themeType)
  },
}
</script>

<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  .title {
    position: absolute;
    letter-spacing: 0;
    @include fontSize(34px,40px);
    @include font_color('logoTitleColor');
    top: 24px;
    right: 24px;
    font-weight: 700;
    text-align: right;
    z-index: 999;
  }
  .sidebar-box {
    width: 78px;
    height: 100%;
  }
  .main-wrapper {
    width: calc(100% - 78px);
    height: 100%;
    box-sizing: border-box;
    @include background_color("routerChangeBgColor");
    &.pagewidth {
      width: 100%;
    }
  }
}
</style>
