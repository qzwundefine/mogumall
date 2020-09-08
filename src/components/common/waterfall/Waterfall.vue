<template>
	<div class="waterfall">
		<slot name="default"></slot>
	</div>
</template>

<script>
	export default {
		name: "WaterFall",
		components: {}
	};
</script>

<style scoped>
	.waterfall {
		display: flex;
		width: 100%;
		flex-direction: row;
		box-sizing: border-box;
	}
</style>
