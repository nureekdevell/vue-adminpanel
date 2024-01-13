import './assets/main.css'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import RU from './locale/ru.json'
import UZ from './locale/uz.json'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const i18n = createI18n({
  locale: 'EN',
  messages: {
    EN: 'EN',
    RU: 'RU',
    UZ: 'UZ'
  }
})

createApp(App).use(router).use(i18n).mount('#app')
