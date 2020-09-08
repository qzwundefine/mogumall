<template>
	<transition name="van-slide-down">
		<div class="search-bar-wrap" v-show="isShow">
			<a href="https://act.mogu.com/newcategory" class="search-bar-cart"></a>
			<div class="search-bar-form" @click="searchClick">
				<input
					type="text"
					name="search-input"
					class="search-form-input"
					:placeholder="placeholder"
					readonly
				/>
			</div>
			<a href="https://webim.mogu.com/h5" class="search-bar-talk"></a>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "SearchBar",
		components: {},
		data() {
			return {
				isShow: false,
				placeholder: ""
			};
		},
		created() {
			this.placeholder = this.$store.state.placeholder;
		},
		mounted() {
			this.isShow = true;
		},
		methods: {
			searchClick() {
				this.$store.commit("search");
			}
		}
	};
</script>

<style scoped>
	.search-bar-wrap {
		height: 46px;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 7.5px 5px;
		box-sizing: border-box;
	}

	.search-bar-cart {
		width: 50px;
		height: 30px;
		background: url(~assets/img/searchBar/search_cart.png) center no-repeat;
		background-size: 22px auto;
	}

	.search-bar-form {
		height: 30px;
		flex: 1;
		background: #eee url(~assets/img/searchBar/search_icon.png) 8px center
			no-repeat;
		background-size: 16px auto;
		box-sizing: border-box;
		padding-left: 30px;
	}

	.search-form-input {
		width: 100%;
		height: 100%;
		padding: 0 0 2px 0;
		border: 0;
		font-size: 12px;
		background-color: #eee;
		color: #999;
		box-sizing: border-box;
	}

	.search-form-input::placeholder {
		color: #999;
	}

	.search-bar-talk {
		width: 50px;
		height: 30px;
		background: url(~assets/img/searchBar/search_im.png) center no-repeat;
		background-size: 22px auto;
	}
</style>
