<template>
  <div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="我的">
        <!--我的组件-->
        <vmainmy :headTitle="selected"></vmainmy>
      </mt-tab-container-item>
      <mt-tab-container-item id="联系人">
        <vfriend :headTitle="selected"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="消息">
        <vmessage :headTitle="selected"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="动态">
       <vmoment :headTitle="selected"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="消息">
        <img slot="icon" src="../../assets/评论.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="联系人">
        <img slot="icon" src="../../assets/通讯录.png">
        联系人
      </mt-tab-item>
      <mt-tab-item id="动态">
        <img slot="icon" src="../../assets/看过.png">
        动态
      </mt-tab-item>
      <mt-tab-item id="我的" >
        <img slot="icon" src="../../assets/个人.png" >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import MainMy from '.././my/MainMy'
  import Friend from '.././friend/friend'
  import Message from '.././message/message'
  import Moment from '.././moment/moment'
export default {
  name: 'contain',
  components: {
    'vmainmy': MainMy,
    'vfriend': Friend,
    'vmessage': Message,
    'vmoment': Moment
  },
  data () {
    return {
      selected: '我的',
    }
  },
  mounted: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
