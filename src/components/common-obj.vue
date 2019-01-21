<template>
  <!--一个按钮组件-->
  <div>
    <p>{{object.age}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
  props: {
    object: Object
  },
  created () {},
  methods: {
  },
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style>
</style>
