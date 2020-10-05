<template>
  <div id="app">
<!--    <keep-alive>防止被销毁保存原来的状态-->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from "./components/content/maintabbar/maintabbar";

export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
