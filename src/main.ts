import { createApp } from 'vue'
import './style.css'
import TDesign from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';
import App from './App.vue'
import router from "./router/index" 

const app =createApp(App)
app.use(TDesign)
app.use(router)
app.mount('#app')
