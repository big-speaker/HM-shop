<template>
	<view class="new-detail">
		<text class="title">{{newDetail.goods_name}}</text>
		<view class="info">
			<text>发布时间：{{newDetail.upd_time | formatDate}}</text>
			<text>数量：{{newDetail.goods_number}}</text>
		</view>
		<view class="content">
			<image :src="newDetail.goods_big_logo"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newDetail:{},
				id:''
			}
		},
		methods: {
			async getNewDetail(){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id='+this.id
				})
				this.newDetail=res.data.message
				console.log(this.newDetail)
			}
		},
		onLoad(option){
			this.id=option.goods_id
			this.getNewDetail()
		}
	}
</script>

<style lang="scss">
	.new-detail{
		font-size:30rpx;
		padding:0 20rpx;
		.title{
			text-align:center;
			width:710rpx;
			display:block;
			margin:20rpx 0;
		}
		.info{
			display:flex;
			justify-content: space-between;
		}
		.content{
			image{
				width:90%;
			}
		}
	}
</style>
