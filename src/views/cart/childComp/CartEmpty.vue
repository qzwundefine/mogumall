<template>
	<div class="cart-empty">
		<empty></empty>
		<empty-list></empty-list>
		<quick-nav></quick-nav>
	</div>
</template>

<script>
	import Empty from "./cartempty/Empty";
	import EmptyList from "./cartempty/EmptyList";

	import { quickNav } from "assets/mixin";

	export default {
		name: "CartEmpty",
		components: {
			Empty,
			EmptyList
		},
		mixins: [quickNav],
		created() {
			this.$store.commit("edit");
		}
	};
</script>

<style scoped>
	.cart-empty {
		width: 100%;
		background-color: #efefef;
	}
</style>
