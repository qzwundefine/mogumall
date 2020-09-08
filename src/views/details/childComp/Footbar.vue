<template>
	<div class="footbar">
		<van-goods-action>
			<van-goods-action-icon icon="shop-o" text="店铺"></van-goods-action-icon>
			<van-goods-action-icon icon="chat-o" text="客服" color="#ff5777" class="chat"></van-goods-action-icon>
			<van-goods-action-icon
				:icon="changeIcon"
				:text="changeText"
				@click="addToFav"
				:icon-class="{fav: getFav}"
			></van-goods-action-icon>
			<van-goods-action-button text="加入购物车" @click="addToCart"></van-goods-action-button>
			<van-goods-action-button text="立即购买"></van-goods-action-button>
		</van-goods-action>
	</div>
</template>

<script>
	export default {
		name: "Footbar",
		components: {},
		methods: {
			addToCart() {
				this.$emit("add-to-cart");
			},
			addToFav() {
				this.$store.commit("addToFav", {
					id: this.$attrs.item.id,
					title: this.$attrs.item.title,
					pic: this.$attrs.item.prePic
				});
				if (this.getFav) {
					this.$toast({
						message: "加入收藏",
						duration: 1000,
						className: "cart-toast"
					});
				} else {
					this.$toast({
						message: "取消收藏",
						duration: 1000,
						className: "fav-toast"
					});
				}
			}
		},
		computed: {
			getFav() {
				return this.$store.state.favList.some(
					item => item.id === this.$attrs.item.id
				);
			},
			changeIcon() {
				return this.getFav ? "star" : "star-o";
			},
			changeText() {
				return this.getFav ? "已收藏" : "收藏";
			}
		}
	};
</script>

<style scoped>
	.footbar .van-goods-action {
		box-sizing: border-box;
	}

	.footbar .van-goods-action-icon {
		border-top: 1px solid #ededed;
		border-right: 1px solid #ededed;
		box-sizing: border-box;
	}

	.footbar .van-goods-action-button {
		height: 50px;
		box-sizing: border-box;
	}

	.footbar .van-goods-action-button--first {
		margin-left: 0;
		background-color: #ffe6e8;
		border-radius: 0;
		color: #ff5777;
	}

	.footbar .van-goods-action-button--last {
		margin-right: 0;
		background: linear-gradient(90deg, #ff5777, #ff468f);
		border-radius: 0;
		color: #fff;
	}

	.footbar .van-goods-action-icon {
		width: 58px;
	}

	.chat {
		color: #ff5777;
	}

	.footbar >>> .fav {
		color: #ff5777;
	}
</style>
