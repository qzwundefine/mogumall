<template>
	<van-row type="flex" align="center" class="launch-banner-wrapper">
		<van-col span="4">
			<img src="~assets/img/launchBanner/logo.png" alt class="launch-banner-logo" />
		</van-col>
		<van-col span="14" class="launch-banner-desc">
			<div class="main-title">蘑菇街 总有高手帮你挑</div>
			<div class="sub-title">
				<img src="~assets/img/launchBanner/start.png" alt class="start" />
				<img src="~assets/img/launchBanner/start.png" alt class="start" />
				<img src="~assets/img/launchBanner/start.png" alt class="start" />
				<img src="~assets/img/launchBanner/start.png" alt class="start" />
				<img src="~assets/img/launchBanner/start.png" alt class="start" />
				<span class="sub-title-text">超过2亿用户已下载</span>
			</div>
		</van-col>
		<van-col span="6">
			<a
				href="https://a.app.qq.com/o/simple.jsp?pkgname=com.mogujie&ckey=CK1420464319516&acm=3.mce.1_10_1lmzu.134879.0.yd34ns7fn9QlJ.pos_0-m_504761-sd_119"
				class="launch-banner-open"
			>
				<span>
					<slot>打开APP</slot>
				</span>
			</a>
		</van-col>
	</van-row>
</template>

<script>
	export default {
		name: "LaunchBanner",
		components: {}
	};
</script>

<style scoped>
	.launch-banner-wrapper {
		text-align: center;
		height: 47px;
		border-bottom: 1px solid #c5c5c5;
		box-sizing: border-box;
		position: relative;
		background-color: #fff;
		z-index: 1;
	}

	.launch-banner-logo {
		height: 30px;
		margin-top: 3px;
	}

	.launch-banner-desc {
		text-align: left;
	}

	.main-title {
		font-size: 13px;
		margin-left: -5px;
	}

	.sub-title {
		margin-left: -5px;
	}

	.start {
		width: 9px;
		margin-right: 4px;
	}

	.sub-title-text {
		font-size: 12px;
		margin-left: 5px;
		color: #8e8e92;
	}

	.launch-banner-open span {
		display: block;
		font-size: 12px;
		height: 25px;
		width: 75px;
		line-height: 25px;
		color: #fff;
		background-color: #f46;
		margin: -5px 0 0 5px;
		border-radius: 3px;
	}
</style>
