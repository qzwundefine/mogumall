<template>
	<div class="content-item">
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
			loading-text="卖力加载中"
		>
			<waterfall>
				<waterfall-column>
					<div v-for="(item, index) in list1" :key="index" class="item-wrap">
						<a :href="item.act" class="item-info-link">
							<img :src="item.itemImg" :alt="item.desc" v-lazy="item.itemImg" />
						</a>
						<a :href="item.userAct" class="item-info-wrapper">
							<div class="item-info-desc van-multi-ellipsis--l2">{{ item.desc }}</div>
							<div class="item-info-tag">
								<div class="item-info-tag-img">
									<img :src="item.tagImg" v-lazy="item.tagImg" />
								</div>
								<span van-ellipsis>{{ item.tag }}</span>
							</div>
							<div class="item-info-profile van-ellipsis">
								<div class="item-info-avatar-wrapper">
									<img :src="item.avatar" v-lazy="item.avatar" />
								</div>
								{{ item.userName }}
							</div>
						</a>
					</div>
				</waterfall-column>
				<waterfall-column>
					<div v-for="(item, index) in list2" :key="index" class="item-wrap">
						<a :href="item.act" class="item-info-link">
							<img :src="item.itemImg" :alt="item.desc" v-lazy="item.itemImg" />
						</a>
						<a :href="item.userAct" class="item-info-wrapper">
							<div class="item-info-desc van-multi-ellipsis--l2">{{ item.desc }}</div>
							<div class="item-info-tag">
								<div class="item-info-tag-img">
									<img :src="item.tagImg" v-lazy="item.tagImg" />
								</div>
								<span van-ellipsis>{{ item.tag }}</span>
							</div>
							<div class="item-info-profile van-ellipsis">
								<div class="item-info-avatar-wrapper">
									<img :src="item.avatar" v-lazy="item.avatar" />
								</div>
								{{ item.userName }}
							</div>
						</a>
					</div>
				</waterfall-column>
			</waterfall>
		</van-list>
	</div>
</template>

<script>
	import { Waterfall, WaterfallColumn } from "components/common/waterfall";

	export default {
		name: "ContentItem",
		components: {
			Waterfall,
			WaterfallColumn
		},
		props: {
			contentItemInfo: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				list1: [],
				list2: [],
				loading: false,
				finished: false
			};
		},
		methods: {
			onLoad() {
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list1.push(this.contentItemInfo[i]);
						this.list2.push(this.contentItemInfo[i + 1]);
					}
					this.loading = false;

					if (this.list1.length >= this.contentItemInfo.length) {
						this.finished = true;
					}
				}, 1000);
			}
		}
	};
</script>

<style scoped>
	.content-item {
		background-color: #f6f6f6;
		padding: 5px 9px 0 0;
		margin-bottom: 50px;
	}

	.item-wrap {
		margin-bottom: 8px;
		background-color: #fff;
	}

	.item-wrap a {
		display: block;
		text-decoration: none;
		color: #666;
	}

	.item-wrap img {
		width: 100%;
		height: auto;
		border-radius: 5px 5px 0 0;
	}

	.item-info-wrapper {
		padding: 12px 6px;
	}

	.item-info-desc {
		font-size: 13px;
		margin-bottom: 8px;
	}

	.item-info-link {
		font-size: 0;
	}

	.item-info-tag {
		margin-bottom: 8px;
		padding: 0 10px;
		color: #f46;
		background-color: #fff0f3;
		font-size: 12px;
		display: inline-flex;
		align-items: center;
	}

	.item-info-tag-img {
		display: inline-block;
		width: 8px;
		height: 17px;
		position: relative;
		margin-right: 2.5px;
	}

	.item-info-tag-img img {
		width: 100%;
		position: absolute;
		top: 23%;
	}

	.item-info-profile {
		display: inline-flex;
		font-size: 12px;
		color: #333;
		align-items: center;
		font-weight: bold;
	}

	.item-info-avatar-wrapper {
		width: 25px;
		height: 25px;
	}

	.item-info-avatar-wrapper img {
		width: 100%;
		border-radius: 50%;
	}
</style>
