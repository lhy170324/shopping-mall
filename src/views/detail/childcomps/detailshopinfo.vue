<template>
  <div class="shop-info">
    <div class="shop-title">
      <span>
        <img :src="shop.logo" alt="">
        <span class="name">{{shop.name}}</span>
      </span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item  shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{sellcountfilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodscount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-time shop-middle-right">
      <table>
        <tr v-for="(item,index) in shop.score" :key="index">
          <td>{{item.name}}</td>
          <td :style="{color:item.isBetter ? 'red' : 'green'}">{{item.score}}</td>
          <td
            :style="{backgroundColor:item.isBetter ? 'deeppink' : 'green',
                      color:'white'
          }">{{item.isBetter ?
            '高':'低'}}</td>
        </tr>
      </table>
    </div>
    </div>
    <div class="addinfo">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: "detailshopinfo",
    props:{
      shop:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      sellcountfilter(){
        if (this.shop.sells<10000){
          return this.shop.sells;
        }
        else {
          return (this.shop.sells/10000).toFixed(1)+'万'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    border-bottom: 1px solid  rgba(0,0,0,.1);
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
  }
.shop-title{

  margin: 20px 5px 20px 5px;
}
  .shop-title img {
    height: 60px;
    width: 60px;
    margin-right: 10px;
    vertical-align:middle;

  }
  .shop-title .name {
    font-size: 18px;
    color: rgba(0,0,0,.6);
  }
  .shop-middle {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
.shop-middle-left {
  display: flex;
  text-align: center;

}
  .info-sells {
    margin-right: 20px;
  }
  .sells-text ,.goods-text {
    font-size: 12px;
    margin-top: 8px;
  }
  .shop-middle-right {
    font-size: 14px;
  }
  .shop-middle-right table {
    padding-top: 4px;
    border-spacing: 10px;
  }
  .addinfo {
    width: 6.4rem;
    height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    border-radius: 0.42rem;
    background-color: rgba(128, 128, 128, 0.3);
    margin: 10px auto 30px;

  }
</style>
