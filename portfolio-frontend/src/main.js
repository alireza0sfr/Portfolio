import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './plugins/components'
import JQuery from 'jquery'
window.$ = JQuery

createApp(App).use(store).use(router).use(components).mount('#app')
