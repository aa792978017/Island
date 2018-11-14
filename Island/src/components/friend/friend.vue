<template>
  <div>
    <div>
    <vheader :headTitle="headTitle"/>
    </div>
    <div>
    <mt-cell :title="'朋友' + n" v-for="n in 6" class="friend" >
      <span>状态</span>
      <img slot="icon" src="../../assets/个人.png" width="24" height="24">
    </mt-cell>
    </div>
  </div>
</template>

<script>
import Header from '../main/header'
import '../../assets/css/newmint-ui.css'
export default {
  name: 'friend',
  components: {
    vheader: Header
  },
  props: ['headTitle']
}
</script>

<style scoped>

.friend >.mint-cell-wrapper > .mint-cell-value{
}
</style>
