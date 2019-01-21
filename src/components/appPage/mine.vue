<!--我的页面-->
<template>
  <div class="mine">
    <headTitle title="我的"></headTitle>
    <router-link to="/login" tag="p">
      <div class="logBtn">登录</div>
    </router-link>
    <div class="item">
    <img src="../../assets/htb.png" alt="icon" class="icon">
    <img src="../../assets/join.png" alt="icon" class="join">
    基本信息
    </div>
    <div class="item">
    <img src="../../assets/htb.png" alt="icon" class="icon">
    <img src="../../assets/join.png" alt="icon" class="join">
    我的VIP
    </div>
    <div class="item">
    <img src="../../assets/htb.png" alt="icon" class="icon">
    <img src="../../assets/join.png" alt="icon" class="join">
    我的团队
    </div>
    <div class="item">
    <img src="../../assets/htb.png" alt="icon" class="icon">
    <img src="../../assets/join.png" alt="icon" class="join">
    常见问题
    </div>
  </div>
</template>
<script>
import headTitle from './slot-header.vue'
export default {
  components: {
    headTitle
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
  .mine{
    width:100%;
    height:100%;
    background: rgb(245,245,245);
    overflow: auto;
    padding-bottom:px2rem(50px);
    box-sizing: border-box;
    /*登录按钮*/
    .logBtn{
      width:92%;
      height:px2rem(40px);
      line-height: px2rem(40px);
      margin-left:4%;
      background: rgb(246,161,34);
      font-size:px2rem(14px);
      border-radius:px2rem(10px);
      text-align: center;
      color:white;
      margin-top:px2rem(10px);
    }
    .item{
      width:100%;
      padding-left:px2rem(46px);
      height:px2rem(50px);
      line-height:px2rem(50px);
      font-size:px2rem(13px);
      color:black;
      box-sizing: border-box;
      background: white;
      position: relative;
      margin-top:px2rem(10px);
      .icon{
        width:px2rem(16px);
        height:px2rem(16px);
        position: absolute;
        top:px2rem(17px);
        left:px2rem(15px);
      }
      .join {
        width:px2rem(16px);
        height:px2rem(16px);
        position: absolute;
        top:px2rem(17px);
        right:px2rem(23px);
      }
    }
  }
</style>
