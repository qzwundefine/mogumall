<template>
	<div class="services" @click="showServices">
		<div class="service-item" v-for="(item, index) in services" :key="index">
			<img src="~assets/img/details/services_icon.webp" alt />
			<span class="service-title">{{ item }}</span>
		</div>
		<van-icon name="arrow" color="#666" size="13"></van-icon>
		<van-popup
			v-model="show"
			position="bottom"
			closeable
			close-on-click-overlay
			get-container="body"
			:lock-scroll="false"
			:overlay-style="{backgroundColor: 'rgba(0,0,0,.4)'}"
		>
			<services-desc v-bind="$attrs"></services-desc>
		</van-popup>
	</div>
</template>

<script>
	import ServicesDesc from "./ServicesDesc";

	export default {
		name: "Services",
		components: {
			ServicesDesc
		},
		props: {
			services: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				show: false
			};
		},
		methods: {
			showServices() {
				this.show = true;
			}
		}
	};
</script>

<style scoped>
	.services {
		width: 100%;
		display: flex;
		height: 38px;
		background-color: #fff;
		padding: 0 15px;
		margin: 10px 0;
		box-sizing: border-box;
		align-items: center;
	}

	.service-item {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.service-item img {
		width: 15px;
		height: 15px;
	}

	.service-title {
		font-size: 12px;
		color: #666;
		white-space: nowrap;
		margin-left: 2px;
	}
</style>
