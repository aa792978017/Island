<template>
  <vcontain></vcontain>
</template>

<script>
import Contain from './main/contain'
import { getCookie, delCookie } from '../assets/js/cookie.js'
export default {
  name: 'MainHome',
  components: {
    vcontain: Contain
  },
  data () {
    return {
      name: '',
      secretList: [],
      exploreList: []
    }
  },
  beforeMount () {
    /* 页面挂载获取保存的cookie值，渲染到页面上 */
    let uname = getCookie('username')
    this.name = uname
    /* 如果cookie不存在，则跳转到登录页 */
    if (uname === '') {
      this.$router.push('/')
    }
  },
  beforeCreate () {
    // this.getAllSecret()
  },
  methods: {
    quit () {
      /* 删除cookie */
      delCookie('username')
    }
    // getAllSecret () {
    //   // alert(1)
    //   var that = this
    //   this.$http.post('http://localhost:8080/square/getAllSecret').then(function (response) {
    //     if (response.data.success) {
    //       if (response.data.code === 200) {
    //         alert('获取信息成功')
    //         that.secretList = response.data.data
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
  body{
    background-color: #eaeaea;
  }
</style>
