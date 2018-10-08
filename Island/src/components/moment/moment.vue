<template>
  <vheader :headTitle="headTitle"></vheader>
</template>

<script>
  import Header from '.././main/header'
  export default {
    name: 'moment',
    components: {
      vheader: Header
    },
    props:['headTitle']
  }
</script>

<style scoped>

</style>
