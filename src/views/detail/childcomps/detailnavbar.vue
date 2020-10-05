<template>
  <div>
    <NavBar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="" @click="clickback">
      </div>
      <div slot="center" class="title">
        <div  v-for="(item,index) in titles"
              :class="{active:index===currentindex}"
              @click="changecolor(index)">
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "detailnavbar",
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentindex:0
      }
    },
    methods:{
      changecolor(index){
        this.currentindex=index;
        this.$emit('titleclick',index)
      },
      clickback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.title {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
  .active {
    color: var(--color-high-text);
  }
/*.back::before {*/
/*  content: '';*/
/*  height: 10px;*/
/*  width: 10px;*/
/*  border-bottom: 2px solid pink;*/
/*  !*border-left: 2px solid pink;*!*/
/*  !*transform: rotateX(90deg);*!*/
/*  background-color: darkmagenta;*/
/*}*/
  .back img {
    height: 20px;
    line-height: 20px;
    margin-top: 12px;
  }

</style>
