<template>
  <div v-if="Object.keys(detailinfo).length!==0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc"> <span>{{detailinfo.desc}}</span> </div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailinfo.detailImage[0].key}}</div>
    <div class="info-list" v-for="(item,index) in
    detailinfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailgoodsinfo",
    props:{
      detailinfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imagelength:0
      }
    },
    methods:{
      imgload(){
        if(++this.counter===this.imagelength){
          this.$emit('imageload')
        }
      }
    },
    watch:{
      detailinfo(){
        this.imagelength=this.detailinfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    margin-bottom: 40px;
  }
.info-list img{
  width: 100%;
}
.info-desc {
  position: relative;
  width: 100%;
  height: 80px;

  /*text-align: center;*/
  /*line-height: 20px;*/
  /*background-color: deeppink;*/
}

  .start {
    position: relative;
    margin-top: 20px ;
    margin-left: 8px;
    width: 100px;
    border-bottom: 2px solid #ccc;
  }
  .start::before {
    position: absolute;
    left: 0;
    top: -5px;
    content: '';
    height: 6px;
    width: 6px;
    background-color: #000000;
  }
  .end {
    position: absolute;
    right: 8px;
    bottom: 10px;
    width: 100px;
    border-bottom: 2px solid #ccc;
  }
.end::before {
  position: absolute;
  right: 0;
  top: -5px;
  content: '';
  height: 6px;
  width: 6px;
  background-color: #000000;
}
  .desc {
    margin-left: 8px;
    height: 80px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .info-key {
    margin-left: 8px;
    padding: 10px 0 10px;
  }
</style>
