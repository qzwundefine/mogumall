<template>
	<div class="cart">
		<cart-nav></cart-nav>
		<cart-empty v-if="getCartLen === 0"></cart-empty>
		<cart-list v-else></cart-list>
	</div>
</template>

<script>
	import CartNav from "./childComp/CartNav";
	import CartEmpty from "./childComp/CartEmpty";
	import CartList from "./childComp/CartList";

	export default {
		name: "Cart",
		components: {
			CartNav,
			CartEmpty,
			CartList
		},
		computed: {
			getCartLen() {
				return this.$store.state.cartList.length;
			}
		}
	};
</script>

<style scoped>
	.cart {
		box-sizing: border-box;
		position: relative;
		z-index: 10;
		background-color: #efefef;
	}

	.cart >>> input[type="checkbox"] {
		width: 20px;
		height: 20px;
		display: inline-block;
		box-sizing: border-box;
		appearance: none;
		border: 1px solid #d7d7d7;
		border-radius: 50%;
		margin: 0 9px 0 0;
	}
</style>
