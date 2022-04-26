require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';
import {Link} from '@inertiajs/inertia-vue';
import Layout from './shared/Layout';

Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(PortalVue);
Vue.component("Link",Link);
const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => 
                {
                   let page = require(`./Pages/${name}`).default;
                   page.layout=Layout;
                   return page;
                }
            },
        }),
}).$mount(app);
