<template>
  <div>
    <vheader :headTitle="headTitle"/>
    <mt-navbar v-model="selected" >
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
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :value="'关注 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :value="'推荐 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :value="'最新 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Header from '../main/header'
export default {
  name: 'square',
  components: {
    vheader: Header
  },
  data () {
    return {
      selected: '1'
    }
  },
  props: ['headTitle']
}
</script>

<style scoped>
  .mint-navbar >.mint-tab-item {
    padding: 0px 0;
    font-size: 15px;
  }
</style>
