<template>
	<div class="banner-content">
		<div class="price">
			<div class="now-price-info">
				<span class="now-price-unit">
					<slot name="now-price-unit">￥</slot>
				</span>
				<span class="now-price-num">
					<slot name="now-price-num"></slot>
				</span>
			</div>
			<div class="old-price-info">
				<span class="old-price-unit">
					<slot name="old-price-unit">￥</slot>
				</span>
				<span class="old-price-num">
					<slot name="old-price-num"></slot>
				</span>
				<div class="old-price-tag">
					<span>
						<slot name="old-price-tag"></slot>
					</span>
				</div>
			</div>
		</div>
		<slot name="activity-count-down"></slot>
	</div>
</template>

<script>
	export default {
		name: "BannerContent",
		components: {}
	};
</script>

<style scoped>
	.banner-content {
		width: 100%;
		height: 100%;
		display: flex;
		box-sizing: border-box;
		padding: 0 15px;
		justify-content: space-between;
		align-items: center;
		color: #fff;
	}

	.price {
		display: flex;
		align-items: center;
	}

	.now-price-info {
		display: flex;
	}

	.now-price-unit {
		line-height: 20px;
		font-size: 12px;
	}

	.now-price-num {
		font-size: 30px;
	}

	.old-price-info {
		margin-left: 5px;
		font-size: 12px;
	}

	.old-price-num,
	.old-price-unit {
		opacity: 0.7;
		text-decoration: line-through;
	}

	.old-price-tag {
		box-sizing: border-box;
		height: 16px;
		line-height: 16px;
		text-align: center;
		padding: 0 4px;
		background-color: rgba(255, 255, 255, 0.2);
	}
</style>
