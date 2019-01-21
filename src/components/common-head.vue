<template>
   <!--一个按钮组件-->
  <div>
    <button v-on:click="count++">点击我:{{count}}{{title}}</button>
    <p v-on:click="$emit('change-font',0.5)">我是p标签</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  // props指定类型，title字符串类型，obj为对象
  // props: {
  //   title: String,
  //   likes: Number,
  //   isPublished: Boolean,
  //   commentIds: Array,
  //   author: Object
  // }
  props: ['title'],
  // props: {
  //   title: String,
  //   obj: Object
  // },
  created () {},
  methods: {
    click () {
      this.count++
    }
  },
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style>
</style>
