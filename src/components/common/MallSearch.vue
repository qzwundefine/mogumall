<template>
	<div class="mall-search">
		<nav-bar></nav-bar>
		<search-list :createHistory="createHistory"></search-list>
		<hot-search-list :hotList="hotList"></hot-search-list>
	</div>
</template>

<script>
	import NavBar from "./navbar/NavBar";
	import SearchList from "./searchList/SearchList";
	import HotSearchList from "./searchList/HotSearchList";

	// 导入假数据
	import { hotList } from "assets/fakeData/searchData";

	export default {
		name: "MallSearch",
		components: {
			NavBar,
			SearchList,
			HotSearchList
		},
		data() {
			return {
				hotList
			};
		},
		created() {
			// 创建用于保存搜索记录数组的JSON对象并保存到 LocalStorage中
			if (localStorage.getItem("searchHistory") != null) {
				return;
			} else {
				this.createHistory();
			}
		},
		methods: {
			createHistory() {
				localStorage.setItem(
					"searchHistory",
					JSON.stringify({
						searchRecord: []
					})
				);
			}
		}
	};
</script>

<style scoped>
	.mall-search {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		background-color: #fff;
		z-index: 2;
	}
</style>
