<template>
	<div class="details-swipe">
		<van-swipe :width="280" :show-indicators="false" touchable :loop="false">
			<van-swipe-item v-for="(img, index) in detailsSwipe" :key="index">
				<div class="img-wrap">
					<img :src="img" alt class="swipe-img" />
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: "DetailsSwipe",
		components: {},
		props: {
			detailsSwipe: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	};
</script>

<style scoped>
	.details-swipe {
		background-color: #fff;
		min-height: 130px;
		max-height: 390px;
		overflow: hidden;
	}

	.details-swipe >>> .van-swipe__track {
		align-items: center;
	}

	.img-wrap {
		padding: 8px 10px 0 10px;
		box-sizing: border-box;
		font-size: 0;
	}

	.swipe-img {
		width: 100%;
		border: none;
		border-radius: 2px;
		background-color: #eee;
		box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
	}
</style>
