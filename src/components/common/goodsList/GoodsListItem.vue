<template>
	<div class="goods-list-item">
		<slot name="goods-img"></slot>
		<slot name="goods-info"></slot>
	</div>
</template>

<script>
	export default {
		name: "GoodsListItem",
		components: {}
	};
</script>

<style scoped>
</style>
