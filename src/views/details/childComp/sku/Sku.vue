<template>
	<div class="sku" @click="showSku">
		<div class="sku-text">
			{{ skuText }}
			<span v-show="showSel" class="act-color">{{ actText }}</span>
		</div>
		<van-icon name="arrow" color="#666" size="13"></van-icon>
		<van-popup
			v-model="show"
			position="bottom"
			closeable
			close-on-click-overlay
			get-container="body"
			:lock-scroll="false"
			:overlay-style="{backgroundColor: 'rgba(0,0,0,.4)'}"
		>
			<sku-content v-bind="$attrs" @sku-text="getSkuText" ref="skuContent"></sku-content>
		</van-popup>
	</div>
</template>

<script>
	import SkuContent from "./SkuContent";

	export default {
		name: "Sku",
		components: {
			SkuContent
		},
		data() {
			return {
				show: false,
				skuText: "请选择：颜色 尺码",
				actText: "",
				showSel: false
			};
		},
		methods: {
			showSku() {
				this.show = true;
			},
			getSkuText() {
				this.skuText = this.$refs.skuContent.skuText;
				this.actText = this.$refs.skuContent.actText;
				this.showSel = this.$refs.skuContent.showSel;
			}
		}
	};
</script>

<style scoped>
	.sku {
		width: 100%;
		height: 45px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 15px;
		margin: 10px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.sku-text {
		font-size: 12px;
		color: #666;
	}

	.van-popup {
		overflow-y: visible;
	}

	.act-color {
		color: #f25;
	}
</style>
