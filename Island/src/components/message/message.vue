<template>
  <div>
    <vheader :headTitle="headTitle"/>
    <mt-cell :title="'朋友' + n" v-for="n in 6" class="friend">
      <span>聊天记录</span>
      <img slot="icon" src="../../assets/个人.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
  import Header from '.././main/header'
  export default {
    name: 'message',
    components: {
      vheader: Header
    },
    props:['headTitle']
  }
</script>

<style scoped>

</style>
