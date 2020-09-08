<template>
	<div class="popup">
		<div class="confirm">
			<div class="confirm-title">确定删除商品吗</div>
			<div class="confirm-content">
				<div class="cancel-btn" @click="onPopup">取消</div>
				<div class="confirm-btn" @click="onDelete">确认</div>
			</div>
		</div>
		<div class="popup-mask" @click="onPopup"></div>
	</div>
</template>

<script>
	export default {
		name: "Popup",
		components: {},
		methods: {
			onPopup() {
				this.$store.commit("popup");
			},
			onDelete() {
				this.$store.commit("removeFromCart");
				this.onPopup();
			}
		}
	};
</script>

<style scoped>
	.popup {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2008;
	}

	.popup-mask {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2009;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.confirm {
		width: 70%;
		min-height: 93px;
		position: fixed;
		font-size: 14px;
		color: #666;
		background-color: #fafafa;
		border-radius: 3px;
		box-sizing: border-box;
		left: 50%;
		top: 50%;
		margin-left: -35%;
		margin-top: -47px;
		z-index: 2010;
	}

	.confirm-title {
		padding: 16px;
		text-align: center;
	}

	.confirm-content {
		display: flex;
		border-top: 1px solid #ccc;
	}

	.cancel-btn,
	.confirm-btn {
		flex: 1;
		text-align: center;
		box-sizing: border-box;
		padding: 10px 0;
	}

	.confirm-btn {
		border-left: 1px solid #ccc;
		color: #ff5e7a;
	}
</style>
