import Vue from 'vue'
import Vuetify from "vuetify"
import App from './App.vue'
import VueRouter from "vue-router"

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
    vuetify: new Vuetify({}),
    render: h => h(App),
    router: new VueRouter({
        mode:'history',
        routes: [

        ]
    }),
}).$mount('#app')
