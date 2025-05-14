import { createApp } from 'vue';
import App from './App.vue';
import './style/main.css';

// Material components
import '@material/web/menu/menu.js';

const app = createApp(App);

app.mount('#app');
