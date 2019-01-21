<template>
  <!--一个按钮组件-->
  <div>
    <h5>我是slot组件</h5>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {},
  created () {},
  methods: {},
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style>
</style>
