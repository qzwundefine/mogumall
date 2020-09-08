<template>
	<van-tabbar v-model="active" active-color="#ff3f78" fixed route>
		<van-tabbar-item class="item-content" to="/home">首页</van-tabbar-item>
		<van-tabbar-item class="item-content" to="/shop">商城</van-tabbar-item>
		<van-tabbar-item class="item-content" to="/live">直播</van-tabbar-item>
		<van-tabbar-item class="item-content" to="profile">我</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
		name: "MallTabbar",
		components: {},
		data() {
			return {
				active: 0
			};
		}
	};
</script>

<style scoped>
	.item-content {
		font-size: 16px;
		padding-bottom: 5px;
	}
</style>
