<template>
	<div class="search">
		<search-nav></search-nav>
		<search-goods-list></search-goods-list>
		<mall-search v-show="getSearch" class="search-bar"></mall-search>
		<quick-nav></quick-nav>
	</div>
</template>

<script>
	import SearchNav from "./childComp/SearchNav";
	import SearchGoodsList from "./childComp/SearchGoodsList";

	import { mallSearch, quickNav } from "assets/mixin";

	export default {
		name: "Search",
		components: {
			SearchNav,
			SearchGoodsList
		},
		mixins: [mallSearch, quickNav]
	};
</script>

<style scoped>
	.search {
		width: 100%;
		box-sizing: border-box;
		position: relative;
		z-index: 10;
	}

	.search-bar {
		top: -85px;
		z-index: 10;
	}
</style>
