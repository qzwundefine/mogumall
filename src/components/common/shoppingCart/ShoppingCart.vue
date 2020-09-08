<template>
	<ul class="shopping-cart">
		<shopping-cart-item
			v-for="(item, index) in $store.state.cartList"
			:key="index"
			:item="item"
			:index="index"
			ref="shoppingCartItem"
		></shopping-cart-item>
	</ul>
</template>

<script>
	import ShoppingCartItem from "./ShoppingCartItem";

	export default {
		name: "ShoppingCart",
		components: {
			ShoppingCartItem
		},
		methods: {
			checkAll() {
				this.$refs.shoppingCartItem.forEach(item => item.checkShop());
			}
		}
	};
</script>

<style scoped>
	.shopping-cart {
		box-sizing: border-box;
		padding: 9px;
		margin-bottom: 50px;
	}
</style>
