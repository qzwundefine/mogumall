<template>
	<div class="search-goods-list">
		<ul class="search-tabs">
			<li
				class="tab-item"
				v-for="(tab, index) in tabs"
				:key="index"
				@click="onTab(tab, index)"
				:class="{activity: currentIndex === index}"
			>
				<span>{{ tab }}</span>
			</li>
			<li class="dropdown-menu tab-item" @click="onDropdown" :class="{activity: isShow }">
				<span>价格</span>
				<span class="arrow-drop"></span>
			</li>
		</ul>
		<transition name="fade">
			<div class="dropdown-options" v-show="isShow" :class="{fade: isShow}">
				<div class="price-option">
					<div
						class="price-range"
						v-for="(item, index) in priceRange"
						:key="index"
						@click="onOption(item)"
					>{{ item.minPrice }} - {{ item.maxPrice }}</div>
				</div>
				<div class="price-input">
					<div for="minPrice" class="range-label">区间(元)</div>
					<input
						type="number"
						name="minPrice"
						class="min-price price-input-item"
						v-model.number="minPrice"
					/>
					<span class="dashed"></span>
					<input
						type="number"
						name="maxPrice"
						class="max-price price-input-item"
						v-model.number="maxPrice"
					/>
					<button class="confirm-btn price-input-item" @click="onDropdown">确认</button>
				</div>
			</div>
		</transition>
		<goods-list :tabInfo="tabInfo" :goods="goods" ref="goodsList" :key="tabInfo.tab"></goods-list>
	</div>
</template>

<script>
	import GoodsList from "./GoodsList";

	import { searchGoods } from "assets/fakeData/searchData";

	export default {
		name: "SearchGoodsList",
		components: {
			GoodsList
		},
		data() {
			return {
				currentIndex: 0,
				tabs: ["综合", "销量", "新品"],
				priceRange: [
					{
						minPrice: 60,
						maxPrice: 80
					},
					{
						minPrice: 80,
						maxPrice: 100
					},
					{
						minPrice: 100,
						maxPrice: 200
					}
				],
				minPrice: "",
				maxPrice: "",
				isShow: false,
				tabInfo: {
					tab: "综合",
					minPrice: 0,
					maxPrice: 0
				},
				goods: {
					综合: [],
					销量: [],
					新品: []
				}
			};
		},
		created() {
			this.getListItem();
		},
		methods: {
			onTab(tab, index) {
				if (this.currentIndex === index) {
					return;
				} else {
					this.currentIndex = index;
					this.tabInfo.tab = tab;
					window.scrollTo(0, 0);
					if (this.goods[tab].length === 0) {
						this.$refs.goodsList.onLoad();
					}
				}
			},
			onOption(item) {
				this.minPrice = item.minPrice;
				this.maxPrice = item.maxPrice;
				this.onDropdown();
			},
			onDropdown() {
				this.isShow = !this.isShow;
				this.getPrice();
			},
			getPrice() {
				this.tabInfo.minPrice = this.minPrice;
				this.tabInfo.maxPrice = this.maxPrice;
			},
			getListItem() {
				for (let i = 0; i < 10; i++) {
					this.goods[this.tabInfo.tab].push(
						searchGoods[this.$route.params.keyword][this.tabInfo.tab][i]
					);
				}
			}
		}
	};
</script>

<style scoped>
	.search-goods-list {
		width: 100%;
		margin-top: 45px;
	}

	.search-tabs {
		width: 100%;
		height: 40px;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 1px solid #eaeaea;
		display: flex;
		overflow: hidden;
		position: fixed;
		top: 45px;
		z-index: 10;
	}

	.tab-item {
		flex: 1;
		text-align: center;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.tab-item span {
		display: inline-block;
		height: 15px;
		line-height: 15px;
		font-size: 14px;
		width: 100%;
		border-left: 1px solid #e6e6e6;
		color: #333;
	}

	.search-tabs li:first-child span {
		border-left: 0;
	}

	.activity span {
		color: #ff5777;
	}

	.dropdown-menu {
		position: relative;
	}

	.dropdown-menu .arrow-drop {
		height: 10px;
		width: 10px;
		border-left: 1px solid #c3c3c3;
		border-bottom: 1px solid #c3c3c3;
		transform: rotate(-45deg);
		position: absolute;
		right: 15px;
		bottom: 17px;
	}

	.dropdown-options {
		width: 100%;
		height: 0;
		display: flex;
		flex-flow: column nowrap;
		position: fixed;
		top: 85px;
		background-color: #fff;
		box-sizing: border-box;
		opacity: 0;
		overflow: hidden;
		z-index: 10;
	}

	.fade {
		height: 100px;
		opacity: 1;
		border-bottom: 1px solid #eaeaea;
	}

	.price-option {
		width: 100%;
		flex: 1;
		display: flex;
		box-sizing: border-box;
		padding: 7.5px;
	}

	.price-range {
		flex: 1;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		box-sizing: border-box;
		text-align: center;
		background-color: #f3f3f3;
		margin: 7.5px 0 0 7.5px;
		color: #333;
	}

	.price-option div.price-range:first-child {
		margin-left: 0;
	}

	.price-input {
		flex: 1;
		width: 100%;
		box-sizing: border-box;
		padding: 0 7.5px;
		display: flex;
		color: #333;
		justify-content: space-between;
		align-items: center;
	}

	.dashed {
		display: inline-block;
		width: 10px;
		height: 1px;
		background-color: #cbcbcb;
	}

	.range-label {
		font-size: 14px;
	}

	.price-input-item {
		width: 85px;
		height: 30px;
		box-sizing: border-box;
		border-radius: 2px;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
		outline: none;
	}

	.min-price,
	.max-price {
		padding: 0 5px;
		border: 1px solid #e5e5e5;
	}

	.confirm-btn {
		border: none;
		background-color: #ff5b76;
		color: #fff;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		height: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s ease;
	}

	.fade-enter-to,
	.fade-leave {
		opacity: 1;
		height: 100px;
		border-bottom: 1px solid #eaeaea;
	}
</style>
