<template>
  <div class="toast"  v-show="isshow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>


  export default {
    name: "toast",
    // props: {
    //   message: {
    //     type: String,
    //     default: ''
    //   },
    //   isshow:{
    //     type:Boolean,
    //     default: false
    //   }
    // }
    data(){
      return{
        message:'',
        isshow:false
      }
    },
    methods:{
      show(message,duration=2000){

        this.isshow=true;
        this.message=message;
        setTimeout(()=>{
          this.isshow=false;
          this.message=''
        },duration)
      }
    }
  }
</script>

<style scoped>
.toast {
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.8);
  color: #fff;
  padding: 8px 10px;
}
</style>
