<template>
	<div class="sku-content">
		<div class="main-info">
			<van-image :src="prePic" width="80" radius="2"></van-image>
			<div class="right-origin">
				<div class="now-price">
					<span class="price-unit">￥</span>
					<span class="price-num">{{ nowPrice }}</span>
				</div>
				<div class="stock">库存{{ stock }}件</div>
				<div class="sku-text">
					{{ skuText }}
					<span v-show="showSel" class="act-color">{{ actText }}</span>
				</div>
			</div>
		</div>
		<div class="sku-info">
			<sku-info>
				<template #sku-label>
					<div class="sku-label">颜色</div>
				</template>
				<template #sku-item>
					<ul class="sku-list">
						<li
							v-for="(color, index) in attribute['颜色']"
							:key="index"
							@click="selectedColor(color, index)"
							:class="{'is-activity': colorIndex === index}"
						>{{ color.name }}</li>
					</ul>
				</template>
			</sku-info>
			<sku-info>
				<template #sku-label>
					<div class="sku-label">尺码</div>
				</template>
				<template #sku-item>
					<ul class="sku-list">
						<li
							v-for="(size, index) in attribute['尺码']"
							:key="index"
							@click="selectedSize(size, index)"
							:class="{'is-activity': sizeIndex === index}"
						>{{ size.name }}</li>
					</ul>
				</template>
			</sku-info>
			<sku-info>
				<template #sku-label>
					<div class="sku-label">数量</div>
				</template>
				<template #sku-item>
					<div class="number-calculator">
						<span class="btn-reduce" :class="{disabled: number === 1}" @click="reduce">-</span>
						<span class="view-value">{{ number }}</span>
						<span class="btn-add" @click="add">+</span>
					</div>
				</template>
			</sku-info>
		</div>
		<div class="buy-and-cart-btn">
			<buy-and-cart>
				<template #cart-btn>
					<div class="cart-btn" @click="addToCart">
						<span>加入购物车</span>
					</div>
				</template>
				<template #buy-btn>
					<div class="buy-btn">
						<span>立即购买</span>
					</div>
				</template>
			</buy-and-cart>
		</div>
	</div>
</template>

<script>
	import SkuInfo from "./SkuInfo";
	import BuyAndCart from "../BuyAndCart";

	export default {
		name: "SkuContent",
		components: {
			SkuInfo,
			BuyAndCart
		},
		inheritAttrs: false,
		data() {
			return {
				item: this.$attrs.item,
				shop: this.$attrs.shopIntroduction,
				prePic: this.$attrs.item.prePic,
				attribute: this.$attrs.item.attribute,
				sku: this.$attrs.item.sku,
				skuLabel: ["颜色", "尺码"],
				number: 1,
				stock: 0,
				skuText: "",
				tag: [],
				colorIndex: -2,
				sizeIndex: -2,
				actText: "",
				showSel: false
			};
		},
		created() {
			this.stock = this.getStock;
			this.skuText = this.getSkuText;
		},
		methods: {
			add() {
				this.number++;
			},
			reduce() {
				if (this.number > 1) {
					this.number--;
				} else {
					this.$toast({
						message: "至少要购买1件哦～",
						duration: 1000,
						className: "sku-toast"
					});
				}
			},
			selectedColor(color, index) {
				// 没有活跃项状态
				if (this.colorIndex === index) {
					this.colorIndex = -2;
					// 向skulabel中添加该标签项，并更新skutext
					this.skuLabel.splice(0, 0, "颜色");
					this.skuText = this.getSkuText;
					this.$emit("sku-text");
					// 展示默认图片
					this.prePic = this.item.prePic;

					color.isSelected = false;

					// 有活跃项状态
				} else {
					// 获取上一个活跃项的索引
					if (this.colorIndex != -2) {
						let preIndex = this.colorIndex;
						this.attribute["颜色"][preIndex].isSelected = false;
					}
					this.colorIndex = index;
					color.isSelected = true;
					// 如果该标签还在skutext中展示，就在skulabel中删除该标签，并更新skutext
					let labelIndex = this.skuLabel.findIndex(item => item === "颜色");
					if (labelIndex != -1) {
						this.skuLabel.splice(0, 1);
						this.skuText = this.getSkuText;
						this.$emit("sku-text");
					}
					// 展示活跃项的商品图片
					this.prePic = color.pic;
				}
			},
			selectedSize(size, index) {
				if (this.sizeIndex === index) {
					this.sizeIndex = -2;
					this.skuLabel.splice(1, 0, "尺码");
					this.skuText = this.getSkuText;
					this.$emit("sku-text");
					size.isSelected = false;
				} else {
					if (this.sizeIndex != -2) {
						let preIndex = this.sizeIndex;
						this.attribute["尺码"][preIndex].isSelected = false;
					}
					this.sizeIndex = index;
					size.isSelected = true;
					let labelIndex = this.skuLabel.findIndex(item => item === "尺码");
					if (labelIndex != -1) {
						this.skuLabel.splice(labelIndex, 1);
						this.skuText = this.getSkuText;
						this.$emit("sku-text");
					}
				}
			},
			addTag(color, size) {
				if (this.tag != []) {
					this.tag = [];
				}
				if (color != -2 && size != -2) {
					let colorTag = this.attribute["颜色"].find(item => item.isSelected)
						.selectedTag;
					let sizeTag = this.attribute["尺码"].find(item => item.isSelected)
						.selectedTag;
					this.tag.push(colorTag, sizeTag);
					let flag = this.tag.join("");
					this.actText =
						"“" +
						this.sku[flag].text[0] +
						"”" +
						"“" +
						this.sku[flag].text[1] +
						"”";
					this.skuText = "已选择：";
					this.showSel = true;
					this.$emit("sku-text");
					this.stock = this.sku[flag].stock;
				} else {
					this.tag = [];
					this.showSel = false;
					this.$emit("sku-text");
					this.showStock(color, size);
				}
			},
			showStock(color, size) {
				if (color === -2 && size === -2) {
					this.stock = this.item.stock;
				} else if (color != -2) {
					this.stock = this.attribute["颜色"][color].stock;
				} else {
					this.stock = this.attribute["尺码"][size].stock;
				}
			},
			addToCart() {
				if (this.tag.length === 0) {
					this.$toast({
						message: "请选择商品规格",
						duration: 1000,
						className: "sku-toast"
					});
				} else {
					this.$store.commit("addToCart", {
						shopName: this.shop.name,
						shopLink: this.shop.link,
						shopChecked: false,
						item: {
							num: this.number,
							skuId: this.tag.join(""),
							color: this.sku[this.tag.join("")].text[0],
							size: this.sku[this.tag.join("")].text[1],
							title: this.item.title,
							price: this.nowPrice,
							pic: this.prePic,
							goodChecked: false
						}
					});
					this.$toast({
						message: "加入购物车成功",
						duration: 1000,
						className: "sku-toast"
					});
				}
			}
		},
		computed: {
			nowPrice() {
				return ((this.item.oldPrice * this.item.discount) / 10).toFixed(2);
			},
			getSkuText() {
				return "请选择：" + this.skuLabel.join(" ");
			},
			getStock() {
				return this.item.stock;
			}
		},
		watch: {
			colorIndex() {
				this.addTag(this.colorIndex, this.sizeIndex);
			},
			sizeIndex() {
				this.addTag(this.colorIndex, this.sizeIndex);
			}
		}
	};
