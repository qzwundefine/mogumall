<template>
	<div class="cart-nav">
		<div class="nav-left nav-basic" @click="onBack">
			<van-icon name="arrow-left" color="#727272" size="22"></van-icon>
		</div>
		<div class="nav-center nav-basic">
			<div class="nav-title">
				购物车
				<span v-show="getGoodsLen != 0">{{ '(' + getGoodsLen + ')' }}</span>
			</div>
			<span class="cart-num"></span>
		</div>
		<div class="nav-right nav-basic" @click="onEdit">
			<span v-show="!getEdit">编辑</span>
			<span v-show="getEdit">完成</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CartNav",
		components: {},
		methods: {
			onBack() {
				this.$router.back();
				this.$store.commit("cartInit");
			},
			onEdit() {
				this.$store.commit("edit");
			}
		},
		computed: {
			getGoodsLen() {
				return this.$store.state.cartList.reduce((len, item) => {
					return len + item.goodsList.length;
				}, 0);
			},
			getEdit() {
				return this.$store.state.isEdit;
			}
		}
	};
</script>

<style scoped>
	.cart-nav {
		width: 100%;
		height: 45px;
		box-sizing: border-box;
		display: flex;
		background-color: #fafafa;
		border-bottom: 1px solid #c9c7c8;
		position: relative;
		z-index: 10;
	}

	.nav-basic {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-left,
	.nav-right {
		width: 45px;
		color: #727272;
	}

	.nav-right {
		display: flex;
		justify-content: flex-start;
	}

	.nav-center {
		flex: 1;
		font-size: 18px;
		color: #5e5e5e;
	}
</style>
