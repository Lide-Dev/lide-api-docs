import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import VueMarkdownIt from 'vue3-markdown-it';
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';

import 'primevue/resources/themes/arya-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'highlight.js/styles/monokai.css';

import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';


const app = createApp(App);

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Sidebar', Sidebar);
app.component('PanelMenu', PanelMenu);
app.component('Card', Card);

app.use(VueMarkdownIt);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.mount('#app');