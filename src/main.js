import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
	Tabbar, TabbarItem,
	Lazyload,
	Toast,
	GoodsAction, GoodsActionIcon, GoodsActionButton,
	Icon,
	Swipe, SwipeItem,
	Image as VanImage,
	Popup,
	Tab, Tabs,
	CountDown,
	Grid, GridItem,
	List,
	Col, Row,
} from 'vant'

Vue.use(Tabbar).use(TabbarItem)
	.use(Lazyload)
	.use(Toast)
	.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon)
	.use(Icon)
	.use(Swipe).use(SwipeItem)
	.use(VanImage)
	.use(Popup)
	.use(Tab).use(Tabs)
	.use(CountDown)
	.use(List)
	.use(Grid).use(GridItem)
	.use(Col).use(Row);

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
