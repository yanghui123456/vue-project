<!--首页页面-->
<template>
  <div class="home">
    <headTitle title="首页">
      <span class="left" slot="left">
        <i class="iconfont icon-sousuo5"></i>
      </span>
      <span class="right" slot="right">搜索</span>
    </headTitle>
    <!--swiper-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/home-swiper1.jpg" alt="第一张">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/home-swiper2.jpg" alt="第二张">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/home-swiper3.jpg" alt="第三张">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->
      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>
</template>
<script>import Swiper from 'swiper'
import headTitle from './slot-header.vue'

export default {
  components: {
    headTitle
  },
  data () {
    return {
    }
  },
  mounted () {
    var a = new Swiper('.swiper-container', {
      autoplay: true, // 是否自动播放（自动播放的间隔时间可以调，详情见官网配置）
      loop: true, // 轮播切换
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    })
    console.log(a)
  },
  created () {
  },
  methods: {
  },
  // 计算属性
  computed: {},
  // 自定义指令
  directives: {}
}
</script>
<style scoped lang="scss">
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
  /*scss中是可以定义function的*/
  @function px2rem($px) {
    /*基准值以iphone为准，357 / 10 的基准值*/
    $rem:37.5px;
    @return ($px /  $rem ) + rem
  }
  .home{
    width:100%;
    height:100%;
    background: rgb(245,245,245);
    overflow: auto;
    padding-bottom:px2rem(50px);
    box-sizing: border-box;
    .swiper-container {
      width: 100%;
      height: px2rem(200px);
      img{
        width:100%;
        height:100%;
      }
      .swiper-pagination-fraction{
        font-size:px2rem(14px);
      }
    }
  }
</style>
