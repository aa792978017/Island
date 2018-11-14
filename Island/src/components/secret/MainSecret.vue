<template>
    <div>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" >
        <li v-for="item in secret" class="main_secret"  v-bind="this">
          <div class="secret-head" >
            <span style="" class="image-div">
                <img src="../../assets/头像 男孩.png" class="user-image" />
              <span class="secret-head-text">
                <span class="user-head-message"><span class="user-name">
                  <!--#{{item.userName}}-->
                  {{item.microblogId}}
                </span>
                  <br>
                  <span class="mic-time" >{{item.micReleaseTime.slice(0,10)}}</span>
                </span>
              </span>
                <div style="text-align: right;display: inline-block;width:200px;vertical-align: top">
                  <img src="../../assets/关闭.png" class="user-close" />
                </div>
              </span>
          </div>
          <div class="secret-contain">
            <span class="secret-contain-word">
              {{ item.micContent}}
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
    </div>
</template>

<script>
// import { Toast } from 'mint-ui'
export default {
  name: 'MainSecret',
  // props: ['secretList'],
  data () {
    return {
      selected: '',
      loading: false,
      secret: [
        {
          userName: '用户1',
          userImage: 'xxx1',
          micContent: '今天天气很好1',
          likeNum: '100',
          userId: '1',
          micReleaseTime: '2018-10-15',
          comment: {
          },
          state: '原创'
        },
        {
          userName: '用户1',
          userImage: 'xxx1',
          micContent: '今天天气很好1',
          likeNum: '100',
          userId: '1',
          micReleaseTime: '2018-10-15',
          comment: {
          },
          state: '原创'
        },
        {
          userName: '用户1',
          userImage: 'xxx1',
          micContent: '今天天气很好1',
          likeNum: '100',
          userId: '1',
          micReleaseTime: '2018-10-15',
          comment: {
          },
          state: '原创'
        },
        {
          userName: '用户1',
          userImage: 'xxx1',
          micContent: '今天天气很好1',
          likeNum: '100',
          userId: '1',
          micReleaseTime: '2018-10-15',
          comment: {
          },
          state: '原创'
        },
        {
          userName: '用户1',
          userImage: 'xxx1',
          micContent: '今天天气很好1',
          likeNum: '100',
          userId: '1',
          micReleaseTime: '2018-10-15',
          comment: {
          },
          state: '原创'
        }

      ]
    }
  },
  beforeMount () {
    // alert(this.secretList + '3333')
    this.getAllSecret()
    this.secret = this.secretList
  },
  methods: {
    loadMore () {
      // this.loading = true
      // setTimeout(() => {
      //   let last = this.list[this.list.length - 1]
      //   for (let i = 1; i <= 10; i++) {
      //     this.list.push(last + i)
      //   }
      //   this.loading = false
      // }, 2500)
    },
    setSecret () {
      // alert(this.secretList.length)
      // this.secret = secretList
    },
    getAllSecret () {
      // alert(1)
      var that = this
      this.$http.post('http://localhost:8080/square/getAllSecret').then(function (response) {
        if (response.data.success) {
          if (response.data.code === 200) {
            // alert('获取信息成功')
            that.secret = response.data.data
            // alert(that.secret)
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
  .secret-bottom {
    position: relative;
  }
  ul {
    padding-left: 0px;
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
