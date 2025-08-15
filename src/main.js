import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './components/App.vue'
import '@/assets/main.css';

createApp(App).use(createPinia()).mount('#app')
