<template>
  <div>
    <button @click='goRem'>rem适配页面</button>
    <h2 style="text-align: center">vue</h2>
    <h3 title="123">【css过渡--transition】</h3>
    <p>1、Internet Explorer 10、Firefox、Chrome 以及 Opera 支持 transition 属性。Internet Explorer 9 以及更早的版本，不支持 transition 属性。</p>
    <p> 2、Safari 需要前缀 -webkit-。Chrome 25 以及更早的版本，需要前缀 -webkit-。</p>
    <h3>【css多列属性】</h3>
    <div class="newspaper">人民网北京2月24日电 (记者 刘阳)国家发展改革委近日发出通知，决定自2月25日零时起将汽、柴油价格每吨分别提高300元和290元，折算到90号汽油和0号柴油（全国平均）每升零售价格分别提高0.22元和0.25元。 此次国内成品油价格调整幅度，是按照现行国内成品油价格形成机制，根据国际市场油价变化情况确定的。去年11月16日国内成品油价格调整以来，受市场预期欧美经济复苏前景向好以及中东局势持续动荡等因素影响，国际市场原油价格先抑后扬，2月上旬WTI和布伦特原油期货价格再次回升至每桶95美元和115美元以上。虽然近两日价格有所回落，但国内油价挂钩的国际市场三种原油连续22个工作日移动平均价格上涨幅度已超过4%，达到国内成品油价格调整的边界条件。