</script>

<style scoped>
	.sku-content {
		width: 100%;
		height: 53vh;
		background-color: #fff;
	}

	.main-info {
		width: 100%;
		height: 100px;
		box-sizing: border-box;
		padding: 15px 7.5px;
		position: relative;
	}

	.van-image {
		position: absolute;
		bottom: 15px;
		margin-left: 8.5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
	}

	.right-origin {
		margin-left: 103.5px;
		color: #333;
	}

	.price-unit {
		font-size: 12px;
		position: relative;
		top: -10px;
	}

	.price-num {
		font-size: 28px;
	}

	.stock {
		font-size: 12px;
	}

	.sku-text {
		font-size: 12px;
	}

	.sku-info {
		width: 100%;
		box-sizing: border-box;
		padding: 0 7.5px 15px;
	}

	.sku-label {
		font-size: 12px;
		line-height: 12px;
		margin: 7.5px 0 5px;
		color: #5e5e5e;
	}

	.sku-list {
		display: flex;
		font-size: 12px;
		color: #5e5e5e;
		padding-bottom: 5px;
	}

	.sku-list li {
		line-height: 26px;
		border: 1px solid #bbb;
		box-sizing: border-box;
		padding: 0 15px;
		border-radius: 3px;
		margin: 0 10px 10px 0;
	}

	.number-calculator {
		display: flex;
		width: 90px;
		height: 25px;
		box-sizing: border-box;
		border: 1px solid #bbb;
		border-radius: 3px;
		align-items: center;
		margin-top: 7.5px;
	}

	.btn-reduce,
	.btn-add {
		width: 28px;
		text-align: center;
		font-size: 16px;
		line-height: 23px;
		color: #ed4566;
	}

	.view-value {
		flex: 1;
		text-align: center;
		color: #333;
		font-size: 14px;
		line-height: 23px;
		border-left: 1px solid #bbb;
		border-right: 1px solid #bbb;
	}

	.disabled {
		color: #999;
	}

	.buy-and-cart-btn {
		height: calc(53vh - 100px - 194.5px);
	}

	.cart-btn,
	.buy-btn {
		flex: 1;
		display: flex;
		font-size: 14px;
		align-items: center;
		justify-content: center;
	}

	.cart-btn span,
	.buy-btn span {
		margin-bottom: 7.5px;
	}

	.cart-btn {
		background-color: #ffe6e8;
		color: #ff5777;
	}

	.buy-btn {
		color: #fff;
		background: linear-gradient(90deg, #ff5777, #ff468f);
	}

	.sku-list .is-activity {
		color: #ed4566;
		border-color: #ed4566;
	}

	.act-color {
		color: #f25;
	}
</style>
