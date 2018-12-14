<template>
  <div>
    <vheader :headTitle="headTitle"/>
    <mt-navbar v-model="selected" fixed class="navbar">
      <mt-tab-item id="1">
        <mt-cell title="关注">
          <img slot="icon" src="../../assets/关注的人2.png" width="24" height="24">
        </mt-cell>
      </mt-tab-item>
      <mt-tab-item id="2">
        <mt-cell title="推荐">
          <img slot="icon" src="../../assets/收藏.png" width="24" height="24">
        </mt-cell>
      </mt-tab-item>
      <mt-tab-item id="3">
        <mt-cell title="最新">
          <img slot="icon" src="../../assets/投诉举报.png" width="24" height="24">
        </mt-cell>
      </mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="container">
      <mt-tab-container-item id="1">
        <!--<mt-cell v-for="n in 10" :value="'关注 ' + n" />-->
        <vwriteexplore />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <vmainexplore />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!--<mt-cell v-for="n in 6" :value="'最新 ' + n" >-->
          <!--<vmainsecret/>-->
        <!--</mt-cell>-->
        <!--<mt-cell  :value="最新 " >-->
          <!--<vmainsecret :secretList="secretList"/>-->
        <vmainsecret />
        <!--</mt-cell>-->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Header from '../main/header'
import MainSecret from '../secret/MainSecret'
import MainExplore from '../square/MainExplore'
import WriteExplore from '../square/WriteExplore'
export default {
  name: 'square',
  components: {
    vheader: Header,
    vmainsecret: MainSecret,
    vmainexplore: MainExplore,
    vwriteexplore: WriteExplore
  },
  data () {
    return {
      selected: '1',
      secretListNow: []
    }
  },
  props: ['headTitle'],
  mounted () {
    // alert(this.secretList + '22222')
  },
  methods: {
    // getAllSecret () {
    //   // alert(1)
    //   var that = this
    //   this.$http.post('http://localhost:8080/square/getAllSecret').then(function (response) {
    //     if (response.data.success) {
    //       if (response.data.code === 200) {
    //         alert('获取信息成功')
    //         that.secretListNow = response.data.data
    //         alert(that.secretList)
    //       }
    //     } else {
    //       alert('失败')
    //     }
    //   })
    // }
  }
}

</script>

<style scoped>
  .mint-navbar >.mint-tab-item {
    padding: 0px 0;
    font-size: 15px;
  }
  .mint-cell-title{
    display: none;
  }
  .navbar {
    top: 40px;
  }
  .container {
    margin-top: 52px;
  }
</style>
