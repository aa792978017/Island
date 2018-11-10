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
      <mt-tab-container-item id="广场">
        <vsquare :headTitle="selected" :secretList="secretList"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="首页">
        <vhome :headTitle="selected"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="秘密">
       <vsecret :headTitle="selected"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed="true" v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/首页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="广场">
        <img slot="icon" src="../../assets/广场.png">
        广场
      </mt-tab-item>
      <mt-tab-item id="联系人">
        <img slot="icon" src="../../assets/通讯录.png">
        联系人
      </mt-tab-item>
      <mt-tab-item id="秘密">
        <img slot="icon" src="../../assets/看过.png">
        秘密
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
import Secret from '.././secret/secret'
import Home from '.././home/home'
import Square from '../square/square'
export default {
  name: 'contain',
  props: ['secretList'],
  components: {
    'vmainmy': MainMy,
    'vfriend': Friend,
    'vsecret': Secret,
    'vhome': Home,
    'vsquare': Square
  },
  data () {
    return {
      selected: '我的'
    }
  },
  mounted () {
    alert(this.secretList + "1111")
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
