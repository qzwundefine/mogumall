<template>
	<div class="details">
		<launch-banner>前往查看</launch-banner>
		<details-nav></details-nav>
		<details-swipe :details-swipe="detailsSwipe"></details-swipe>
		<activity-banner v-if="isActivity" :item="item"></activity-banner>
		<normal-banner v-else :item="item"></normal-banner>
		<title-desc :item="item"></title-desc>
		<services :services="item.services" :desc="servicesDesc"></services>
		<sku :item="item" :shopIntroduction="shopIntroduction" ref="sku"></sku>
		<comment-list :comment-list-info="commentListInfo"></comment-list>
		<shop-introduction :shop-introduction="shopIntroduction"></shop-introduction>
		<product :productInfo="productInfo"></product>
		<quick-nav class="details-quick"></quick-nav>
		<footbar @add-to-cart="addToCart" :item="item"></footbar>
	</div>
</template>

<script>
	import DetailsNav from "./childComp/DetailsNav";
	import DetailsSwipe from "./childComp/DetailsSwipe";
	import ActivityBanner from "./childComp/banner/ActivityBanner";
	import NormalBanner from "./childComp/banner/NormalBanner";
	import TitleDesc from "./childComp/TitleDesc";
	import Services from "./childComp/services/Services";
	import Sku from "./childComp/sku/Sku";
	import CommentList from "./childComp/CommentList";
	import ShopIntroduction from "./childComp/ShopIntroduction";
	import Product from "./childComp/product/Product";
	import Footbar from "./childComp/Footbar.vue";

	import { quickNav, launchBanner } from "assets/mixin";

	// 导入假数据
	import {
		detailsSwipe,
		itemInfo,
		servicesDesc,
		commentListInfo,
		shopIntroduction,
		productInfo
	} from "assets/fakeData/detailsData";

	export default {
		name: "Details",
		components: {
			DetailsSwipe,
			DetailsNav,
			ActivityBanner,
			NormalBanner,
			TitleDesc,
			Services,
			Sku,
			CommentList,
			ShopIntroduction,
			Product,
			Footbar
		},
		data() {
			return {
				detailsSwipe,
				itemInfo,
				servicesDesc,
				isActivity: false,
				item: null,
				commentListInfo,
				shopIntroduction,
				productInfo
			};
		},
		created() {
			this.item = this.itemInfo.find(item => (item.id = "eggka"));
			if (this.item != undefined) {
				this.isActivity = this.item.isActivity;
			}
			window.scrollTo(0, 0);
		},
		methods: {
			addToCart() {
				this.$refs.sku.showSku();
			}
		},
		mixins: [quickNav, launchBanner]
	};
</script>

<style scoped>
	.details {
		background-color: #eaeaea;
		position: relative;
		z-index: 10;
		margin-bottom: 50px;
	}

	.details-quick {
		bottom: 60px;
	}
</style>
