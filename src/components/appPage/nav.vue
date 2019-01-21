<!--底部菜单组件-->
<template>
  <div class="nav">
    <div class="item" :class="{on: $route.path == '/apphome'}" @click="goTo('apphome')">
      <span class="icon"><i class="iconfont icon-home"></i></span>
      <span class="text">首页</span>
    </div>
    <div class="item" :class="{on: $route.path == '/customer'}" @click="goTo('customer')">
      <span class="icon"><i class="iconfont icon-iconfont"></i></span>
      <span class="text">客户</span>
    </div>
    <div class="item" :class="{on: $route.path == '/pyq'}" @click="goTo('pyq')">
      <span class="icon"><i class="iconfont icon-pengyouquan"></i></span>
      <span class="text">朋友圈</span>
    </div>
    <div class="item" :class="{on: $route.path == '/mine'}" @click="goTo('mine')">
      <span class="icon"><i class="iconfont icon-wode"></i></span>
      <span class="text">我的</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {
    goTo: function (path) {
      this.$router.replace(path)
    }
  },
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style lang="scss" scoped>
  @function px2rem($px) {
    /*基准值以iphone为准，357 / 10 的基准值*/
    $rem:37.5px;
    @return ($px /  $rem ) + rem
  }
  .nav{
    width:100%;
    height:px2rem(50px);
    background: #fff;
    position: fixed;
    bottom:0;
    left:0;
    border-top:px2rem(1px) solid #eee;
    z-index:100;
    display: flex;
    .item{
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      color:#999;
      .icon{
        display: inline-block;
        width:100%;
        position: relative;
        text-align: center;
        .iconfont{
          font-size:px2rem(14px);
          position: absolute;
          top:px2rem(8px);
          left:50%;
          margin-left:px2rem(-7px);
        }
      }
      .text{
        display: inline-block;
        width:100%;
        font-size:px2rem(12px);
        margin-bottom:px2rem(4px);
      }
    }
    /*选中时的颜色*/
    .on{
      color:rgb(246,161,34);
    }
  }
</style>
