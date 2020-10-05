<template>
  <div class="goods-item" @click="itemclick">
<!--    <a :href="goodsitem.link">-->
<!--    监听图片加载  @load="imgload"-->
      <img v-lazy="showimg" alt="" @load="imgload" >
      <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="collect">{{goodsitem.cfav}}</span>
      </div>
<!--    </a>-->
  </div>
</template>

<script>
  export default {
    name: "goodslistitem",
    props:{
      goodsitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showimg(){
        return this.goodsitem.image || this.goodsitem.show.img
      }
    },
    methods:{
      imgload(){
        // console.log(123);
        this.$bus.$emit('itemimageload')
      },
      itemclick(){
        console.log('跳转到详情页');
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
}
  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
  }
  .goods-info p {
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    overflow: hidden;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background:url("~assets/img/common/collect.svg") no-repeat 0 0/14px 14px;
  }
</style>
