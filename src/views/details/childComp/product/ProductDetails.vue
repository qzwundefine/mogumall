<template>
	<div class="product-details">
		<div class="product-desc">
			<div class="desc-start">
				<span class="line-bar"></span>
			</div>
			<div class="desc-text">{{ product.desc }}</div>
			<div class="desc-end">
				<span class="line-bar"></span>
			</div>
		</div>
		<ul class="product-list">
			<li class="list-item">
				<div class="list-item-title">图文详情</div>
				<div class="images-list">
					<div class="image-wrap" v-for="(img, index) in product.images" :key="index">
						<img v-lazy="img" class="image" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ProductDetails",
		components: {},
		data() {
			return {
				product: this.$attrs.productInfo.product
			};
		}
	};
</script>

<style scoped>
	.product-details {
		margin-top: 20px;
	}

	.product-desc {
		box-sizing: border-box;
		padding: 0 15px;
		margin-bottom: 7.5px;
		color: #727272;
		font-size: 15px;
	}

	.desc-text {
		box-sizing: border-box;
		padding: 15px 0;
		font-size: 14px;
		white-space: pre-wrap;
		text-align: left;
	}

	.line-bar {
		display: inline-block;
		width: 5px;
		height: 5px;
		background-color: #000;
		border-radius: 50%;
		position: absolute;
		top: -2.5px;
	}

	.desc-start,
	.desc-end {
		width: 90px;
		height: 1px;
		position: relative;
		background-color: #a3a3a5;
	}

	.desc-end {
		float: right;
	}

	.desc-end .line-bar {
		right: 0;
	}

	.list-item-title {
		font-size: 15px;
		height: 25px;
		line-height: 25px;
		color: #303030;
		margin-top: 7.5px;
		text-indent: 15px;
	}

	.image-wrap {
		width: 100%;
		margin-top: 9px;
	}

	.image {
		width: 100%;
	}
</style>
