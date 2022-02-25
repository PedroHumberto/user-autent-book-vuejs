import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Input from './components/Input.vue'

createApp(App)
    .use(router)
    .use(store)
    .component('input', Input)
    .mount('#app')
