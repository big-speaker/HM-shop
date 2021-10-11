<template>
	<view class="goodDetail">
		<swiper indicator-dots=true circular=true>
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<image :src="item.pics_big"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{detailData.goods_price+500}}</text>
				<text>￥{{detailData.goods_price+1000}}</text>
			</view>
			<view class="goods_name">
				{{detailData.goods_name}}
			</view>
			<view class="box2">
				<view>发售时间：{{detailData.add_time | formatDate}}</view>
				<view>库存数量：{{detailData.goods_number}}</view>
			</view>
			<view class="box3">
				<view class="tit">详情介绍</view>
				<view class="content">
					<rich-text :nodes="detailData.goods_introduce"></rich-text>
				</view>
			</view>
		</view>
		<view class="good_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				goods_id:'',
				detailData:[],
				swiper:[],
				options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		components: {uniGoodsNav},
		methods: {
			async getDetail(){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id='+this.goods_id
				})
				this.detailData=res.data.message
				this.swiper=res.data.message.pics
				console.log(this.detailData)
			},
			onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			      buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      }
		},
		onLoad(option){
			this.goods_id=option.goods_id
			this.getDetail()
		}
	}
</script>

<style lang="scss">
	.goodDetail{
		swiper{
			height:700rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		.box1{
			.price{
				font-size: 35rpx;
				color:red;
				line-height: 80rpx;
				padding: 0 10px;
				text:nth-child(2){
					color:#ccc;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name{
				font-size: 32rpx;
				line-height: 60rpx;
				border-bottom: 10rpx solid #ccc;
				padding: 0 10px;
			}
			.box2{
				padding: 0 10rpx;
				font-size: 32rpx;
				line-height: 70rpx;
				border-bottom: 10rpx solid #ccc;
			}
			.box3{
				border-bottom:1px solid #ccc;
				.tit{
					font-size: 32rpx;
					padding-left: 10rpx;
					line-height: 70rpx;
				}
				.content{
					padding:10rpx;
					font-size:28rpx ;
					color:#ccc;
					line-height: 50rpx;
				}
			}
		}
		.good_nav{
			position:fixed;
			bottom:0;
			width:100%;
		}
	}
</style>
