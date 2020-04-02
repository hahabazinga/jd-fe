import Vue from 'vue';
import App from './App.vue';
import ItemDetail from './components/ItemDetail.vue';
import Home from './components/Home.vue';
import {
    Input,
    Icon,
    Button,
    Card,
    Main,
    Loading,
    Pagination,
    Image,
    Carousel,
    CarouselItem,
    Breadcrumb,
    BreadcrumbItem,
    PageHeader,
    Divider
} from 'element-ui';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;

Vue.use(Input);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Card);
Vue.use(Main);
Vue.use(Pagination);
Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(PageHeader)
Vue.use(Divider)
Vue.use(Loading.directive);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/list',
            name: 'home',
            component: Home
        },
        {
            path: '/list/:id',
            name: 'detail',
            component: ItemDetail
        },
        {
            path: '/',
            redirect: '/list'
        }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
