<template>
    <div>
      <p>我是page-home</p>
      <router-link to="/">点击进入首页</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {},
  created () {
    console.log(this.$route.query)
    console.log(this.$route)
  },
  methods: {},
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>

<style scoped>

</style>
