<template>
  <div class="navbar">
  <ul id="main">
    <li><router-link to="/navFoot">食物</router-link></li>
    <li><router-link to="/navHome" >首页</router-link></li>
    <li><router-link to="/navMine">我的</router-link></li>
  </ul>
  <!-- 路由匹配到的组件将渲染在这里 -->
    <p>这里是子组件显示的内容</p>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>

</style>
