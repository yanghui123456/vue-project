<!--每个页面顶部的title,中间穿的值不一样，左边和右边显示的不一样-->
<template>
  <div class="header">
    {{title}}
    <slot></slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
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
<style lang="scss">
  /*scss中是可以定义function的*/
  @function px2rem($px) {
    /*基准值以iphone为准，357 / 10 的基准值*/
    $rem:37.5px;
    @return ($px /  $rem ) + rem
  }
  .header{
    width:100%;
    height:px2rem(50px);
    line-height:px2rem(50px);
    background: rgb(246,161,34);
    text-align: center;
    font-size:px2rem(16px);
    font-weight: bold;
    position: relative;
    color:white;
    .left,.right{
      position: absolute;
      top:0;
    }
    .left{
      left:px2rem(15px);
      .iconfont{
        font-size:20px;
      }
    }
    .right{
      font-weight: normal;
      right:px2rem(15px);
      font-size:px2rem(13px);
    }
  }
</style>
