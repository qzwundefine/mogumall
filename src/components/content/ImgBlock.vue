<template>
	<div class="img-block">
		<a :href="item.link" class="img-block-box" v-for="(item, index) in imgBlockData" :key="index">
			<div class="img-block-box-outer" :style="{backgroundImage: 'url(' + item.img + ')'}">
				<van-count-down :time="time" v-if="index === 0" class="count-down">
					<template v-slot="timeData">
						<span class="block">{{ timeData.hours | padZero}}</span>
						<span class="colon">:</span>
						<span class="block">{{ timeData.minutes | padZero}}</span>
						<span class="colon">:</span>
						<span class="block">{{ timeData.seconds | padZero}}</span>
					</template>
				</van-count-down>
				<p class="title">{{ item.title }}</p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: "ImgBlock",
		components: {},
		props: {
			imgBlockData: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				time: 10 * 60 * 60 * 1000
			};
		},
		filters: {
			padZero(value) {
				return value.toString().padStart(2, "0");
			}
		}
	};
</script>

<style scoped>
	.img-block {
		display: flex;
		padding: 9px 0 9px 9px;
		background-color: #fff;
		box-sizing: border-box;
	}

	.img-block-box {
		text-decoration: none;
		color: #666;
		box-sizing: border-box;
		display: flex;
	}

	.img-block-box-outer {
		width: 82.5px;
		height: 82.5px;
		margin-right: 9px;
		border-radius: 2px;
		background-size: cover;
		position: relative;
	}

	.title {
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		position: absolute;
		bottom: -10px;
		left: 12px;
	}

	.count-down {
		position: absolute;
		left: 12px;
		bottom: 20px;
	}

	.block {
		background-color: #333;
		color: #fff;
		font-size: 12px;
		font-weight: bold;
		border-radius: 2px;
	}

	.colon {
		font-size: 12px;
		margin: 0 0.5px;
	}
</style>
