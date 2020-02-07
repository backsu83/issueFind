import Vue from 'vue';

import { store } from './_store';
import { router } from './_helpers';
import VueApexCharts from 'vue-apexcharts'
import App from './app/App';

Vue.component('apexchart', VueApexCharts);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
