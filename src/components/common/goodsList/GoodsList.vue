<template>
	<div class="goods-list">
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
			loading-text="卖力加载中"
		>
			<van-grid :column-num="2" gutter="8px">
				<van-grid-item v-for="(item, index) in list" :key="index" to="/details">
					<goods-list-item>
						<template #goods-img>
							<div class="goods-img">
								<img :src="item.img" :alt="item.desc" v-lazy="item.img" />
							</div>
						</template>
						<template #goods-info>
							<div class="goods-info">
								<div class="goods-desc">{{ item.desc }}</div>
								<div class="goods-price-wrap">
									<div class="goods-price">
										<span class="cny">￥</span>
										<span class="price">{{ item.price}}</span>
									</div>
									<div class="goods-fav">{{ item.fav }}</div>
								</div>
								<slot name="goods-btn">
									<button class="goods-button">立即购买</button>
								</slot>
							</div>
						</template>
					</goods-list-item>
				</van-grid-item>
			</van-grid>
		</van-list>
	</div>
</template>

<script>
	import GoodsListItem from "./GoodsListItem";

	export default {
		name: "GoodsList",
		components: {
			GoodsListItem
		},
		props: {
			goodsData: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				loading: false,
				finished: false,
				list: []
			};
		},
		methods: {
			onLoad() {
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.goodsData[i]);
					}

					this.loading = false;

					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 1000);
			}
		}
	};
</script>

<style scoped>
	.goods-list {
		width: 100%;
		height: 100%;
		background-color: #efefef;
		padding-top: 6px;
		margin-bottom: 50px;
	}

	.goods-list >>> .van-grid-item__content {
		padding: 0;
	}

	.goods-list >>> .van-grid-item__content--center {
		justify-content: flex-start;
	}

	.goods-list >>> .van-grid-item__content--surround::after {
		border: none;
	}

	.goods-img {
		width: 100%;
		height: 232px;
		font-size: 0;
	}

	.goods-img img {
		width: 100%;
		border-radius: 2px;
	}

	.goods-info {
		font-size: 12px;
		color: rgb(51, 51, 51);
		box-sizing: border-box;
		padding: 5px 6px;
	}

	.goods-desc {
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.goods-price-wrap {
		display: flex;
		justify-content: space-between;
		line-height: 23px;
		text-indent: -1.5px;
	}

	.goods-price {
		font-size: 14px;
		font-weight: 700;
		margin-top: 2px;
		letter-spacing: -1px;
	}

	.goods-price .cny {
		position: absolute;
	}

	.goods-price .price {
		margin-left: 10px;
	}

	.goods-fav {
		color: #666;
		background: url(~assets/img/shop/star.png) 100% no-repeat;
		background-size: auto 12px;
		padding-right: 15px;
		padding-top: 1px;
	}

	.goods-button {
		width: 100%;
		height: 25px;
		border: none;
		color: #fff;
		font-size: 13px;
		border-radius: 2px;
		background-color: rgb(255, 87, 119);
		margin-top: 4px;
	}
</style>
