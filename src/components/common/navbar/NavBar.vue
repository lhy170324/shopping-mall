<template>
  <div class="nac-bar">
<!--    name=‘’ 具名插槽，方便指定修改-->
    <div class="left"> <slot name="left"></slot></div>
    <div class="center"> <slot name="center"></slot></div>
    <div class="right"> <slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nac-bar {
  display: flex;
  /*通常导航栏高度为44*/

  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
}
  .left , .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }

</style>
