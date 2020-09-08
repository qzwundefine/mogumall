<template>
	<div class="comment-list">
		<div class="comment-head">
			<span class="head-title">买家评价 {{ commentListInfo.commentCount}} | 销量 {{ commentListInfo.sales }}</span>
			<van-icon name="arrow" color="#666" size="13"></van-icon>
		</div>
		<ul class="list">
			<li class="list-item" v-for="(item, index) in commentListInfo.commentUser" :key="index">
				<div class="user-info">
					<img :src="item.avatar" :alt="item.name" />
					<span class="user-info-name">{{ item.name | anonymous(item.isAnonymous)}}</span>
				</div>
				<div class="content">{{ item.commentText }}</div>
				<div class="attrs">
					<div class="attrs-item">
						<span class="attrs-item-time">{{ item.commentTime }}</span>
					</div>
					<div class="attrs-item" v-if="item.isAttrs">
						<span class="attrs-item-extra">身高: {{ item.attrs.height }} cm</span>
						<span class="attrs-item-extra">体重: {{ item.attrs.weight }} kg</span>
						<span class="attrs-item-extra">是否合身: {{ item.attrs.fit }}</span>
					</div>
					<div class="place-holder"></div>
					<div class="answer" v-if="item.isAnswer">[商家回复]:{{ item.sellerAnswer }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "CommentList",
		components: {},
		props: {
			commentListInfo: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		filters: {
			anonymous(value, isAnonymous) {
				if (isAnonymous) {
					let replace = "";
					if (value.length < 6) {
						let len = value.length - 2;
						for (let i = 0; i < len; i++) {
							replace += "*";
						}
						return (
							value.substring(0, 1) + replace + value.substring(value.length - 1)
						);
					} else {
						replace = "****";
						let startLen = 0;
						let endLen = 0;
						let saveLen = 0;
						if ((value.length - 4) % 2 === 0) {
							saveLen = (value.length - 4) / 2;

							return (
								value.substring(0, saveLen) +
								replace +
								value.substring(value.length - saveLen)
							);
						} else {
							endLen = Math.round((value.length - 4) / 2);
							startLen = endLen - 1;

							return (
								value.substring(0, startLen) +
								replace +
								value.substring(value.length - endLen)
							);
						}
					}
				} else {
					return value;
				}
			}
		}
	};
</script>

<style scoped>
	.comment-list {
		width: 100%;
		margin: 10px 0;
		padding: 0 15px;
		box-sizing: border-box;
		background-color: #fff;
	}

	.comment-head {
		height: 45px;
		padding: 20px 0 15px 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.head-title {
		font-size: 12px;
		color: #999;
		flex: 1;
	}

	.user-info {
		display: flex;
		line-height: 41px;
	}

	.user-info img {
		height: 30px;
		border: 1px solid #efefef;
		border-radius: 50%;
	}

	.user-info-name {
		font-size: 15px;
		margin-left: 10px;
		color: #424242;
	}

	.list li:last-child {
		border: none;
	}

	.list-item {
		box-sizing: border-box;
		padding: 15px 0;
		border-bottom: 1px solid #eee;
	}

	.content {
		line-height: 17px;
		font-size: 14px;
		color: #727272;
		margin-top: 5px;
	}

	.attrs {
		line-height: 12px;
		margin-top: 7.5px;
	}

	.attrs-item {
		font-size: 12px;
		color: #999;
	}

	.attrs-item-extra {
		margin-left: 7.5px;
	}

	.attrs-item span:first-child {
		margin: 0;
	}

	.place-holder {
		font-size: 0;
		margin: 12.5px 0;
	}

	.answer {
		line-height: 17px;
		font-size: 14px;
		color: #999;
		border-top: 1px dotted #d9d9d9;
		padding-top: 15px;
		box-sizing: border-box;
	}
</style>
