<template>
	<div class="shop">
		<launch-banner></launch-banner>
		<mall-search v-show="getSearch"></mall-search>
		<search-bar></search-bar>
		<img-block :img-block-data="imgBlockData"></img-block>
		<nav-grid :grid-data="gridData"></nav-grid>
		<banner></banner>
		<goods-list :goods-data="goodsData"></goods-list>
	</div>
</template>

<script>
	import SearchBar from "components/content/SearchBar";
	import ImgBlock from "components/content/ImgBlock";
	import NavGrid from "components/content/NavGrid";
	import Banner from "./childComp/Banner";
	import GoodsList from "components/common/goodsList/GoodsList";

	import { mallSearch, launchBanner } from "assets/mixin";

	// 导入假数据
	import { imgBlockData, gridData, goodsData } from "assets/fakeData/shopData";

	export default {
		name: "Shop",
		components: {
			SearchBar,
			ImgBlock,
			NavGrid,
			Banner,
			GoodsList
		},
		data() {
			return {
				imgBlockData,
				gridData,
				goodsData
			};
		},
		mixins: [mallSearch, launchBanner]
	};
</script>

<style scoped>
	.search-bar-wrap {
		border-bottom: 1px solid #e5e5e5;
	}
</style>
