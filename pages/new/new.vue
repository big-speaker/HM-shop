<template>
	<view class="news">
		<newitem :news="news" @goDetail="goDetail"></newitem>
	</view>
</template>

<script>
	import newitem from "../../components/new-item.vue"
	export default {
		data() {
			return {
				news:[]
			}
		},
		components:{
			newitem
		},
		methods: {
			async getNews(){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?query=xiaomi'
				})
				this.news=res.data.message.goods
			},
			goDetail(goods_id){
				uni.navigateTo({
					url:'/pages/new-detail/new-detail?goods_id='+goods_id
				})
			}
		},
		onLoad(){
			this.getNews()
		}
	}
</script>

<style lang="scss">
	// .news{
	// 	.new-item{
	// 		display:flex;
	// 		padding:20rpx 20rpx;
	// 		border-bottom:1rpx solid #ccc;
	// 		image{
	// 			min-width:200rpx;
	// 			max-width: 200rpx;
	// 			height:150rpx;
	// 		}
	// 		.right{
	// 			margin-right: 15rpx;
	// 			margin-left:15rpx;
	// 			dispaly:flex;
	// 			flex-direction: column;
	// 			justify-content: space-between;
	// 			.tit{
	// 				font-size: 30rpx;
	// 			}
	// 			.info{
	// 				font-size:24rpx;
	// 				text:nth-child(2){
	// 					margin-left:30rpx;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
</style>
