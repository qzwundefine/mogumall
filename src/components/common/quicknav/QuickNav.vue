<template>
	<div class="quick-nav">
		<div class="popup-menus">
			<transition-group name="van-slide-up">
				<div class="menu-item" v-for="(menu, index) in menus" :key="index" v-show="isShow">
					<span class="menu-text">{{ menu.text }}</span>
					<div class="menu-btn" @click="onNav(menu.text)">
						<i class="menu-icon" :style="{backgroundImage:  'url(' + menu.bgImg + ')'}"></i>
					</div>
				</div>
			</transition-group>
		</div>
		<div class="menus-title" @click="popup" :class="{'menus-title-show': isShow}">
			<span v-show="!isShow">快捷</span>
			<span v-show="!isShow">导航</span>
			<i class="title-icon" v-show="isShow"></i>
		</div>
		<transition name="van-fade">
			<div class="back-top" v-show="isBackTop" @click="backTop">
				<i class="back-top-icon"></i>
				<div class="back-top-title">置顶</div>
			</div>
		</transition>
		<div class="overlay" @click="popup" v-show="isShow"></div>
	</div>
</template>

<script>
	export default {
		name: "QuickNav",
		components: {},
		mounted() {
			window.addEventListener("scroll", this.getScrollTop);
		},
		destroyed() {
			window.removeEventListener("scroll", this.getScrollTop);
		},
		data() {
			return {
				menus: [
					{
						text: "首页",
						bgImg: require("assets/img/quicknav/首页.jpg")
					},
					{
						text: "购物车",
						bgImg: require("assets/img/quicknav/购物车.jpg")
					},
					{
						text: "搜索",
						bgImg: require("assets/img/quicknav/搜索.jpg")
					},
					{
						text: "查订单",
						bgImg: require("assets/img/quicknav/查订单.jpg")
					}
				],
				isShow: false,
				isBackTop: false
			};
		},
		methods: {
			popup() {
				this.isShow = !this.isShow;
			},
			getScrollTop() {
				let scrollTop =
					document.body.scrollTop || document.documentElement.scrollTop;
				let viewHeight = window.innerHeight;
				if (scrollTop >= viewHeight) {
					this.isBackTop = true;
				} else {
					this.isBackTop = false;
				}
			},
			backTop() {
				window.scrollTo(0, 0);
			},
			onNav(text) {
				switch (text) {
					case "首页":
						this.$router.push("/home");
						break;
					case "购物车":
						this.$router.push("/cart");
						break;
					case "搜索":
						console.log("搜索");
						break;
					case "查订单":
						console.log("查订单");
						break;
				}
			}
		}
	};
</script>

<style scoped>
	.quick-nav {
		position: fixed;
		bottom: 10px;
		right: 15px;
		z-index: 999;
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-end;
	}

	.menus-title,
	.back-top {
		width: 50px;
		height: 50px;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		background-color: #000;
		border-radius: 50%;
		margin-top: 15px;
		color: #fff;
		opacity: 0.7;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		z-index: 999;
		position: relative;
		right: -5px;
	}

	.back-top-icon {
		width: 14px;
		height: 17px;
		background: url(~assets/img/quicknav/backTop.png) no-repeat;
		background-size: contain;
	}

	.menus-title-show {
		background-color: #ff5577;
		opacity: 1;
	}

	.title-icon {
		width: 15px;
		height: 15px;
		background: url(~assets/img/quicknav/close.png) no-repeat;
		background-size: contain;
	}

	.popup-menus {
		position: relative;
		z-index: 999;
	}

	.menu-item {
		display: flex;
		color: #fff;
		font-size: 14px;
		align-items: center;
		margin-top: 13px;
		bottom: 15px;
		right: 0;
	}

	.menu-text {
		width: 63px;
		text-align: center;
	}

	.menu-btn {
		width: 40px;
		height: 40px;
		opacity: 1;
		background-color: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-icon {
		font-style: normal;
		display: inline-block;
		width: 17px;
		height: 17px;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.overlay {
		width: 100rem;
		height: 100rem;
		position: fixed;
		top: 0;
		left: 0;
		border: 1px solid #333;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 998;
	}
</style>
