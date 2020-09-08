<template>
	<div class="search-list-item">
		<slot name="left-icon"></slot>
		<slot name="left-text"></slot>
		<slot name="right-icon"></slot>
		<slot name="list-tag"></slot>
		<slot name="list-none"></slot>
	</div>
</template>

<script>
	export default {
		name: "SearchListItem",
		components: {}
	};
</script>

<style scoped>
	.search-list-item {
		margin-top: 5px;
		width: 100vw;
		padding: 10px;
		box-sizing: border-box;
	}
</style>
