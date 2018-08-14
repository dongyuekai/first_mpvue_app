import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        // 页面级可配置的属性相当于只是‘src/main.js’中配置的‘window’部分
        "navigationBarTitleText": "计数页面"
    }
}