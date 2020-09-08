<template>
	<div class="product">
		<van-tabs
			v-model="tabIndex"
			line-width="113"
			line-height="1"
			:border="true"
			:scrollspy="true"
			:sticky="true"
			lazy-render
			title-active-color="#ff5777"
			title-inactive-color="#333"
		>
			<van-tab title="图文详情">
				<product-details v-bind="$attrs"></product-details>
			</van-tab>
			<van-tab title="商品参数">
				<product-params v-bind="$attrs"></product-params>
			</van-tab>
			<van-tab title="热卖推荐">
				<product-recommend v-bind="$attrs"></product-recommend>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import ProductDetails from "./ProductDetails";
	import ProductParams from "./ProductParams";
	import ProductRecommend from "./ProductRecommend";

	export default {
		name: "Product",
		components: {
			ProductDetails,
			ProductParams,
			ProductRecommend
		},
		data() {
			return {
				tabIndex: 0
			};
		}
	};
</script>

<style scoped>
	.product {
		background-color: #fff;
	}

	.product >>> .van-hairline--top-bottom::after {
		border-color: #d9d9d9;
	}

	.product >>> .van-tab {
		font-size: 15px;
	}
</style>
