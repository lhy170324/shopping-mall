<template>
  <div class="bottom-bar">
   <div class="check-all">
     <CheckButton class="checkbtn"  :isChecked="isChecked"
                  @click.native="checkclick"></CheckButton>
     <span>全选</span>
   </div>
    <div class="totle">
      合计：{{totalprice}}
    </div>
    <div class="count" @click="countclick">
      去结算：({{checklength}})
    </div>
  </div>


</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton";
  export default {
    name: "cartbottombar",
    components:{
      CheckButton
    },
    methods:{
      checkclick(){
        if(this.isChecked){ //全部选中
          this.$store.state.cartlist.forEach(item=>item.checked=false)
        }else{
          this.$store.state.cartlist.forEach(item=>item.checked=true)
        }
      },
      countclick(){
        if(this.isChecked){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    },
    computed:{
      totalprice(){
        return this.$store.state.cartlist.filter(item=>{
          return item.checked
        }).reduce((previousValue, item) =>{
          return previousValue+item.realprice*item.count
        } ,0).toFixed(2)
      },
      checklength(){
        return this.$store.state.cartlist.filter(item=>
          item.checked).length
      },
      isChecked(){
        // return !(this.$store.state.cartlist.filter(item=>!item.checked).length)
       if(this.$store.state.cartlist.length===0)
       {return false}
       else {
         return !(this.$store.state.cartlist.find(item=>!item.checked))}
      }
    }
  }
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: pink;
  position: relative;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.05);

}
  .check-all {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content:flex-start;
    align-items:center;
    margin-left: 10px;
  }
  .checkbtn {
    width: 20px;
    height: 20px;
  }
  .totle {
    flex: 1;
    margin-left: 30px;
  }
  .count {
    flex: 1;
    background-color:red;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }

</style>
