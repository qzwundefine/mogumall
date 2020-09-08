<template>
	<div class="recommend-item">
		<a :href="item.link">
			<div class="img-wrapper">
				<img v-lazy="item.image" />
			</div>
			<div class="info-wrapper">
				<span class="info-title">{{ item.desc }}</span>
				<div class="info-content">
					<span class="price">￥{{ item.price }}</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: "RecommendItem",
		components: {},
		data() {
			return {
				item: this.$attrs.item
			};
		}
	};
</script>

<style scoped>
	.recommend-item {
		display: flex;
		width: calc(100% / 3 - 6px);
		flex-direction: column;
		box-sizing: border-box;
		margin-right: 6px;
		margin-bottom: 15px;
		flex-grow: 1;
	}

	.img-wrapper {
		box-sizing: border-box;
		height: 165px;
	}

	.img-wrapper img {
		width: 100%;
	}

	.info-wrapper {
		display: flex;
		flex-flow: column nowrap;
	}

	.info-title {
		width: 100%;
		display: inline-block;
		height: 25px;
		line-height: 25px;
		font-size: 12.5px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #5e5e5e;
	}

	.info-content {
		height: 15px;
		line-height: 15px;
		font-size: 12px;
		color: #5e5e5e;
	}
</style>
