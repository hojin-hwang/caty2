import { createApp } from 'vue'
import App from './App.vue'
import i18nPlugin from './assets/plugin/i18n.js';
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

let app = createApp(App);

app.use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!'
    },
    eating:{
      have : '드세요'
    }
})
// app.use(BootstrapVue) 
app.mount('#app'); 