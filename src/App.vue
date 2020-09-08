<template>
	<div id="app">
		<router-view></router-view>
		<mall-tabbar></mall-tabbar>
	</div>
</template>

<script>
	import mallTabbar from "./components/common/MallTabbar";

	export default {
		name: "App",
		components: {
			mallTabbar
		}
	};
</script>

<style>
	.sku-toast {
		border-radius: 3px;
		box-sizing: border-box;
		padding: 16px;
	}

	.cart-toast {
		border-radius: 3px;
		padding: 10px 12px;
		font-size: 14px;
		color: #fff;
		background-color: rgba(225, 42, 82, 0.7);
		box-sizing: border-box;
	}

	.fav-toast {
		border-radius: 3px;
		box-sizing: border-box;
		padding: 10px 12px;
		font-size: 14px;
	}
</style>
