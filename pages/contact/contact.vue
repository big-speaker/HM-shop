<template>
	<view class="contact">
		<image calss="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="tellPhone">联系电话：13414051537(点击拨打)</view>
			<view>校区地址：广东省东莞市寮步镇东莞理工学院城市学院</view>
			<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:113.840622,
				latitude:22.97879,
				scale:13,
				markers:[
					{
						longitude:113.840622,
						latitude:22.97879,
						iconPath:'../../static/logo.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			tellPhone(){
				uni.makePhoneCall({
					phoneNumber:'13414051537'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		image{
			width:750rpx;
			height:320rpx;
		}
		.info{
			view{
				padding:25rpx;
				border-bottom:3rpx solid #ccc;
			}
			.map{
				width:750rpx;
				height:750rpx;
			}
		}
	}
</style>
