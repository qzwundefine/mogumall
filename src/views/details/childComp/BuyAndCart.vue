<template>
	<div class="buy-and-cart">
		<slot name="cart-btn"></slot>
		<slot name="buy-btn"></slot>
	</div>
</template>

<script>
	export default {
		name: "BuyAndCart",
		components: {}
	};
</script>

<style scoped>
	.buy-and-cart {
		display: flex;
		flex: 1;
		height: 100%;
	}
</style>
