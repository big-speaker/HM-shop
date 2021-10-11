<template>
	<view>
		<view class="goods-list">
			<view class="good-item" v-for="(item,index) in goods" :key="index" @click="goDetail(item.goods_id)">
				<image :src="item.goods_big_logo"></image>
				<view class="price">
					<text>{{item.goods_price+500}}</text>
					<text>{{item.goods_price+1000}}</text>
				</view>
				<view class="name">{{item.goods_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods-list",
		data() {
			return {
				
			};
		},
		props:{
			goods:Array
		},
		methods:{
			goDetail(goods_id){
				this.$emit('goDetail',goods_id)
			}
		}
	}
</script>

<style lang="scss">
.goods-list{
				display:flex;
				padding:0 15rpx;
				flex-wrap: wrap;
				justify-content: space-between;
				.good-item{
					width:355rpx;
					margin:10rpx 0;
					padding:15rpx;
					box-sizing: border-box;
					background-color: #fff;
					image{
						width:80%;
						height:150px;
						display:block;
						margin:0 auto;
					}
					.price{
						color:red;
						font-size:36rpx;
						padding:10rpx 0;
						text:nth-child(2){
							color:#ccc;
							text-decoration: line-through;
							font-size: 28rpx;
							margin-left:5rpx;
						}
					}
					.name{
						font-size:28rpx;
						line-height: 50rpx;
						padding-top:15rpx;
						padding-bottom:10rpx;
					}
				}
			}
</style>
