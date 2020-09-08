<template>
	<div class="product-recommend">
		<recommend
			v-for="(item, index) in recommend"
			:key="index"
			:item="item"
			:class="{mr0: (index + 1) % 3 === 0}"
		></recommend>
	</div>
</template>

<script>
	import Recommend from "./RecommendItem";

	export default {
		name: "ProductRecommend",
		components: {
			Recommend
		},
		data() {
			return {
				recommend: this.$attrs.productInfo.recommend
			};
		}
	};
</script>

<style scoped>
	.product-recommend {
		width: 100%;
		box-sizing: border-box;
		padding: 15px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.mr0 {
		margin-right: 0;
	}
</style>
