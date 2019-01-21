<template>
  <div id="app">
    <router-view/>
    <navBottom v-show="this.$route.meta.showFooter"></navBottom>
  </div>
</template>

<script>import navBottom from './components/appPage/nav.vue'
export default {
  components: {
    navBottom
  },
  name: 'App',
  created () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
