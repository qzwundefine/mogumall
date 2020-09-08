<template>
	<div class="title-desc">
		<div class="title-info">
			<div class="title van-multi-ellipsis--l2">{{ item.title }}</div>
			<a :href="item.extra.pickLink" class="pickforme">
				<img src="~assets/img/details/pickforme_icon.png" alt />
				<span class="pickforme-text">帮我选</span>
			</a>
		</div>
		<div class="extra-info">
			<div class="services">
				<span
					v-for="(service, index) in item.extra.services"
					:key="index"
					class="service-item"
				>{{ service }}</span>
			</div>
			<slot name="location">
				<div class="location">{{ item.extra.location }}</div>
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TitleDesc",
		components: {},
		props: {
			item: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	};
</script>

<style scoped>
	.title-desc {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding-top: 9px;
		color: #333;
	}

	.title-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 15px;
		margin: 0 15px;
		flex: 1;
	}

	.pickforme {
		display: flex;
		height: 24px;
		line-height: 24px;
		align-items: center;
		padding: 0 12px 0 13.5px;
		background-color: #f8f8f8;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
	}

	.pickforme img {
		width: 13.5px;
		height: 13.5px;
		margin-right: 3px;
	}

	.pickforme-text {
		font-size: 12px;
		color: #999;
	}

	.extra-info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 16px;
		font-size: 12px;
		color: #999;
		line-height: 34px;
		border-bottom: 1px solid #eee;
	}

	.services {
		flex: 1;
	}

	.location {
		text-align: right;
		flex: 1;
	}

	.service-item {
		margin-right: 3px;
	}
</style>
