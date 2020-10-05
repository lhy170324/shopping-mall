<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommendview",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 1px solid #ccc;
  box-shadow: 1px 1px 3px rgba(0,0,0,.1);
}
.recommend .recommend-item {
    flex:1;
  }
  .recommend-item img {
    width: 85%;
  }
</style>
