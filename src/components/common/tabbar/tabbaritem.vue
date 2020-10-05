<template>
  <div class="a"  @click="btn">
    <div v-if="!isactive" >
      <slot  name="item-icon"></slot></div>
    <div v-else> <slot   name="item-icon-active"></slot></div>
   <div :style="activestyle"> <slot name="item-text"></slot></div>


  </div>
</template>

<script>
  export default {
    name: "tabbaritem",
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'red'
      },
    },

    data(){
      return{
        // isactive:true
      }
    },
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activestyle(){
        return this.isactive ? {color:this.activecolor} :{}
      }
    },
    methods:{
      btn(){
       this.$router.push(this.path).catch(err=>err);
      }
    }
  }
</script>

<style scoped>
  .a {
    flex: 1;
    text-align: center;
    height: 49px;
    /*line-height: 49px;*/
    margin-top: 3px;
    vertical-align: middle;

  }
  .a img {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }
  /*.active {*/
  /*  color: red;*/
  /*}*/
</style>
