export default {
  //异步操作逻辑判断通常放在action里面
  addcart(context,payload){
    return new Promise((resolve, reject)=> {
      // state.cartlist.push(payload)
      let oldproduct =context. state.cartlist.find(item=> item.iid===payload.iid)
      if(oldproduct){
        // oldproduct.count+=1
        context.commit('addcounter',oldproduct)
        resolve('当前商品数+1')
      }else {
        payload.count=1
        // context.state.cartlist.push(payload)
        context.commit('addtocart',payload)
        resolve('成功添加到购物车')
      }
    })

}
}
