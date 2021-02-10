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
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
// import Tree from 'primevue/tree';
import ScrollPanel from 'primevue/scrollpanel';
import InputText from 'primevue/inputtext';
import InputSwitch from 'primevue/inputswitch';
import Textarea from 'primevue/textarea';

const app = createApp(App);

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Sidebar', Sidebar);
app.component('PanelMenu', PanelMenu);
app.component('Card', Card);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
// app.component('Tree', Tree);
app.component('ScrollPanel', ScrollPanel);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('InputSwitch', InputSwitch);

app.use(VueMarkdownIt);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.mount('#app');