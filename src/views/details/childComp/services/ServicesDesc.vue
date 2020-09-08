<template>
	<div class="services-desc">
		<div class="services-desc-title">服务说明</div>
		<ul class="services-desc-content">
			<li class="services-desc-item" v-for="(item, index) in $attrs.desc" :key="index">
				<span class="desc-item-title">{{ item.title }}</span>
				<span class="desc-item-content">{{ item.content }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ServicesDesc",
		components: {},
		inheritAttrs: false
	};
</script>

<style scoped>
	.services-desc {
		width: 100%;
		height: 68vh;
		background-color: #fff;
		box-sizing: border-box;
		padding: 15px;
	}

	.services-desc-title {
		font-size: 16px;
		padding: 11px 0;
		color: #999;
		text-align: center;
		line-height: normal;
	}

	.services-desc-item {
		box-sizing: border-box;
		padding: 10px 16px 10px 0;
		border-bottom: 1px solid #dfdfdf;
	}

	.services-desc-content li:last-child {
		border: none;
	}

	.services-desc-item span {
		display: block;
		line-height: normal;
	}

	.desc-item-title {
		font-size: 14px;
		color: #333;
	}

	.desc-item-content {
		font-size: 12px;
		color: #999;
	}
</style>
