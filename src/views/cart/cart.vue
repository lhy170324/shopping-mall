<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartlength}})</div>
    </nav-bar>
<!--    商品列表-->
    <cartlist></cartlist>
<!--    底部汇总-->
    <cartbottombar></cartbottombar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import cartlist from "./childcomps/cartlist";
  import cartbottombar from "./childcomps/cartbottombar";

  import {mapGetters} from 'vuex'
  export default {
    name: "cart",
    components:{
      NavBar,
      cartlist,
      cartbottombar
    },
    computed: {
      ...mapGetters(['cartlength'])
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 400;
}
</style>
