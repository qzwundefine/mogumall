<template>
	<div class="search-list">
		<search-list-item>
			<template #left-icon>
				<i class="search-left-icon"></i>
			</template>
			<template #left-text>
				<span class="search-left-text">历史搜索</span>
			</template>
			<template #right-icon>
				<div class="search-right-icon" @click="clearHistory"></div>
			</template>
			<template #list-tag v-if="isNone">
				<ul class="search-list-tag">
					<li v-for="(item, index) in wordList" :key="index" @click="hisClick(item)">{{ item }}</li>
				</ul>
			</template>
			<template #list-none v-else>
				<div class="search-list-none">暂无历史搜索</div>
			</template>
		</search-list-item>
	</div>
</template>

<script>
	import SearchListItem from "./SearchListItem";

	export default {
		name: "SearchList",
		components: {
			SearchListItem
		},
		props: {
			createHistory: {
				type: Function
			}
		},
		data() {
			return {
				isNone: false,
				wordList: []
			};
		},
		created() {
			// 如果有搜索记录，则隐藏 list-none,并把搜索记录展示到页面中
			let temp = JSON.parse(localStorage.getItem("searchHistory"));
			if (temp.searchRecord.length != 0) {
				this.isNone = true;
				this.wordList = temp.searchRecord;
			}
		},
		methods: {
			clearHistory() {
				localStorage.removeItem("searchHistory");
				this.isNone = false;
				this.createHistory();
			},
			hisClick(item) {
				this.$router.push("/search/" + item);
				this.$store.commit("search");
			}
		}
	};
</script>

<style scoped>
	.search-left-icon {
		display: inline-block;
		width: 15px;
		height: 15px;
		background: url(~assets/img/searchBar/search_icon2.png) 50% no-repeat;
		background-size: contain;
		vertical-align: text-top;
		margin: 2px 2px 0 0;
	}

	.search-left-text {
		font-size: 12.5px;
		color: #999;
	}
	.search-right-icon {
		width: 15px;
		height: 15px;
		float: right;
		margin-right: 10px;
		background: url(~assets/img/searchBar/search_trash.png) center center
			no-repeat;
		background-size: contain;
	}

	.search-list-none {
		font-size: 12.5px;
		color: #999;
		margin: 14px 0 0 17.5px;
	}

	.search-list-tag {
		display: flex;
		align-content: flex-start;
		flex-flow: row wrap;
	}

	.search-list-tag li {
		flex: none;
		margin: 12.5px 0 0 10px;
		font-size: 12.5px;
		border: 1px solid #f5f5f5;
		padding: 0 11px;
		color: #333;
		height: 23px;
		line-height: 23px;
		border-radius: 5px;
	}
</style>
