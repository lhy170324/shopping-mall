<template>
  <Swiper class="swrap">
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imgload">
      </a>

    </SwiperItem>

  </Swiper>

</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
  export default {
    name: "homeswiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      SwiperItem,
      Swiper
   },
    data(){
      return{
        isload:false
      }
    },
    methods: {
      imgload(){
        if(!this.isload){
          console.log('轮播图已经加载完了');
          this.$emit('swiperimgload')
          this.isload=true
        }

      }
    }
  }
</script>

<style scoped>
.swrap {
  margin-top: 44px;
}
</style>
