<template>
  <div class="goods">
    <goodslistitem v-for="item in goods" :goodsitem="item"></goodslistitem>
  </div>
</template>

<script>
  import goodslistitem from "./goodslistitem";
  export default {
    name: "goodslist",
    components:{
      goodslistitem
    },
    props:{
      goods:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goods {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-bottom: 80px;
}
  .goods-item {
    flex: 45%;
  }
</style>
