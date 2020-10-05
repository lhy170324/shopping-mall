<template>
  <div class="goods-params" v-if="Object.keys(goodsparams).length!==0">
    <table class="goods-size" v-for="(item,index) in goodsparams.sizes[0]"
           :key="index">
     <tr>
     <td v-for="td in item">{{td}}</td></tr>
    </table>
    <table class="info-params">
      <tr v-for="(item,index) in goodsparams.infos" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsparams.image.length!==0">
      <img :src="goodsparams.iamge" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: "detailgoodsparams",
    props:{
      goodsparams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.goods-size {
  width: 100%;
  border:1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}
  .goods-size td {
    width: 20%;
    height: 40px;
    /*padding:3px 6px 16px 8px;*/
    border: 1px solid #e9e9e9;
    text-align: center;

  }
  .info-params{
    margin-top: 40px;
    margin-bottom: 40px;
    border: 1px solid #ccc;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  .info-params td {
    height: 40px;
    border: 1px solid #ccc;
    text-align: left;
    padding-left: 10px;
  }
  .info-params td:nth-child(2){
    color: var(--color-high-text);
  }
.info-params td:nth-child(1) {
  width: 64px;
}
</style>
