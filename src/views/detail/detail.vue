<template>
  <div class="detail">

    <detailnavbar class="detailnav" @titleclick="titleclick"
                  ref="nav"></detailnavbar>
    <Scroll class="content" ref="scroll" :propstype="3"
            @scroll="contentscroll" >

      <detailswiper :topimg="topimg" class="detail-swiper"></detailswiper>
      <detailbaceinfo :goods="goods"></detailbaceinfo>
      <detailshopinfo :shop="shop"></detailshopinfo>
      <detailgoodsinfo :detailinfo="detailinfo" @imageload="imageload"></detailgoodsinfo>
      <detailgoodsparams :goodsparams="goodsparams"
                         ref="params"></detailgoodsparams>
      <detailcommentinfo :commentinfo="commentinfo"
                         ref="comment"></detailcommentinfo><br>
      <goodslist v-bind:goods="recommends" ref="recommend"></goodslist>

    </Scroll>
    <backtop @click.native="backclick" v-show="isshowbacktop"></backtop>
    <detailbottombar @addcart="addcart"></detailbottombar>



  </div>
</template>

<script>
  import detailnavbar from "./childcomps/detailnavbar";
  import detailswiper from "./childcomps/detailswiper";
  import detailbaceinfo from "./childcomps/detailbaceinfo";
  import detailshopinfo from "./childcomps/detailshopinfo";
  import detailgoodsinfo from "./childcomps/detailgoodsinfo";
  import detailgoodsparams from "./childcomps/detailgoodsparams";
  import detailcommentinfo from "./childcomps/detailcommentinfo";
  import goodslist from "../../components/content/goods/goodslist";
  import detailbottombar from "./childcomps/detailbottombar";
  import backtop from "components/content/backtop/backtop";

  import Scroll from "../../components/common/scroll/Scroll";
  import {getdetail} from "../../network/detail";
  import {goods} from "../../network/detail";
  import {shop} from "../../network/detail";
  import {goodsparams} from "../../network/detail";
  import {getrecommend} from "../../network/detail";

  import {mapActions} from 'vuex'

  // import toast from "../../components/common/toast/toast";
  export default {
    name: "detail",
    components: {
      detailnavbar,
      detailswiper,
      detailbaceinfo,
      detailshopinfo,
      detailgoodsinfo,
      detailgoodsparams,
      detailcommentinfo,
      goodslist,
      detailbottombar,
      backtop,
      // toast,

      Scroll
    },

    data() {
      return {
        iid: null,
        topimg: [],
        goods: {},
        shop: {},
        detailinfo: {},
        goodsparams: {},
        commentinfo: {},
        recommends: [],
        themetopY: [],
        detailindex: 0,
        isshowbacktop: false,
        message: '',
        isshow: false
      }
    },
    created() {
      this.iid = this.$route.params.iid
      //根据iid请求详细数据
      getdetail(this.iid).then(res => {
        // console.log(res);
        //获取轮播图数据
        this.topimg = res.result.itemInfo.topImages
        //获取商品信息
        this.goods = new
        goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

        //创建店铺信息
        this.shop = new shop(res.result.shopInfo)
        //保存商品详细数据
        this.detailinfo = res.result.detailInfo;
        //获取商品参数
        this.goodsparams = new
        goodsparams(res.result.itemParams.info, res.result.itemParams.rule)

        //取出评论信息
        if (res.result.rate.cRate !== 0) {
          this.commentinfo = res.result.rate.list[0]
        }
        ;
        // this.$nextTick(()=>{  //
        //   // 渲染后回调该函数，根据最新的数据，对于的dom已经被渲染出来了，但是图片依然没有加载完
        //   //offsettop值不对，都是因为图片没有加载完
        //
        //     this.themetopY=[]
        //     this.themetopY.push(0),
        //     this.themetopY.push(-this.$refs.params.$el.offsetTop)
        //     this.themetopY.push(-this.$refs.comment.$el.offsetTop)
        //     this.themetopY.push(-this.$refs.recommend.$el.offsetTop)
        //     console.log(this.themetopY);
        // })


      })

      //请求推荐数据
      getrecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      })

    },
    methods: {
      ...mapActions(['addcart']),  //映射到action函数
      backclick() {
        // console.log('click');
        console.log(this.$refs.scroll.message);
        this.$refs.scroll.scrollTo(0, 0)
      },
      imageload() {
        this.$refs.scroll.refresh()
        this.themetopY = []
        this.themetopY.push(0),
          this.themetopY.push(this.$refs.params.$el.offsetTop - 44)
        this.themetopY.push(this.$refs.comment.$el.offsetTop - 44)
        this.themetopY.push(this.$refs.recommend.$el.offsetTop - 44)
        this.themetopY.push(Number.MAX_VALUE)
        // console.log(this.themetopY.length);
      },
      titleclick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themetopY[index], 200)
      },
      contentscroll(position) {
        //判断backtop是否显示
        this.isshowbacktop = -position.y > 1000
        // console.log(position);
        // console.log(this.themetopY);
        //获取  y值
        const positionY = -position.y
        //y和主题中的值进行对比
        // console.log(positionY);
        // for (let i=0; i< length-1;i++){
        //
        //   if( positionY > this.themetopY[i] &&
        //     positionY < this.themetopY[i+1]){
        //     // this.currentindex =i
        //     console.log(i);
        //
        //     // this.$refs.nav.currentindex =this.currentindex
        //   }
        //   // if(this.currentindex!==i && ((i<length - 1 && positionY>this.themetopY[i] &&
        //   //   positionY<=this.themetopY[i+1]) || (i===length - 1 &&
        //   //   positionY>this.themetopY[i]))){
        //   //    this.currentindex = i
        //   //   this.$refs.nav.currentindex =this.currentindex
        //   // }
        // }
        for (let i = 0; i < this.themetopY.length - 1; ++i) {
          // console.log(i);
          // console.log(positionY);
          // console.log(this.themetopY[i]);
          if (
            this.detailIndex != i &&
            positionY >= this.themetopY[i] &&
            positionY < this.themetopY[i + 1]
          ) {
            // console.log(i);
            // this.detailIndex = i;
            this.$refs.nav.currentindex = i;
            break;
          }
        }
      },
      addcart() {
        // console.log('addcart');
        //获取购物车需要展示的商品信息
        const product = {}
        product.image = this.topimg[0];
        product.title = this.goods.title;
        // console.log(this.goods.title);
        product.desc = this.goods.desc;
        console.log(this.goods.desc);
        product.price = this.goods.newprice;
        console.log(this.goods.newprice);
        product.iid = this.iid;
        product.realprice = this.goods.realprice;


        //添加到购物车
        // console.log(this.$toast);
        // this.$toast.show()
        this.$store.dispatch('addcart', product).then(res => {
          this.$toast.show(res, 2000)
          //添加到购物车成功
        })
      }
    }
  }
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #fff;
}
  .content {
    height: calc(100% - 102px);
  }
  .detailnav {
    position: relative;
    z-index: 100;
    background-color: #fff;
  }
</style>
