<template>
	<div class="product-params">
		<ul class="params-list">
			<li class="params-item" v-for="(item, index) in params" :key="index">
				<span class="params-title">{{ item.title }}</span>
				<span class="params-value">{{ item.value }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ProductParams",
		components: {},
		data() {
			return {
				params: this.$attrs.productInfo.params
			};
		}
	};
</script>

<style scoped>
	.product-params {
		width: 100%;
		margin-top: 20px;
		padding: 0 15px;
		box-sizing: border-box;
	}

	.params-item {
		border-bottom: 1px solid #f4f4f4;
		white-space: nowrap;
		display: flex;
	}

	.params-title {
		width: 100px;
		box-sizing: border-box;
		padding: 6px 0;
		color: #727272;
		font-size: 14px;
	}

	.params-value {
		flex: 1;
		box-sizing: border-box;
		font-size: 14px;
		padding: 6px 0;
		color: #eb4868;
	}
</style>
