<template>
  <mt-header :title="headTitle">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
      }
    },
    methods:{

    },
    props: ['headTitle'],
  }
</script>

<style scoped>

</style>
