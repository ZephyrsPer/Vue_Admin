import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/icon.less'
import "./style.css"

import pinia from "./store";
import router from './router';

import './permission' 

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
