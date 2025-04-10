import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Importar estilos globales
import './assets/main.css'

// Crear instancia de la aplicación Vue
const app = createApp(App)

// Configurar Vue con Pinia y el enrutador
app.use(createPinia())
app.use(router)

// Montar la aplicación en el elemento con ID 'app'
app.mount('#app')
