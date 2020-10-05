<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabcontrol :titles="['流行','新款','精选']" class="tab-control"
                @tabclick="tabclick" ref="tabcontrol2"
                v-show="istabfixed"></tabcontrol>
      <Scroll class="content"
              ref="scroll"
              :propstype="3"
              @scroll="contentscroll"
              :pullupload="true"
              @pullingup="loadmore"
      >
          <homeswiper :banners="banners"
                      @swiperimgload="swiperimgload"></homeswiper>
          <recommendview :recommends="recommends"></recommendview>
          <featureview></featureview>
          <tabcontrol :titles="['流行','新款','精选']" class="tab-control"
                      @tabclick="tabclick" ref="tabcontrol"></tabcontrol>
          <goodslist :goods="showgoods"></goodslist>
      </Scroll>
<!--    监听组件应该加上.native-->
      <backtop @click.native="backclick" v-show="isshow"></backtop>


  </div>

</template>

<script>
  import homeswiper from "./childcomponents/homeswiper";
  import recommendview from "./childcomponents/recommendview";
  import featureview from "./childcomponents/featureview";

  import NavBar from "../../components/common/navbar/NavBar";
  import tabcontrol from "../../components/content/tabcontrol/tabcontrol";
  import goodslist from "../../components/content/goods/goodslist";
  import Scroll from "../../components/common/scroll/Scroll";
  import backtop from "../../components/content/backtop/backtop";

  import {gethomemultidata,gethomegoods} from "../../network/home";
  import {debounce} from "../../common/utils";


  export default {
    name: "home",
    components: {
      homeswiper,
      recommendview,
      featureview,

      NavBar,
      tabcontrol,
      goodslist,
      Scroll,
      backtop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currenttype:'pop',
        isshow:true,
        taboffsettop:0,
        istabfixed:false,
        saveY:0,
      }
    },
    // 使用生命周期函数，组件创建好了请求数据
    created() {
      // 1:请求多个数据
      this.gethomemultidata()
      //请求商品数据
     this.gethomegoods('pop');
       this.gethomegoods('new');
       this.gethomegoods('sell');




    },
    mounted() {
      //赋值
      //图片加载完成的事件监听
      //所有组件都有一个属性$el，用于获取组件中的元素
      // this.taboffsettop = this.$refs.tabcontrol.$el.offsetTop
      // console.log(this.taboffsettop);

      //监听item图片加载
      const  refresh = debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('itmeimageload',()=>{

        refresh()
        // this.$refs.scroll.scroll.refresh()
      })
    },
    destroyed() {
      console.log('home destoryed');
    },
    //活跃的时候 回到页面的时候
    activated() {
      console.log('activated');
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    //不活跃的时候 （离开页面的时候）
    deactivated() {
      console.log('deactivated');
      this.saveY=this.$refs.scroll.scroll.y
    },

    methods:{
      // 事件监听
      //防抖函数

      loadmore(){
        console.log('监听到了底部');
        this.gethomegoods(this.currenttype)
      },
      //加载完轮播图获取tabbaroffsettop
      swiperimgload(){
        this.taboffsettop = this.$refs.tabcontrol.$el.offsetTop
        console.log(this.taboffsettop);
      },
      tabclick(index){
        console.log(index);
        switch (index) {
          case 0:
            this.currenttype='pop'
            break
          case 1 :
            this.currenttype='new'
            break

          case 2 :
            this.currenttype='sell'
            break
        }
        this.$refs.tabcontrol.currentindex=index;
        this.$refs.tabcontrol2.currentindex=index
      },


      // 网络请求
      // 1:请求多个数据
     gethomemultidata(){
       gethomemultidata().then(res => {
         // console.log(res);
         this.banners = res.data.banner.list;
         this.recommends = res.data.recommend.list
       });

     },
     gethomegoods(type){
       //请求商品数据
       const page = this.goods[type].page+1
       gethomegoods(type,page).then(res=>{
         // console.log(res);
         // res.data.list.forEach(item=> this.goods[type].list.push(item));
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page +=1

         this.$refs.scroll.scroll.finishPullUp()
       })
     },
      backclick(){
        // console.log('click');
        console.log(this.$refs.scroll.message);
        this.$refs.scroll.scrollTo(0,0)

      },
      contentscroll(position){
        //判断backtop是否显示
       this.isshow= -position.y>1000
        //决定tabcontrol是否吸顶（position：fixed）
        this.istabfixed = -position.y>this.taboffsettop
      },
      // loadmore(){
      //   this.gethomegoods(this.currenttype)
      //   this.$refs.scroll.scroll.refresh()
      //   console.log(12345);
      // }

    },
    computed:{
      showgoods(){
        return this.goods[this.currenttype].list
      }
    },

  }
</script>

<style scoped>

  /*.tab-control {*/
  /*  !*当滚动距离达到top值，position属性会变成fixed*!*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*}*/



  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*  z-index: 9;*/
  /*}*/

  /*.tab-control {*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  z-index: 9;*/
  /*}*/

  /*.content {*/
  /*  overflow: hidden;*/

  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/

  /*.content {*/
  /*height: calc(100% - 93px);*/
  /*overflow: hidden;*/
  /*margin-top: 44px;*/
  /*}*/
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
      /*//在使用原生滚动时，固定位置，采用bscoroll失效*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .tab-control {
    position: relative;
   z-index: 10;

  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top:44px;
}
  /*.content {*/
  /*height: calc(100% - 93px);*/
  /*overflow: hidden;*/
  /*margin-top: 44px;*/
  /*}*/
</style>
