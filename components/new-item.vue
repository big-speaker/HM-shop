<template>
	<view>
		<view class="new-item" v-for="(item,index) in news" :key="index" @click="toDetail(item.goods_id)">
			<image :src="item.goods_small_logo"></image>
			<view class="right">
				<view class="tit">{{item.goods_name}}</view>
				<view class="info">
					<text>剩余数量{{item.goods_number}}</text>
					<text>时间：{{item.upd_time | formatDate}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"new-item",
		data() {
			return {
				
			};
		},
		props:{
			news:Array
		},
		filters:{
			formatDate(date){
				const nDate=new Date(date)
				const year=nDate.getFullYear()
				const month=nDate.getMonth().toString().padStart(2,0)
				const day=nDate.getDay().toString().padStart(2,0)
				return year+'-'+month+'-'+day
			}
		},
		methods:{
			toDetail(goods_id){
				this.$emit('goDetail',goods_id)
			}
		}
	}
</script>

<style lang="scss">
	.new-item{
		display:flex;
		padding:20rpx 20rpx;
		border-bottom:1rpx solid #ccc;
		image{
			min-width:200rpx;
			max-width: 200rpx;
			height:150rpx;
		}
		.right{
			margin-right: 15rpx;
			margin-left:15rpx;
			dispaly:flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size:24rpx;
				text:nth-child(2){
					margin-left:30rpx;
				}
			}
		}
	}
</style>
