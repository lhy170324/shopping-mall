<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active:index===currentindex}" @click="changecolor(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabcontrol",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentindex:0,
      }
    },
    methods:{
      changecolor(index){
        this.currentindex=index;
        this.$emit('tabclick',index)
      }
    }
  }
</script>

<style scoped>
.tabcontrol {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 100;
}
.tabcontrol  .tab-control-item {

  }
  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
