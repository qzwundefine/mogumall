<template>
	<div class="empty-list">
		<div class="list-title">
			<span>大家都在看</span>
		</div>
		<goods-list :goods-data="goodsData" class="list">
			<template #goods-btn>
				<div></div>
			</template>
		</goods-list>
	</div>
</template>

<script>
	import GoodsList from "components/common/goodsList/GoodsList";

	import { goodsData } from "assets/fakeData/shopData";

	export default {
		name: "EmptyList",
		components: {
			GoodsList
		},
		data() {
			return {
				goodsData
			};
		}
	};
</script>

<style scoped>
	.list-title {
		font-size: 14px;
		color: #666;
		margin: 15px 0 10px 15px;
	}

	.empty-list .list {
		background-color: #f6f6f6;
	}

	.empty-list >>> .goods-desc {
		-webkit-line-clamp: 2;
	}

	.empty-list >>> .goods-price-wrap {
		margin-top: 5px;
	}
</style>
