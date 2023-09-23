import './assets/main.css'
import './assets/uikit.css'
import './assets/uikit.js'
import './assets/uikit-icons.js'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import { createApp } from 'vue'
import App from './App.vue'

hljs.registerLanguage('javascript', javascript);

const app = createApp(App)
app.use(hljsVuePlugin)
app.mount('#app')
