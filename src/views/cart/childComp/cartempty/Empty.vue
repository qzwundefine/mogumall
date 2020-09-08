<template>
	<div class="empty">
		<div class="empty-img">
			<img :src="image" alt="空空如也" />
		</div>
		<div class="empty-desc">
			<span>你的购物车空空如也</span>
		</div>
		<div class="empty-button">
			<button @click="onEmpty">去逛逛</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Empty",
		components: {},
		data() {
			return {
				image:
					"https://s10.mogucdn.com/mlcdn/c45406/180704_3ac3b297lghla2jjdhe23d5jfgddf_1500x1170.png"
			};
		},
		methods: {
			onEmpty() {
				this.$router.push("/home");
			}
		}
	};
</script>

<style scoped>
	.empty {
		width: 100%;
		background-color: #fff;
	}

	.empty-img {
		width: 100%;
	}

	.empty-img img {
		width: 100%;
		margin-top: -50px;
	}

	.empty-desc {
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #5e5e5e;
		margin: -65px 0 5px 0;
	}

	.empty-button {
		width: 100%;
		display: flex;
		justify-content: center;
		padding-bottom: 15px;
	}

	.empty-button button {
		width: 100px;
		box-sizing: border-box;
		font-size: 15px;
		color: #fff;
		padding: 6px 12.5px;
		border-radius: 4px;
		border: none;
		background-color: #ff5777;
		margin: 4px 6px;
	}
</style>
