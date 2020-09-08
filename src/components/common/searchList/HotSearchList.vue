<template>
	<search-list-item>
		<template #left-icon>
			<i class="hot-left-icon"></i>
		</template>
		<template #left-text>
			<span class="hot-left-text">热门搜索</span>
		</template>
		<template #list-tag>
			<ul class="hot-list">
				<li
					v-for="(item, index) in shuffle(hotList)"
					:key="index"
					class="hot-list-tag"
					:class="{hot: item.isHot}"
					@click="hotClick(item)"
				>{{ item.keyWord}}</li>
			</ul>
		</template>
	</search-list-item>
</template>

<script>
	import SearchListItem from "./SearchListItem";

	import shuffle from "assets/utils/shuffle";

	export default {
		name: "HotSearchList",
		components: {
			SearchListItem
		},
		props: {
			hotList: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		created() {
			if (this.$store.state.placeholder === "") {
				this.$store.commit("place", this.shuffle(this.hotList)[0].keyWord);
			}
		},
		methods: {
			shuffle,
			hotClick(item) {
				this.$router.push("/search/" + item.keyWord);
				this.$store.commit("search");
			}
		}
	};
</script>

<style scoped>
	.search-list-item {
		margin-top: 0;
		border-top: 1px solid #f4f4f4;
	}

	.hot-left-icon {
		display: inline-block;
		width: 14px;
		height: 14px;
		background: url(~assets/img/searchBar/search_hot.png) center center no-repeat;
		background-size: contain;
		vertical-align: middle;
		margin-right: 2px;
	}

	.hot-left-text {
		vertical-align: middle;
		font-size: 13px;
		color: #999;
	}

	.hot-list {
		display: flex;
		align-content: flex-start;
		flex-flow: row wrap;
	}

	.hot-list-tag {
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

	.hot {
		color: #ff4466;
	}
</style>
