<template>
	<li class="shopping-cart-item">
		<div class="cart-item-head">
			<input
				type="checkbox"
				class="shop-checkbox"
				@click="checkShop"
				:class="{checked: item.shopChecked}"
			/>
			<a :href="item.shopLink" class="shop-name">{{ item.shopName }}</a>
		</div>
		<div class="cart-item-content" v-for="(good, index) in item.goodsList" :key="index">
			<input
				type="checkbox"
				class="good-checkbox"
				@click="checkGood(index)"
				:class="{checked: good.goodChecked}"
			/>
			<div class="img-wrapper">
				<img :src="good.pic" />
			</div>
			<div class="good-info">
				<div class="info-title">{{ good.title }}</div>
				<div class="info-sku">
					<span>颜色：{{ good.color }}；</span>
					<span>尺码：{{ good.size }}</span>
					<span class="arrow-down"></span>
				</div>
				<div class="info-tag"></div>
				<div class="info-wrapper">
					<div class="info-price">
						<span class="price-unit">￥</span>
						<span>{{ good.price }}</span>
					</div>
					<div class="info-btn">
						<span class="reduce-btn" :class="{disable: good.num <= 1}" @click="onReduce(good, index)">
							<van-icon class="iconfont" class-prefix="icon" name="jian" size="22"></van-icon>
						</span>
						<span class="num">{{ good.num }}</span>
						<span class="increase-btn" @click="onIncrease(good, index)">
							<van-icon class="iconfont" class-prefix="icon" name="jia" size="22"></van-icon>
						</span>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
	export default {
		name: "ShoppingCartItem",
		components: {},
		props: {
			item: {
				type: Object,
				default() {
					return {};
				}
			},
			index: {
				type: Number
			}
		},
		methods: {
			onReduce(good, index) {
				if (good.num > 1) {
					good.num--;
					this.$store.commit("changeNum", {
						shopIndex: this.index,
						goodIndex: index,
						num: good.num
					});
				}
			},
			onIncrease(good, index) {
				good.num++;
				this.$store.commit("changeNum", {
					shopIndex: this.index,
					goodIndex: index,
					num: good.num
				});
			},
			checkGood(index) {
				this.$store.commit("checkGood", {
					shopIndex: this.index,
					goodIndex: index
				});
				if (this.$store.getters.shopCheckAll(this.index)) {
					this.$store.commit("changeCheck", {
						shopIndex: this.index,
						checked: true
					});
				} else {
					this.$store.commit("changeCheck", {
						shopIndex: this.index,
						checked: false
					});
				}
			},
			checkShop() {
				this.$store.commit("checkShop", {
					shopIndex: this.index
				});
			}
		}
	};
</script>

<style scoped>
	@import url(~assets/iconfont/iconfont.css);

	.shopping-cart-item {
		box-sizing: border-box;
		padding: 20px 15px;
		min-height: 200px;
		background-color: #fff;
		border-radius: 5px;
	}

	.cart-item-head {
		display: flex;
	}

	.shop-name {
		color: #333;
		font-weight: 700;
	}

	.cart-item-content {
		margin-top: 20px;
		display: flex;
		align-items: center;
	}

	.img-wrapper {
		width: 69px;
		height: 92px;
		border-radius: 2px;
	}

	.img-wrapper img {
		height: 100%;
		width: 100%;
	}

	.good-info {
		flex: 1;
		align-self: flex-start;
		margin-left: 9px;
	}

	.info-title {
		color: #333;
		font-size: 12px;
		font-weight: 700;
		min-height: 32px;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		margin-bottom: 6px;
	}

	.info-sku {
		position: relative;
		min-height: 32px;
		box-sizing: border-box;
		padding: 0 11px 0 6px;
		font-size: 10px;
		color: #ababab;
		background-color: #f7f7f7;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		border-radius: 5px;
	}

	.arrow-down {
		display: inline-block;
		width: 8px;
		height: 8px;
		position: absolute;
		box-sizing: border-box;
		border-left: 1px solid #ababab;
		border-bottom: 1px solid #ababab;
		transform: rotate(-45deg);
		right: 6px;
		top: 0;
	}

	.info-wrapper {
		width: 100%;
		margin-top: 6px;
		display: flex;
		justify-content: space-between;
	}

	.info-price {
		height: 17px;
		line-height: 17px;
		font-size: 16px;
		color: #f46;
		font-weight: 700;
	}

	.price-unit {
		font-size: 10px;
		font-weight: 500;
	}

	.info-btn {
		background-color: #f7f7f7;
		min-width: 80px;
		border-radius: 14px;
		display: flex;
	}

	.info-btn span {
		display: inline-block;
		width: 25px;
		height: 22px;
		line-height: 22px;
		text-align: center;
		color: #ababab;
	}

	.info-btn .num {
		flex: 1;
		box-sizing: border-box;
		color: #333;
		font-weight: 700;
		padding: 0 4px;
		font-size: 13px;
	}

	.info-btn .disable {
		color: #eaeaea;
	}

	.checked {
		background: url(~assets/img/cart/check.png) no-repeat;
		background-size: contain;
		border: none !important;
	}
</style>
