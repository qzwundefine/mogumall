<template>
	<div class="shop-introduction">
		<img :src="shopIntroduction.logo" :alt="shopIntroduction.name" />
		<div class="shop-info">
			<div class="info-title">
				<span class="shop-name">{{ shopIntroduction.name }}</span>
				<div class="info-title-right">
					<span>进店</span>
					<van-icon name="arrow" color="#666" size="13"></van-icon>
				</div>
			</div>
			<div class="info-content">
				<img
					src="~assets/img/details/star.png"
					alt
					v-for="(item, index) in shopIntroduction.starNum"
					:key="index"
				/>
				<div class="info-goods">
					<div class="info-divider"></div>
					<div class="goods-num">在架商品 {{ shopIntroduction.goodsNum }}</div>
				</div>
			</div>
			<div class="info-tag">
				<span v-for="(item, index) in shopIntroduction.tag" :key="index" class="tag-item">{{ item }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShopIntroduction",
		components: {},
		props: {
			shopIntroduction: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	};
</script>

<style scoped>
	.shop-introduction {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 15px 12px;
		margin: 10px 0;
		display: flex;
	}

	.shop-introduction img {
		height: 60px;
		margin-right: 10px;
		border-radius: 2px;
	}

	.shop-info {
		display: flex;
		flex: 1;
		flex-flow: column nowrap;
		justify-content: space-around;
	}

	.info-title {
		display: flex;
		justify-content: space-between;
	}

	.shop-name {
		line-height: 14px;
		font-size: 14px;
		color: #333;
	}

	.info-title-right span {
		font-size: 13px;
		color: #666;
		margin-right: 5px;
	}

	.info-content {
		display: flex;
		align-items: center;
	}

	.info-content img {
		height: 10px;
		margin-right: 3px;
	}

	.info-goods {
		display: flex;
		align-items: center;
	}

	.info-divider {
		width: 1px;
		height: 10px;
		background-color: #ccc;
		margin: 0 12px;
	}

	.goods-num {
		font-size: 11px;
		color: #666;
	}

	.info-tag {
		width: 100%;
		font-size: 10px;
	}

	.tag-item {
		display: inline-block;
		height: 18px;
		line-height: 18px;
		box-sizing: border-box;
		padding: 0 6px;
		border: 1px solid #d6d6d6;
		border-radius: 8.5px;
		margin-right: 6px;
		color: #f46;
	}
</style>
