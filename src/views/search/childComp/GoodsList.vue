<template>
	<div class="goods-list">
		<van-list
			v-model="loading"
			:finished="goodsList[tabInfo.tab].finished"
			finished-text="没有更多了"
			@load="onLoad"
			loading-text="卖力加载中"
			:immediate-check="false"
		>
			<van-grid :column-num="2" gutter="8px">
				<van-grid-item
					v-for="(item, index) in priceFilter(goodsList[tabInfo.tab].list)"
					:key="index"
					:url="item.link"
				>
					<div class="goods-list-item">
						<div class="goods-img">
							<img :src="item.img" :alt="item.desc" v-lazy="item.img" />
						</div>
						<div class="goods-info">
							<div class="goods-desc">{{ item.desc }}</div>
							<div class="goods-price-wrap">
								<div class="goods-price">
									<span class="cny">￥</span>
									<span class="price">{{ item.price}}</span>
								</div>
								<div class="goods-fav">{{ item.fav }}</div>
							</div>
						</div>
					</div>
				</van-grid-item>
			</van-grid>
		</van-list>
	</div>
</template>

<script>
	// 导入假数据
	import { searchGoods } from "assets/fakeData/searchData";

	export default {
		name: "GoodsList",
		components: {},
		props: {
			tabInfo: {
				type: Object,
				default() {
					return {};
				}
			},
			goods: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		data() {
			return {
				loading: false,
				searchGoods,
				goodsList: {
					综合: {
						list: this.goods["综合"],
						finished: false
					},
					销量: {
						list: this.goods["销量"],
						finished: false
					},
					新品: {
						list: this.goods["新品"],
						finished: false
					}
				}
			};
		},
		methods: {
			onLoad() {
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.goodsList[this.tabInfo.tab].list.push(
							this.searchGoods[this.$route.params.keyword][this.tabInfo.tab][i]
						);
					}
					this.loading = false;

					if (this.goodsList[this.tabInfo.tab].list.length >= 40) {
						this.goodsList[this.tabInfo.tab].finished = true;
					}
				}, 1000);
			},
			priceFilter(list) {
				const tempArray = list.filter(item => {
					if (this.tabInfo.minPrice != 0 && this.tabInfo.maxPrice != 0) {
						return (
							item.price >= this.tabInfo.minPrice &&
							item.price <= this.tabInfo.maxPrice
						);
					} else if (this.tabInfo.minPrice != 0) {
						return item.price >= this.tabInfo.minPrice;
					} else if (this.tabInfo.maxPrice != 0) {
						return item.price <= this.tabInfo.maxPrice;
					} else {
						return true;
					}
				});
				return tempArray;
			}
		}
	};
</script>

<style scoped>
	.goods-list {
		width: 100%;
		height: 100%;
		background-color: #efefef;
		padding-top: 8px;
		margin-top: 85px;
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
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: 2.5px 0 7.5px 0;
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
