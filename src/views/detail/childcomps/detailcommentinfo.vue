<template>
<div v-if="Object.keys(commentinfo).length!==0" class="comment-info">
  <div class="info-header">
    <div class="header-title">用户评价</div>
    <div class="header-more">更多 <i class="arrow-right"></i></div>
  </div>
  <div class="user-info">
    <img :src="commentinfo.user.avatar" alt="">
    <span>{{commentinfo.user.uname}}</span>
  </div>
  <div class="comment-detail">
    <p>{{commentinfo.content}}</p>
    <div class="comment-other">
      <span class="data">{{commentinfo.created | showdate()}}</span>
      <span>{{commentinfo.style}}</span>
    </div>
    <div class="comment-img" v-for="(item,index) in commentinfo.images"
         :key="index">
      <img :src="item" alt="">
    </div>
  </div>

</div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "detailcommentinfo",
    props:{
      commentinfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showdate(value){
        //将时间戳转化为date对象
        const date = new Date(value*1000)
        //将date进行格式化
        console.log(date);
        return formatDate(date,'yyyy-MM-dd hh:mm')

      }
    }
  }
</script>

<style scoped>
.info-header {
  display: flex;
  justify-content:space-between;
  padding: 20px 20px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
}
  .user-info {
    height: 90px;
    line-height: 90px;
  }
  .user-info img {
    height: 60px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
.comment-detail {
  padding: 5px;
  line-height: normal;
  color: rgba(0,0,0,.8);
}
  .comment-other {
    padding: 15px 5px;
    color: rgba(0,0,0,.5);
  }
  .data {
    margin-right: 10px;
  }
  .comment-img {
    /*display: flex;*/
    /*justify-content: flex-start;*/

  }
  .comment-img img {
    /*float: left;*/
    width: 60px;
    height: 60px;
    margin-right: 3px;
  }
</style>
