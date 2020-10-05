<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null,
        message:1234,
      }
    },
    props:{
      propstype:{
        type:Number,
        default:0
      },
      pullupload:{
        type:Boolean,
        default: false
      }
    },
    mounted() {
      // console.log(BScroll);
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        click:true,
        probeType:this.propstype,
        pullUpLoad:this.pullupload,
        mouseWheel: { //鼠标滚动
          speed: 20,
          invert: false,
          easeTime: 300
        }

      });
      //监听滚动的位置
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scroll',position)
      });
      //监听上拉事件
      if(this.pullupload){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingup')
          console.log(123);
        })
      }
      //监听滚动到底部
      // if(this.pullUpLoad){
      //   this.scroll.on('pullingUp',()=>{
      //     console.log('滚动到底部啦');
      //   })
      // }

    },
    methods:{
      scrollTo(x,y,time=500){
       this.scroll.scrollTo(x,y,time);

      },
      refresh(){
        console.log('-------');
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
