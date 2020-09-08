<template>
	<div class="nav-grid">
		<van-grid :column-num="5" icon-size="50px" :border="false">
			<van-grid-item
				v-for="item in gridData"
				:key="item.text"
				:text="item.text"
				:icon="item.link"
				:url="item.act"
			></van-grid-item>
		</van-grid>
	</div>
</template>

<script>
	export default {
		name: "NavGrid",
		components: {},
		props: {
			gridData: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	};
</script>

<style scoped>
	.nav-grid >>> .van-grid-item__content {
		padding: 5px 0;
	}

	.nav-grid >>> .van-grid-item__text {
		font-size: 12.5px;
		margin-top: 3px;
	}
</style>
