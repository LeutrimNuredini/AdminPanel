/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import {
    Form,
    HasError,
    AlertError
} from "vform";

import Gate from './Gate';
Vue.prototype.$gate = new Gate(window.user);

import moment from "moment";

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "2px"
});

const routes = [{
        path: "/dashboard",
        component: require("./components/Dashboard.vue").default
    },
    {
        path: "/users",
        component: require("./components/Users.vue").default
    },
    {
        path: "/profile",
        component: require("./components/Profile.vue").default
    },
    {
        path: "/developer",
        component: require("./components/Developer.vue").default
    }
];

Vue.filter("upText", function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("myDate", function (created) {
    return moment(created).format("MMMM Do YYYY");
});

const router = new VueRouter({
    mode: "history",
    routes
});

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

window.Fire = new Vue();

new Vue({
    el: "#app",
    router
});
