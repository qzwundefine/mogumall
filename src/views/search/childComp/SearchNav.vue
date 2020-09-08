<template>
	<div class="search-nav">
		<div class="nav-left" @click="onBack">
			<van-icon name="arrow-left" color="#727272" size="22"></van-icon>
		</div>
		<div class="nav-center" @click="onSearch">
			<div class="search">
				<div class="search-keyword">
					<input type="text" readonly :value="$route.params.keyword" />
				</div>
				<div class="search-enter"></div>
			</div>
		</div>
		<div class="nav-right" @click="onCart">
			<van-icon name="shopping-cart-o" color="#727272" size="22"></van-icon>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchNav",
		components: {},
		methods: {
			onBack() {
				this.$router.back();
			},
			onSearch() {
				if (this.$store.state.isSearch) {
					window.scrollTo(0, 0);
				} else {
					this.$store.commit("search");
				}
			},
			onCart() {
				this.$router.push("/cart");
			}
		}
	};
</script>

<style scoped>
	.search-nav {
		width: 100%;
		height: 45px;
		box-sizing: border-box;
		display: flex;
		background-color: #fafafa;
		border-bottom: 1px solid #c9c7c8;
		position: fixed;
		top: 0;
		z-index: inherit;
	}

	.nav-left {
		box-sizing: border-box;
		padding: 0 15px;
		display: flex;
		align-items: center;
	}

	.nav-center {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.search {
		width: 100%;
		height: 30px;
		line-height: 30px;
		display: flex;
		box-sizing: border-box;
		border-radius: 1px;
		border: 1px solid #f3f3f3;
		background: #ececec url(~assets/img/search/search_icon.png) 2px no-repeat;
		background-size: 17px 15px;
	}

	.search-keyword {
		box-sizing: border-box;
		padding: 0 5px 0 20px;
		flex: 1;
	}

	.search-keyword input {
		background: none;
		border: 0;
		line-height: 24px;
		padding: 0;
		font-size: 16px;
		vertical-align: top;
	}

	.search-enter {
		width: 25px;
		height: 25px;
		margin: 0 5px;
		background: url(~assets/img/search/enter_icon.png) 50% no-repeat;
		background-size: contain;
	}

	.nav-right {
		width: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
