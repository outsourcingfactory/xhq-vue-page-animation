// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// xhq 2019/4/11 添加 Fastclick 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
// let theme='1'; //拿到当前主题名字 一般通过ajax 拿到
// import defaullt   //导入default 默认的less
// import {theme1,theme2} from './theme'  //这里导入主题配置文件
// window.less.modifyVars({
//     '@Bg':theme1.bg,
//     '@font':theme1.font
// })
// window.less.modifyVars({
//     // '@aaaa':200
// })
// window.less.modifyVars({
//     'bg-color':black
// })



Vue.config.productionTip = false;
// window.$configTheme='test';

//混合
Vue.mixin({
    created(){
        //在这里 判断 引入不同的样式 但是这样的话 基本我引入的都是全局的css
    },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created(){

      // console.info(less.modifyVars);
    console.log('Vue is run');
  }
})
