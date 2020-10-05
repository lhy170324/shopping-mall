<template>
  <div class="detailswaiper">
    <Swiper class="swiperitem">
      <SwiperItem v-for="item in topimg" >
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "detailswiper",
    props:{
      topimg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.swiperitem {
  height: 250px;
  overflow: hidden;
}
</style>
