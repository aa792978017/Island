<template>
    <div>
      <div>
      <textarea placeholder="请输入内容" v-model="content"></textarea>
      <button v-on:click="writeExplore">完成</button>
      </div>
    </div>
</template>

<script>
import {getUserIdFromSession} from '../../assets/js/cookie'
export default {
  name: 'WriteExplore',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    writeExplore () {
      if (this.content === '') {
        alert('请输入内容')
      } else {
        var userId = getUserIdFromSession()
        let data = { 'content': this.content, 'userId': userId }
        this.$http.post('http://localhost:8080/explore/writeExplore', data).then((res) => {
          if (res.data.success) {
            if (res.data.code === 200) {
              alert('内容传输成功')
            } else {
              alert('失败')
            }
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  textarea {
    width: 300px;
    height: 100px;
  }
</style>
