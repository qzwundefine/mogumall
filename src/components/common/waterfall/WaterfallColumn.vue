<template>
	<div class="waterfall-column">
		<slot name="default"></slot>
	</div>
</template>

<script>
	export default {
		name: "WaterfallColumn",
		components: {}
	};
</script>

<style scoped>
	.waterfall-column {
		display: flex;
		width: calc(100% / 2);
		flex-direction: column;
		box-sizing: border-box;
		margin-left: 9px;
	}
</style>
