<template>
  <div>
    <button @click="$router.back()">返回上一页</button>
    <p>登录</p>
  </div>
</template>
<script>
//  是否展示底部菜单栏：通过index.js中的路由mate标签来控制
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {},
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style lang="scss" rel="stylesheet/stylus">
</style>
