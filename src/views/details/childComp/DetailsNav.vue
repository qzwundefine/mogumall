<template>
	<div class="details-nav">
		<span @click="onBack">
			<van-icon name="arrow-left" size="23" color="#fff"></van-icon>
		</span>
		<span @click="onCart">
			<van-icon name="shopping-cart-o" size="23" color="#fff"></van-icon>
		</span>
	</div>
</template>

<script>
	export default {
		name: "DetailsNav",
		components: {},
		methods: {
			onBack() {
				this.$router.back();
			},
			onCart() {
				this.$router.push("/cart");
			}
		}
	};
</script>

<style scoped>
	.details-nav >>> .van-icon {
		font-weight: 700;
	}

	.details-nav {
		width: 100%;
		box-sizing: border-box;
		padding: 7.5px;
		display: flex;
		justify-content: space-between;
		position: absolute;
		z-index: 3;
	}

	.details-nav span {
		display: inline-block;
		width: 40px;
		height: 40px;
		font-size: 26px;
		line-height: 40px;
		box-sizing: border-box;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 20px;
	}
</style>
