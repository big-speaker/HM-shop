<template>
	<view class="goods-list">
		<goodslist :goods="goods" @goDetail="toDetail"></goodslist>
		<view class="isOver" v-if="falg">------你知道的太多了------</view>
	</view>
</template>

<script>
	import goodslist from "../../components/goods-list.vue"
	export default {
		data() {
			return {
				goods:[],
				pagenum:1,
				falg:false
			}
		},
		components:{
			goodslist
		},
		methods: {
			async getGoodlist(callBack){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?pagenum='+this.pagenum
				})
				this.goods=[...this.goods,...res.data.message.goods]
				callBack &&callBack()
			},
			toDetail(goods_id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?goods_id='+goods_id
				})
			}
		},
		onLoad(){
			this.getGoodlist()
		},
		onReachBottom(){
			if(this.pagenum<=3){
				this.pagenum++,
				this.getGoodlist()
			}else{
				this.falg=true
			}
		},
		onPullDownRefresh(){
			this.pagenum=1,
			this.goods=[],
			this.falg=false,
			setTimeout(()=>{
				this.getGoodlist(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
	.goods-list{
		background-color: #eee;
		.isOver{
			text-align: center;
			line-height: 50px;
			margin:10rpx 0;
		}
	}
</style>