通知指出力度，依法查处不执行国家价格政策，以及囤积居奇、造谣惑众、合谋涨价、搭车涨价等违法行为，维护正常市场秩序。
    </div>
    <h3>【vue混入mixins】</h3>
    <h3>【vue--侦听器：可以侦听，watch中的字段发生改变时，处理相应的逻辑】</h3>
    <p>{{count}}</p>
    <button @click="clickBtn">点我--侦查watch</button>
    <h3>表达式</h3>
    <p>1、插值:{{val}}</p>
    <h3>指令</h3>
    <p v-if="show">1、v-if='true'</p>
    <!--<p v-else="show">1、v-else='true'</p>-->
    <template v-if="show">
      <p>我是template标签包裹的元素</p>
    </template>
    <h3 v-show="isShow">2.v-show</h3>
    <p>注意：v-if：false移除，true生成一个元素。v-show:显示，隐藏display:none 不支持template标签上使用v-show的</p>
    <h3>3.v-model</h3>
    <input type="text" v-model="value" debounce="1000">
    <p>value的值：{{value}}</p>
    <h3>4.v-for: in / of</h3>
    <!--<ul v-for="item of list">-->
      <!--<li>{{item.msg}}</li>-->
    <!--</ul>-->
    <h3>5.自定义指令作用：操作DOm</h3>
    <p v-love="lover"></p>
    <h3>6.自定义指令：deep</h3>
    <p v-friends="obj">{{obj.name}}</p>
    <button @click="change">改变</button>
    <h3>7.计算属性:计算属性的依赖发生改变时计算属性也会相应的发生变化，例如：此例子中的lover</h3>
    <p>翻转lover属性值刘浩楠：{{reverse}}</p>
    <button @click="reverseLover">点击后查看this.lover的值</button>
    <h3>8.自定义组件---注意组件的名字禁止使用head  body等关键字，否则该标签是不生效</h3>
    <zuJian></zuJian>
    <h3>9、父组件向子组件传值。</h3>
    <p>第一：在子组件prop中定义prop传的字段，在子组件需要显示的地方绑值</p>
    <p>第二：在引用该子组件的父组件标签中，添加属性为-子组件接受并已经定义的prop字段以及值</p>
    <headCom title="第一个文字"></headCom>
    <headCom title="第二行文字"></headCom>
    <headCom title="第三行文字"></headCom>
    <h3>10.通过prop传值，循环</h3>
    <headCom v-for="post in posts" v-bind:title="post.title" v-bind:key="post.id"></headCom>
    <h3>11.子组件通过事件向父组件发送消息</h3>
    <h4>第一：在子组件v-on:click="$emit('change-font',0.5)"，绑定点击事件，并发出一个事件</h4>
    <h4>第二：在父组件v-on:change-font="changeFont" ，v-on:绑定子组件发出的方法名</h4>
    <h5>点击p标签</h5>
    <headCom v-on:change-font="fontSize += 0.1" :style="{ fontSize: fontSize + 'em' }"></headCom>
    <h3>12.子组件传特定的值,每次fontSize变化特定的值</h3>
    <headCom v-on:change-font="changeFont" :style="{ fontSize: fontSize + 'em' }"></headCom>
    <h3>13、给prop动态赋值</h3>
    <headCom v-bind:title='val'></headCom>
    <h3>14、给prop动态赋值一个对象</h3>
    <obJect v-bind:object="{name:'杨慧',age:'18'}"></obJect>
    <p>15、插槽--具名插槽</p>
    <!--<slots>我是插入的部分</slots>-->
    <!--下面两者是一致的-->
    <slots>
      <p>我是main，我没有name属性</p>
      <p slot="footer">我是footer</p>
      <h1 slot="header">我是header</h1>
    </slots>
    <slots>
      <p>我是main，我没有name属性</p>
      <template slot="footer">
        <p>我是footer</p>
      </template>
      <template slot="header">
        <h1>我是header</h1>
      </template>
    </slots>
    <p>16、作用域插槽------------【作用域插槽的样式由父组件决定，内容却由子组件控制。简单来说：前两种插槽不能绑定数据，作用域插槽是一个带绑定数据的插槽。】
      如何在每次调用时能有各自的渲染效果？这就是作用域插槽的用武之地。作用域插槽就是父组件在调用子组件的时候给子组件传了一个插槽，这个插槽为作用域插槽，该插槽必须放在template标签里面，同时声明从子组件接收的数据放在一个自定义属性内，并定义该数据的渲染方式。通过下列展示作用域插槽的使用方式：</p>
    <slotsScope>
      <template slot-scope="newList">
        <h5>{{newList.item}}</h5>
      </template>
    </slotsScope>
    <slotsScope>
      <template slot-scope="newList">
        <li>{{newList.item}}</li>
      </template>
    </slotsScope>
    <!--<slotsScope></slotsScope>-->
    <h3>17.vue router路由的使用</h3>
    <h5>一、页面跳转《router-link》, 【to】:属性指定的是目标地址，当被点击后，内部会立刻把 to 的值传到 router.push()，使用router-link就相当于使用this.$route.push()；（注意：to为必填属性）
      【tag】:属性可以指定生成的标签，router-link标签默认会生成a标签，</h5>
    <router-link to="/home">点击进入home页</router-link>
    <router-link to="/home" tag="p">点击进入home页</router-link>
    <h5>二、用户地址栏对应的路由不存在。例如：http://localhost:8080/#/hhh</h5>
    <p>详情请见：index.js 路由配置中的 *</p>
    <h5>三、带参数的路由。/home?name=杨慧</h5>
    <router-link :to="{ path: 'home', query: { name: '杨慧' }}">点击进入home页,查看输出的路由参数</router-link>
    <h5>四、active-class属性：设置 链接激活时（鼠标点击住不放开时）使用的 CSS 类名</h5>
    <router-link :to="{ path: 'home', query: { name: '杨慧' }}" active-class="redFont">连接激活时查看文字颜色</router-link>
    <h5>五、router-view 的使用</h5>
    <h6>A:第一种使用方法</h6>
    <navbar></navbar>
    <h6>B:第二种使用方法</h6>
    <div class="navbar">
      <ul id="main">
        <li><router-link to="/navHome" >首页</router-link></li>
        <li><router-link to="/navFoot">食物</router-link></li>
        <li><router-link to="/navMine">我的</router-link></li>
      </ul>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <p>这里是子组件显示的内容</p>
      <router-view></router-view>
    </div>
    <h5>六、this.$router.push的使用。《router-link to='/home'》 等价于 router.push('home')</h5>
    <button @click="goHome">点击我去home页面</button>
    <h5>七、命名路由：在index.js文件routes配置中，给每一个路由设置name属性并且赋值，name属性值就是该路由的名字。例如：this.$router.push({name: 'home')，该路由会跳转至index.js路由配置中name为home的页面</h5>
    <!-- <p>===================2018.12.21=========================学习记录</p> -->
    <h5>八、命名视图：暂时无学习</h5>
    <h5>九、重定向:详细请看index.js文件下的redirect</h5>
    <p>在index.js中配置 / 的重定向为 /home, 当访问http://localhost:8080/#/ 时，页面的地址会替换成http://localhost:8080/#/home ，就会匹配/home这个路由，就会渲染/home路由对应的页面</p>
    <h5>十、别名：alias</h5>
    <p>【注意：需要先去index.js中把注释解开】访问http://localhost:8080/#/haha 与 http://localhost:8080/#/ 都会渲染HelloWorld组件 ，只是页面的url不同</p>
    <h5>十一、vue-router 的 history模式：如何去除vue项目中的 # 【详情：index.js中 / 下的配置 mode:'history'】</h5>
    <h5>十二、路由元信息：暂时无学习</h5>
    <h5>十三、守卫导航：暂时无学习</h5>
    <h5>十四、过渡动效、路由懒加载</h5>
    <h3>18、动态组件：暂未理解清楚</h3>
    <h3>19.vue 父子组件之间的通信</h3>
    <h3>20.vue 兄弟组件之间的通信</h3>
    <h3>21.vue中http请求：vue-resource和axios</h3>
    <h5>A:  vue-resource在vue-cli中的使用</h5>
    <p>1、npm install vue-resource 安装vue-resource</p>
    <p>4、在main.js中引入import vueResource from 'vue-resource'</p>
    <p>5、在main.js中引入Vue.use(vueResource)</p>
    <button @click="httpPost">按钮查看POST请求</button>
    <button @click="httpGet">按钮查看GET请求</button>
    <h3>22.vue 混入（mixins）</h3>

  </div>
</template>

<script>
import zuJian from './common-zujian'
import headCom from './common-head.vue'
import obJect from './common-obj.vue'
import slots from './common-slot.vue'
import slotsScope from './common-slot-scope.vue'
import navbar from './nav-bar/nav-shouye' // 引入nav-shouye组件，该组件中存在子组件
export default {
  data () {
    return {
      count: 0,
      fontSize: 1,
      msg: 'vue demo',
      val: '我是值',
      show: true,
      isShow: true,
      value: '',
      list: [
        {msg: '我是第一个'},
        {msg: '我是第二个'}
      ],
      lover: '刘浩楠',
      obj: {name: '西西', age: 18},
      posts: [
        { id: 1, title: '第一' },
        { id: 2, title: '第二' },
        { id: 3, title: '第三' }
      ]
    }
  },
  // 侦听器
  watch: {
    count () {
      alert('count字段发生了变化')
    }
  },
  created () {
    console.log(window)
    console.log(window.location)
  },
  // 组件
  components: {
    navbar,
    zuJian,
    headCom,
    obJect,
    slots,
    slotsScope
  },
  methods: {
    clickBtn () {
      this.count++
    },
    reverseLover () {
      this.lover = '123'
    },
    change () {
      this.obj.name = '哈哈'
    },
    changeFont (event) {
      console.log(event)
      this.fontSize += event
    },
    complate () {
      console.log('导航完成')
    },
    goHome () {
      // 该四种方式都是路由跳转页面的，后两种是可以直接跟参数的
      // this.$router.push('home')
      // this.$router.push({ path: 'home' })
      // this.$router.push({name: 'home', params: { userId: 123 }}) 此方法取参数从this.$router.params中取
      this.$router.push({path: 'home', query: { userId: '123' }}, this.complate) // 此方法取参数从this.$router.query中取
    },
    goRem () {
      this.$router.push({path: 'AppHome'})
    },
    httpPost () {
      var params = {
        userName: 17600299870,
        password: '12345qQ'
      }
      this.$http.post('https://app.baoxian.xujinkeji.com/login', params).then((response) => {
        response = response.body
        if (response.businessCode === '0000') {
          console.log(response)
          // this.$toast(response.msg)
          alert('登录成功')
        } else {
          // this.$toast(response.msg)
        }
      })
    },
    httpGet () {
      // 第一个参数为：请求的地址
      this.$http.get('https://app.baoxian.xujinkeji.com/insurance/app/api/v2.0/activity/body', {headers: {'Authorization': this.Authorization}}).then((response) => {
        response = response.body
        if (response.businessCode === '0000') {
          console.log('成功')
        } else {
          alert('失败')
        }
      })
    }
  },
  // 计算属性
  computed: {
    reverse () {
      return this.lover.split('').reverse().join('')
    }
  },
  // 自定义指令
  directives: {
    love (el, binding) {
      console.log(el) // 绑定该自定义指令的元素
      console.log(binding) // 一个对象里边包含了好多东西，已经输出可以详细查看
      el.innerHTML = '傻蛋是:' + binding.value // binding.value就是color颜色red。
    },
    friends (el, binding) {
      console.log(el) // 绑定该自定义指令的元素
      console.log(binding.value) // 一个对象里边包含了好多东西，已经输出可以详细查看
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .redFont{
    color:red;
    font-size:15px;
  }
  .newspaper{
    -moz-column-count:3; /* Firefox */
    -webkit-column-count:3; /* Safari and Chrome */
    column-count:4; /*分割成几列*/
    -moz-column-gap:40px;/* Firefox */
    -webkit-column-gap:40px; /* Safari 和 Chrome */
    column-gap:40px;/*列与列之间间隔的像素*/
    -moz-column-rule:3px outset #ff0000;/* Firefox */
    -webkit-column-rule:3px outset #ff0000;/* Safari and Chrome */
    column-rule:3px dashed #ff0000; /*列之间的宽度、颜色、样式*/
  }
</style>
