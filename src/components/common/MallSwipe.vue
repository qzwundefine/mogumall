<template>
	<div class="mall-swiper">
		<van-swipe autoplay="3000" @change="onChange">
			<van-swipe-item v-for="(image, index) in swipeImages" :key="index" class="custom-item">
				<img :src="image" alt class="swipe-img" />
			</van-swipe-item>
			<template #indicator>
				<ul class="custom-indicator">
					<li
						v-for="(item, index) in swipeImages"
						:key="index"
						:class="{'indicator-active': current === index}"
					></li>
				</ul>
			</template>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: "MallSwiper",
		components: {},
		data() {
			return {
				current: 0
			};
		},
		props: {
			swipeImages: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		methods: {
			onChange(index) {
				this.current = index;
			}
		}
	};
</script>

<style scoped>
	.custom-item {
		height: 130px;
	}

	.swipe-img {
		height: 130px;
	}

	.custom-indicator {
		position: absolute;
		left: 5px;
		bottom: 8px;
	}

	.custom-indicator li {
		float: left;
		width: 6px;
		height: 6px;
		background-color: #fff;
		margin: 0 5px;
		border-radius: 50%;
	}

	.custom-indicator .indicator-active {
		background-color: #d43e2e;
	}
</style>
