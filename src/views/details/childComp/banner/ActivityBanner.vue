<template>
	<div class="activity-banner">
		<banner-content>
			<template #now-price-num>{{ item.activityPrice | format}}</template>
			<template #old-price-num>{{ item.oldPrice | format}}</template>
			<template #old-price-tag>活动价</template>
			<template #activity-count-down>
				<div class="activity-count-down">
					<span class="count-down-title">距结束</span>
					<van-count-down :time="item.countDown">
						<template v-slot="timeData">
							<span class="block">{{ timeData.hours | padZero}}</span>
							<span class="colon">:</span>
							<span class="block">{{ timeData.minutes | padZero}}</span>
							<span class="colon">:</span>
							<span class="block">{{ timeData.seconds | padZero}}</span>
						</template>
					</van-count-down>
				</div>
			</template>
		</banner-content>
	</div>
</template>

<script>
	import BannerContent from "./BannerContent";

	export default {
		name: "ActivityBanner",
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
			},
			padZero(value) {
				return value.toString().padStart(2, "0");
			}
		}
	};
</script>

<style scoped>
	.activity-banner {
		width: 100%;
		height: 50px;
		background-image: url(~assets/img/details/bgImg.png);
		background-size: contain;
	}

	.count-down-title {
		font-size: 12px;
		font-weight: 400;
	}

	.activity-count-down {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}

	.block {
		display: inline-block;
		text-align: center;
		width: 19px;
		height: 16px;
		line-height: 16px;
		box-sizing: border-box;
		color: #fff;
		font-size: 12px;
		background-color: #333;
		border-radius: 2px;
	}

	.colon {
		display: inline-block;
		width: 12.5px;
		height: 15px;
		font-size: 12px;
		line-height: 15px;
		text-align: center;
	}
</style>
