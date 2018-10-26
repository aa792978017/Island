<!--suppress ALL -->
<template>
  <div>
    <vheader :headTitle="headTitle"/>
  </div>
</template>

<script>
import Header from '.././main/header'
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
export default {
  name: 'home',
  components: {
    vheader: Header
  },
  props: ['headTitle']
}
</script>

<style scoped>

</style>
