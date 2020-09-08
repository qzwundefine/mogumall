<template>
	<div class="home">
		<launch-banner></launch-banner>
		<mall-search v-show="getSearch" class="search"></mall-search>
		<search-bar></search-bar>
		<mall-swipe :swipeImages="swipeImages"></mall-swipe>
		<nav-grid :grid-data="gridData"></nav-grid>
		<content-item :content-item-info="contentItemInfo"></content-item>
	</div>
</template>

<script>
	import LaunchBanner from "components/content/LaunchBanner";
	import SearchBar from "components/content/SearchBar";
	import MallSwipe from "components/common/MallSwipe";
	import NavGrid from "components/content/NavGrid";
	import ContentItem from "components/content/ContentItem";

	import { mallSearch } from "assets/mixin";

	// 导入假数据
	import {
		gridData,
		contentItemInfo,
		swipeImages
	} from "assets/fakeData/homeData";

	export default {
		name: "Home",
		components: {
			LaunchBanner,
			SearchBar,
			MallSwipe,
			NavGrid,
			ContentItem
		},
		data() {
			return {
				gridData,
				contentItemInfo,
				swipeImages
			};
		},
		mixins: [mallSearch]
	};
</script>

<style scoped>
	.home {
		position: relative;
	}
</style>
