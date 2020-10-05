<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
     <div>
       <i class="icon service"></i>
       <span class="text">客服</span>
     </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addcart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "detailbottombar",
    methods : {
      addcart(){
        //点击添加商品到购物车
        console.log(1234);
        this.$emit('addcart')
      }
    }
  }
</script>

<style scoped>
.bottom-bar {
  height: 58px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
    margin-left: 15px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .shop {
    background-position: 0 -98px;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    height: 58px;
    line-height: 58px;
    text-align: center;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
  }
</style>
