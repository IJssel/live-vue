import Vue from 'vue'

//头部
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

 //导入MUI
 import './lib/mui/css/mui.min.css'


import app from './App.vue'

var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})