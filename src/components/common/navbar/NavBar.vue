<template>
	<div class="navbar">
		<nav-bar-item>
			<template #left>
				<div class="left" @click="backClick"></div>
			</template>
			<template #right>
				<form action>
					<input
						type="search"
						name="search-input"
						:placeholder="placeholder"
						autocomplete="off"
						class="search-input"
						v-model="searchWord"
						ref="search"
					/>
					<input type="submit" value="搜索" class="search-submit" @click="searchClick" />
				</form>
			</template>
		</nav-bar-item>
	</div>
</template>

<script>
	import NavBarItem from "./NavBarItem";

	export default {
		name: "NavBar",
		components: {
			NavBarItem
		},
		data() {
			return {
				searchWord: "",
				placeholder: ""
			};
		},
		created() {
			this.$route.params.keyword
				? (this.placeholder = this.$route.params.keyword)
				: (this.placeholder = this.$store.state.placeholder);
		},
		methods: {
			backClick() {
				this.$store.commit("search");
			},
			searchClick() {
				if (this.searchWord === "") {
					this.searchWord = this.placeholder;
				}
				this.$router.push(this.getURL);
				this.$store.commit("search");
				this.onSubmit();
			},
			onSubmit() {
				let temp = JSON.parse(localStorage.getItem("searchHistory"));
				// 1.判断数组中有无相同记录
				if (temp.searchRecord.find(item => item === this.searchWord)) {
					return;
					// 2.判断数组中是否到了存储上限（10条记录）,如果到了上限，则去除最后一条，在把新记录追加到前面
				} else if (temp.searchRecord.length === 10) {
					temp.searchRecord.pop();
					temp.searchRecord.unshift(this.searchWord);
				} else {
					// 3.如果没到存储上限，则直接添加新记录
					temp.searchRecord.unshift(this.searchWord);
				}
				// 把更新的数据重新保存到 LocalStorage中
				localStorage.setItem("searchHistory", JSON.stringify(temp));
			}
		},
		computed: {
			getURL() {
				return "/search/" + this.searchWord;
			},
			getIsSearch() {
				return this.$store.state.isSearch;
			}
		},
		watch: {
			getIsSearch: function() {
				if (this.getIsSearch) {
					this.$refs.search.focus();
				}
			}
		}
	};
</script>

<style scoped>
	.navbar {
		height: 45px;
		padding: 5px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		background-color: #fff;
	}

	.navbar-item {
		height: 100%;
		display: flex;
		box-sizing: border-box;
		align-items: center;
	}

	.left {
		width: 26px;
		height: 20px;
		background: url(~assets/img/searchBar/left_arrow.png) center center no-repeat;
		background-size: contain;
		margin-left: 8px;
		margin-top: 1px;
	}

	.search-input {
		width: 295px;
		height: 25px;
		box-sizing: border-box;
		padding: 5px 10px;
		font-size: 14px;
		border: 1px solid #aaa;
		border-radius: 4px;
		box-shadow: none;
		outline: none;
		margin-left: 4px;
		margin-top: 5px;
	}

	.search-input:focus {
		border-color: #ff5777;
	}

	.search-input::placeholder {
		color: #999;
	}

	.search-submit {
		width: 35px;
		height: 25px;
		border: none;
		background-color: #fff;
		font-size: 14px;
		color: #666;
		margin-left: 1px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
</style>
