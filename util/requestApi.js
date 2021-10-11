// const BASE_URL="http://localhost:8082"
export const myRequest=(option)=>{
	return new Promise((reslove,reject)=>{
		uni.request({
			url:option.url,
			method:option.method || 'GET',
			data:option.data || {},
			success:(res)=>{
				// if(res.data.status!==0){
				// 	return uni.showToast({
				// 		title:'获取数据失败'
				// 	})
				// }
				reslove(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}