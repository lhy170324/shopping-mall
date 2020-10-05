<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <cartlistitem v-for="(item,index) in cartlist" :product="item"
                    :key="index">
      </cartlistitem>
    </Scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'


  import Scroll from "components/common/scroll/Scroll";
  import cartlistitem from "./cartlistitem";
  export default {
    name: "cartlist",
    components:{
      Scroll,
      cartlistitem
    },
    computed:{
      ...mapGetters(['cartlist'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{

    height: calc(100% - 135px);
  }
.content {
  height: 100%;
  overflow: hidden;
}
</style>
