import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'styles/iconfont.scss';
import 'styles/border.css';
import 'styles/reset.css';
import 'styles/common.scss'

import 'js/fastclick.js';
import 'js/common.js'


createApp(App).use(router).mount('#app')
