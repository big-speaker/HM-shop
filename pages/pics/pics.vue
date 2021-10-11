<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="active===index ? 'active' : ''" 
			v-for="(item,index) in cates" :key="index" 
			@click="leftClick(index)">
			{{item.cat_name}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="right-item" 
			v-for="(item,index) in rightData" :key="index">
				<image :src="item.cat_icon" @click="previewImg"></image>
				<view>{{item.cat_name}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				rightData:[]
			}
		},
		methods: {
			async getPics(){
				const res=await this.$myRequest({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'
				})
				this.cates=res.data.message
				this.rightData=this.cates[0].children[0].children
			},
			leftClick(index){
				this.active=index
				this.rightData=this.cates[index].children[0].children
			},
			previewImg(){
				let urls=this.rightData.map(element=>{
					return element.cat_icon
				})
				uni.previewImage({
					urls
				})
			}
		},
		onLoad(){
			this.getPics()
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
		.pics{
			height:100%;
			display:flex;
			.left{
				width:200rpx;
				height:100%;
				border-right: 1px solid #eee;
				view{
					height:60px;
					line-height: 60px;
					text-align: center;
					font-size: 30rpx;
					border-top:1px solid #eee;
				}
				.active{
					background-color: red;
					color:white
				}
			}
			.right{
				width:550rpx;
				height:100%;
				.right-item{
					width:530rpx;
					height:530rpx;
					border-radius: 5px;
					image{
						width:90%;
						margin:0 auto;
					}
				}
			}
		}
	}
</style>
