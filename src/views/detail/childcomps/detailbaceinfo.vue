<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newprice}}</span>
      <span class="o-price" > <s>{{goods.oldprice}}</s></span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
            v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailbaceinfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.info-title {
  margin: 10px 5px 10px 5px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
  .info-price {
    margin: 10px 5px 10px 5px;
    position: relative;
  }
  .n-price {
    font-size: 20px;
    color: var(--color-high-text);
  }
  .o-price {
    font-size: 14px;
    color: #ccc;
    margin: 0 5px 0;
  }
  .info-price .discount {
    position: absolute;
    top: 0px;
    left: 125px;
    color: #ffffff;
    height: 16px;
    width: 40px;
    background-color: deeppink;
    font-size: 12px;
    border-radius: 5px;
    text-align: center;
    line-height: 16px;
  }
  .info-other {
    margin: 20px 0 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    font-size: 14px;
    color: #ccc;
  }
  .info-service {
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid rgba(0,0,0,.1);
    border-bottom: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  }
  .info-service .info-service-item {
    flex: 1;
    font-size: 12px;
  }
.info-service .info-service-item img {
  width: 14px;
  height: 14px;
}
</style>
