<template>
	<view class="home">
		<swiper indicator-dots=true circular=true>
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in nav" :key="index" @click="navItemclick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view class="hot-goods">
			<view class="tit">推荐商品</view>
			<goodslist :goods="hotGoods" @goDetail="toDetail"></goodslist>
		</view>
	</view>
</template>
<script>
	import goodslist from "../../components/goods-list.vue"
	export default {
		data() {
			return {
				swiper:[],
				hotGoods:[],
				nav:[
					{
						icon:'iconfont icon-ziyuan',
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/goods/goods'
					}
				]
			}
		},
		onLoad() {
			this.getSwuper()
			this.getHotgoods()
		},
		components:{
			goodslist
		},
		methods: {
			async getSwuper(){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
				})
				this.swiper=res.data.message
			},
			async getHotgoods(){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?query=huawei'
				})
				this.hotGoods=res.data.message.goods
			},
			navItemclick(url){
				uni.navigateTo({
					url
				})
			},
			toDetail(goods_id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?goods_id='+goods_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width:750rpx;
			height:380rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		.nav{
			display:flex;
			.nav-item{
				width:25%;
				text-align: center;
				view{
					width:120rpx;
					height:120rpx;
					background-color: red;
					margin:10rpx auto;
					color:#fff;
					font-size:50rpx;
					line-height: 120rpx;
					border-radius: 50%;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot-goods{
			background-color:#eee;
			margin-top:10rpx;
			overflow: scroll;
			.tit{
				width:100%;
				height:50px;
				margin:10rpx 0;
				background-color: #fff;
				text-align: center;
				line-height: 50px;
				letter-spacing: 20rpx;
				color:red;
			}
		}
	}
</style>
