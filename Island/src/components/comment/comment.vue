<template>
  <transition name="move">
    <div v-show="showFlag"  class="comment">
      <div class="head">
      <div class="back" @click="hide">
        <img class="icon-back" slot="icon" src="../../assets/返回.png">
      </div>{{explore.exploreId}}
      </div>
      <div class="content">
        <div>
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10" >
          <li class="main_secret">
        <div class="secret-head">
            <span style="" class="image-div">
                <img src="../../assets/头像 男孩.png" class="user-image" />
              <span class="secret-head-text">
                <span class="user-head-message"><span class="user-name">
                  {{explore.exploreId}}
                </span>
                  <br>
                  <span class="mic-time" >{{explore.issueTime}}</span>
                </span>
              </span>
                <div style="text-align: right;display: inline-block;width:30px;vertical-align: top;float: right">
                  <img src="../../assets/关闭.png" class="user-close" />
                </div>
              </span>
        </div>
          <div class="secret-contain">
            <span class="secret-contain-word">
              {{explore.content}}
            </span>
          </div>
          <div class="secret-function">
            <div class="secret-function-button">
              <img src="../../assets/收藏.png"  class="secret-function-image"/>
            </div>
            <div class="secret-function-button">
              <img src="../../assets/收藏.png"  class="secret-function-image"/>
            </div>
            <div class="secret-function-button">
              <img src="../../assets/收藏.png"  class="secret-function-image"/>
            </div>
            <div class="secret-function-button">
              <img src="../../assets/收藏.png"  class="secret-function-image"/>
            </div>
          </div>
          </li>
          <!--<li v-for="item in comment" class="main_secret"  v-bind="this">-->
            <!--<div class="secret-head" >-->
            <!--<span style="" class="image-div">-->
                <!--<img src="../../assets/头像 男孩.png" class="user-image"/>-->
              <!--<span class="secret-head-text">-->
                <!--<span class="user-head-message"><span class="user-name">-->
                  <!--&lt;!&ndash;#{{item.userName}}&ndash;&gt;-->
                  <!--{{item.exploreId}}-->
                <!--</span>-->
                  <!--<br>-->
                  <!--<span class="mic-time" >{{item.issueTime.slice(0,10)}}</span>-->
                <!--</span>-->
              <!--</span>-->
                <!--<div style="text-align: right;display: inline-block;width:200px;vertical-align: top">-->
                  <!--<img src="../../assets/关闭.png" class="user-close" />-->
                <!--</div>-->
              <!--</span>-->
            <!--</div>-->
            <!--<div class="secret-contain">-->
            <!--<span class="secret-contain-word">-->
              <!--{{ item.content}}-->
            <!--</span>-->
            <!--</div>-->
            <!--<div class="secret-function">-->
              <!--<div class="secret-function-button">-->
                <!--<img src="../../assets/收藏.png"  class="secret-function-image"/>-->
              <!--</div>-->
              <!--<div class="secret-function-button">-->
                <!--&lt;!&ndash;<span style="height: 40px;line-height: 40px">sss</span>&ndash;&gt;-->
                <!--<img src="../../assets/收藏.png"  class="secret-function-image"/>-->
              <!--</div>-->
              <!--<div class="secret-function-button">-->
                <!--<img src="../../assets/收藏.png"  class="secret-function-image"/>-->
              <!--</div>-->
              <!--<div class="secret-function-button">-->
                <!--<img src="../../assets/收藏.png"  class="secret-function-image"/>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <li v-for="(item,index) in comment" class="rating-item"  :key="item.id">
            <div class="avatar">
              <img src="../../assets/头像 男孩.png" class="img-avatar">
              <h1 class="floor">{{ index+1 }}L</h1>
            </div>
            <div class="rating-content">
              <span class="name">{{item.userId}}</span>
              <div  style="text-align: right;display: inline-block;width:30px;vertical-align: top;float: right;margin-right: 10%">
                <img src="../../assets/想去.png" class="comment-like">
              </div>
              <div class="wrapper">
                <span class="delivery">{{item.issueTime.slice(0,10)}}</span>
              </div>
              <p class="text">{{item.content}}</p>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script >
