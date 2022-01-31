import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.scss'
import LazyLoadDirective from './directives/LazyLoadDirective'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.directive('lazyload', LazyLoadDirective)
