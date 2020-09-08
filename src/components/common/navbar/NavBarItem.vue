<template>
	<div class="navbar-item">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default {
		name: "NavBarItem",
		components: {}
	};
</script>

<style scoped>
</style>