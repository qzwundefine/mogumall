<template>
	<div class="normal-banner">
		<banner-content>
			<template #now-price-num>{{ item.oldPrice * item.discount / 10 | format}}</template>
			<template #old-price-num>{{ item.oldPrice | format}}</template>
			<template #old-price-tag>{{ item.discount + '折'}}</template>
		</banner-content>
	</div>
</template>

<script>
	import BannerContent from "./BannerContent";

	export default {
		name: "NormalBanner",
		components: {
			BannerContent
		},
		props: {
			item: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		filters: {
			format(value) {
				return value.toFixed(2);
			}
		}
	};
</script>

<style scoped>
	.normal-banner {
		width: 100%;
		box-sizing: border-box;
		padding: 10px 16px 0;
		background-color: #fff;
	}

	.banner-content {
		color: #333;
		padding: 0;
		height: 46px;
		line-height: 46px;
	}

	.normal-banner >>> .now-price-unit {
		margin-top: 5px;
	}

	.normal-banner >>> .now-price-num {
		font-size: 35px;
		margin-bottom: 5px;
	}

	.normal-banner >>> .old-price-info {
		line-height: 30px;
	}

	.normal-banner >>> .old-price-unit,
	.normal-banner >>> .old-price-num {
		color: #999;
	}

	.normal-banner >>> .old-price-tag {
		display: flex;
		padding: 0;
	}

	.normal-banner >>> .old-price-tag span {
		padding: 0 4px;
		background-color: rgb(255, 232, 238);
		color: rgb(255, 34, 85);
	}
</style>
