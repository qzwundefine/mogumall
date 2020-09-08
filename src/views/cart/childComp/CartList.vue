<template>
	<div class="cart-list">
		<shopping-cart ref="shoppingCart"></shopping-cart>
		<balance @check-all="checkAll"></balance>
		<transition name="van-fade">
			<popup v-show="$store.state.isPopup"></popup>
		</transition>
	</div>
</template>

<script>
	import ShoppingCart from "components/common/shoppingCart/ShoppingCart";
	import Balance from "components/common/Balance";
	import Popup from "components/common/Popup";

	export default {
		name: "CartList",
		components: {
			ShoppingCart,
			Balance,
			Popup
		},
		beforeCreate() {
			document.querySelector("body").setAttribute("style", "background: #efefef");
		},
		beforeDestroy() {
			document.querySelector("body").removeAttribute("style");
		},
		methods: {
			checkAll() {
				this.$refs.shoppingCart.checkAll();
			}
		}
	};
</script>

<style scoped>
	.cart-list {
		width: 100%;
		box-sizing: border-box;
	}
</style>
