import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router/router'
import './style.css';
import apply_car from './apply_car.png';
import store from './store/';

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})
console.log(apply_car)

new Vue({
    router,
    store
    //template:`<div>abc</div>`
}).$mount('#app')