<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10" >
      <li v-for="item in explore" class="main_secret"  v-bind="this" @click="openComment(item)">
        <div class="secret-head" >
            <span style="" class="image-div">
                <img src="../../assets/头像 男孩.png" class="user-image" />
              <span class="secret-head-text">
                <span class="user-head-message"><span class="user-name">
                  <!--#{{item.userName}}-->
                  {{item.exploreId}}
                </span>
                  <br>
                  <span class="mic-time" >{{item.issueTime.slice(0,10)}}</span>
                </span>
              </span>
                <div style="text-align: right;display: inline-block;width:200px;vertical-align: top">
                  <img src="../../assets/关闭.png" class="user-close" />
                </div>
              </span>
      </div>
        <div class="secret-contain">
            <span class="secret-contain-word">
              {{ item.content}}
            </span>
        </div>
        <div class="secret-function">
          <div class="secret-function-button">
            <img src="../../assets/收藏.png"  class="secret-function-image"/>
          </div>
          <div class="secret-function-button">
            <!--<span style="height: 40px;line-height: 40px">sss</span>-->
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
    </ul>
    <!--<mt-popup v-model="comment" position="right" :modal=false>-->
      <!--我是测试{{exploreId}}-->
    <!--</mt-popup>-->
    <vcomment :explore="selectedExplore" ref="vcomment"></vcomment>
  </div>
</template>

<script>
import Comment from '../comment/comment'
export default {
  name: 'MainExplore',
  components: {
    vcomment: Comment
  },
  data () {
    return {
      selected: '',
      loading: false,
      explore: [],
      selectedExplore: ''
    }
  },
  beforeMount () {
    this.getAllExploreInfo()
    this.explore = this.exploreList
  },
  methods: {
    loadMore () {
    },
    getAllExploreInfo () {
      var that = this
      this.$http.post('http://localhost:8080/explore/getAllExploreInfo').then(function (response) {
        if (response.data.success) {
          if (response.data.code === 200) {
            // alert('获取信息成功')
            that.explore = response.data.data
            // alert(that.explore)
          }
        } else {
          alert('失败')
        }
      })
    },
    openComment (explore) {
      explore.issueTime = explore.issueTime.slice(0, 10)
      this.selectedExplore = explore
      this.$refs.vcomment.show()
      this.$refs.vcomment.getCommentInfo(explore.exploreId)
    }
  }
}
</script>

<style scoped>
  .secret-bottom {
     position: relative;
   }
  ul {
    padding-left: 0px;
    margin-top: 0;
    margin-bottom: 0;
  }
  li {
    background-color: #eaeaea;
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
  /*让子block水平对齐*/
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
    background-color: #eaeaea;
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
</style>
