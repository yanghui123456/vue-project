<template>
  <div>
    <ul>
      <!--<li v-for="item in list">{{item}}</li>-->
      <slot v-for="item in list" :item = item></slot>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  },
  props: {},
  created () {
  },
  methods: {},
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style>
</style>
