import Vue from "vue";
import VueRouter from "vue-router";

import Home from 'views/home/Home.vue'
import Shop from 'views/shop/Shop.vue'
import Live from 'views/live/Live.vue'
import Profile from 'views/profile/Profile.vue'
import Details from 'views/details/Details'
import Search from 'views/search/Search'
import Cart from 'views/cart/Cart'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      title: '商城'
    }
  },
  {
    path: '/live',
    component: Live,
    meta: {
      title: '直播'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我'
    }
  },
  {
    path: '/details',
    component: Details,
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/search/:keyword',
    component: Search,
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