import Vue from 'vue'
if (!Vue.prototype.$isServer) {
  require('mint-ui/src/style/popup.css')
}
export default {
  name: 'comment',
  props: {
    explore: ''
  },
  data () {
    return {
      loading: false,
      showFlag: false,
      comment: []
    }
  },
  methods: {
    loadMore () {
    },
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    getCommentInfo (exploreId) {
      var that = this
      this.$http.post('http://localhost:8080/explore/getCommentInfo', exploreId).then(function (response) {
        if (response.data.success) {
          if (response.data.code === 200) {
            // alert('获取信息成功')
            that.comment = response.data.data
            // alert(that.explore)
          }
        } else {
          alert('失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  .comment{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 58px;
    width: 100%;
    z-index: 30;
    background: #fff;
  }
  .move-enter-active,.move-leave-active{
    transition: all 0.2s linear;
    transform: translate3d(0 , 0 , 0);
  }
  .move-enter,.move-leave-active{
  transform: translate3d(100% , 0 , 0);
  }
  .head{
    position: absolute;
    width: 100%;
    height: 40px;
    background-color: #7dd1f0;
  }
  .back{
    position: absolute;
    width: 16px;
    height: 16.8px;
    top: 10px;
    left: 10px;
  }
  .icon-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .content{
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow: auto;
  }
  ul {
    padding-left: 0px;
    margin-top: 0;
    margin-bottom: 0;
  }
  li {
    /*background-color: #eaeaea;*/
    width: 100%;
    height: 100%;
    list-style: none;
    display: block;
    margin-bottom: 5px;
    float: top;
  }
  .main_secret{
    height: 100%;
  }
  .secret-head {
    height: 50px;
    width: 100%;
    text-align:left;vertical-align: middle;
  }
  .user-image{
    width: 50px;height: 50px;
  }
  .user-close{
    width: 30px;height: 30px;
    display: inline-block;
    text-align: right;
  }
  .image-div {
    text-align: left;
    display: inline-block;
    width: 90%;
    margin: 10px;
  }
  .secret-head-text {
    display: inline-block;
    hight: 50px;
  }
  .user-head-message {
    display: inline-block;
    vertical-align: bottom;
    padding: 3px 3px 3px 5px;
  }
  .user-name {
    display: inline-block;
    margin-bottom: 5px;
    color: aqua;
  }
  .mic-time {
    color: rgba(133,62,62,0.21);
    font-size: small;
    display: inline-block;
  }
  .secret-contain {
    height: auto;
    margin-top: 15px;
    /*background-color: #eaeaea;*/
    padding: 10px 10px 10px 60px;
    text-align: left;
    /*padding-left: 60px;*/
  }
  .secret-function {
    margin-top: 10px;
    /*background-color: rgba(234, 165, 177, 0.23);*/
    display: flex;
    width: 100%;
  }
  .secret-function-button{
    border: 1px solid rgba(255, 154, 192, 0.11);
    flex: 1;
    height: 30px;
  }
  .secret-function-image{
    height: 30px;
    width: 30px;
  }
  .rating-item{
    display: flex;
    padding: 18px 0;
    border: 1px solid rgba(7, 17, 27, 0.1);
  }
  .avatar{
    flex: 0 0 50px;
    width: 28px;
    margin-left: 10px;
  }
  .img-avatar{
    border-radius: 50%;
    width: 50px;height: 50px;
  }
  .floor{
    font-size: 10px;
    color: rgb(7,17,27);
  }
  .rating-content{
    position: relative;
    display: inline-block;
    text-align: left;
    flex: 1;
  }
  .name{
    line-height: 12px;
    font-size: 10px;
    color: rgb(7,17,27);
    padding:3px 3px 0 5px;
  }
  .comment-like{
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: right;
  }
  .wrapper{
    margin-top: 6px;
    text-align: left;
    margin-bottom: 6px;
    font-size: 0;
    padding: 0 3px 3px 5px;
  }
  .delivery{
    vertical-align: top;
    line-height: 12px;
    font-size: 10px;
    color: rgb(7,17,27);
  }
  .text{
    text-align: left;
    margin-bottom: 8px;
    line-height: 18px;
    color: rgb(7,17,27);
    font-size: 12px;
  }
</style>
