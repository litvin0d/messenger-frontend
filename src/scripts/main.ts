import '@/styles/main.sass';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/components/RootComponent.vue';
import router from '@/scripts/router';

const APP = createApp(App);

APP.use(createPinia()).use(router);

document.addEventListener('DOMContentLoaded', () => {
	APP.mount('#app');
});
