import Vue from 'vue'
import Router from 'vue-router' // 引入router
// import HelloWorld from '@/components/HelloWorld'
import PageHome from '@/components/page-home'
import PageNoting from '@/components/page-noting'
// import NavHome from '@/components/nav-bar/nav-home'
// import NavFoot from '@/components/nav-bar/nav-foot'
// import NavMine from '@/components/nav-bar/nav-mine'
import AppHome from '@/components/appPage/home'
import Nav from '@/components/appPage/nav'
import Mine from '@/components/appPage/mine'
import Pyq from '@/components/appPage/pyq'
import Customer from '@/components/appPage/customer'
import Login from '@/components/appPage/login'

Vue.use(Router) // 使用router

export default new Router({
  // 加上mode:'history'以后去点击按钮到home页面，
  // url为：http://localhost:8080/home?userId=123，
  // 去掉该配置后url为：http://localhost:8080/#/home?userId=123
  // mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'AppHome',
      // component: AppHome,
      // name: 'HelloWorld',
      // component: HelloWorld,
      // children: [
      //   {
      //     path: 'navHome',
      //     name: 'NavHome',
      //     component: NavHome
      //   },
      //   {
      //     path: 'navFoot',
      //     name: 'NavFoot',
      //     component: NavFoot
      //   },
      //   {
      //     path: 'navMine',
      //     name: 'NavMine',
      //     component: NavMine
      //   }
      // ]
      // alias: '/haha' // 别名 访问http://localhost:8080/#/haha 与 http://localhost:8080/#/ 都会渲染HelloWorld组件 ，只是路径不同
      redirect: '/apphome' // 路由重定向，/是默认页面，运行后打开的页面是helloWorld页面，redirect是路由重定向，页面会重定向到path为 /home 对应的组件页面
    },
    {
      path: '/home',
      name: 'home',
      component: PageHome
    },
    // APP项目的页面
    // 主页
    {
      path: '/apphome',
      name: 'AppHome',
      component: AppHome,
      meta: {
        showFooter: true
      }
    },
    // 客户
    {
      path: '/customer',
      name: 'Customer',
      component: Customer,
      meta: {
        showFooter: true
      }
    },
    // 朋友圈
    {
      path: '/pyq',
      name: 'Pyq',
      component: Pyq,
      meta: {
        showFooter: true
      }
    },
    // 我的
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        showFooter: true
      }
    },
    // 登录
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 底部菜单组件
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    // 该 * 表示用户地址栏输入的地址路由未匹配到
    {
      path: '*',
      name: 'PageNoting',
      component: PageNoting
    }
  ]
})
