<template>
	<div class="balance">
		<div class="check-all">
			<input
				type="checkbox"
				class="all-checkbox"
				id="check-all"
				@click="checkAll"
				:class="{checked: checkedAll}"
			/>
			<label for="check-all-label">全选</label>
			<span class="check-num">{{ '(' + getChecked.length + ')'}}</span>
		</div>
		<div class="total" v-show="!getEdit">
			<div class="total-info">
				<span class="total-unit">￥</span>
				<span class="total-price">{{ getPrice.toFixed(2) }}</span>
			</div>
			<div class="balance-btn">结算</div>
		</div>
		<div class="edit" v-show="getEdit">
			<div class="add-to-fav">移入收藏夹</div>
			<div class="delete-btn" @click="onPopup">删除</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Balance",
		components: {},
		methods: {
			checkAll() {
				this.$emit("check-all");
			},
			onPopup() {
				if (this.getChecked.length != 0) {
					this.$store.commit("popup");
				} else {
					this.$toast({
						message: "请先选择商品",
						duration: 1000,
						className: "cart-toast"
					});
				}
			}
		},
		computed: {
			checkedAll() {
				return this.$store.state.cartList.every(
					item => item.shopChecked === true
				);
			},
			getChecked() {
				let temp = [];
				this.$store.state.cartList.forEach(item =>
					temp.push(...item.goodsList.filter(item => item.goodChecked === true))
				);
				return temp;
			},
			getPrice() {
				return this.getChecked.reduce((price, item) => {
					return price + parseFloat(item.price) * item.num;
				}, 0);
			},
			getEdit() {
				return this.$store.state.isEdit;
			}
		}
	};
</script>

<style scoped>
	.balance {
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		box-sizing: border-box;
		background-color: #fff;
		padding: 10px 15px;
		border-top: 1px solid #d8d8d8;
		display: flex;
		justify-content: space-between;
	}

	.check-all {
		display: flex;
		flex: 1;
		align-items: center;
		font-size: 14px;
		color: #5e5e5e;
	}

	.total {
		display: flex;
		align-items: center;
	}

	.total-info {
		font-weight: 700;
		font-size: 16px;
		color: #f46;
		display: flex;
		align-items: flex-end;
	}

	.total-unit {
		font-weight: 500;
		font-size: 10px;
	}

	.balance-btn,
	.add-to-fav,
	.delete-btn {
		width: 62px;
		height: 28px;
		line-height: 28px;
		margin-left: 9px;
		text-align: center;
		background-color: #ff5777;
		color: #fff;
		border-radius: 15px;
	}

	.check-num {
		margin-left: 5px;
	}

	.checked {
		background: url(~assets/img/cart/check.png) no-repeat;
		background-size: contain;
		border: none !important;
	}

	.edit {
		display: flex;
		align-items: center;
	}

	.add-to-fav {
		min-width: 62px;
		width: auto;
		box-sizing: border-box;
		padding: 0 15px;
		font-size: 16px;
		background-color: #fff;
		border: 1px solid #ff5777;
		color: #ff5777;
	}
</style>
