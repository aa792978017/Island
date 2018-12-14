<template>
  <div class="out">
    <div>
      <vheader :headTitle="headTitle"/>
    </div>
    <div class="back">
      <mt-cell :title="'帐号管理'" class="friend" is-link>
      </mt-cell>
      <mt-cell :title="'个人信息'" class="friend" is-link>
      </mt-cell>
      <mt-cell :title="'消息设置'" class="friend up" is-link>
      </mt-cell>
      <mt-cell :title="'隐私设置'" class="friend" is-link>
      </mt-cell>
      <mt-cell :title="'常见问题'" class="friend" is-link>
      </mt-cell>
      <mt-cell :title="'新版功能'" class="friend" is-link>
      </mt-cell>
      <mt-cell :title="'用户反馈'" class="friend up" is-link>
      </mt-cell>
      <mt-cell :title="'其他设置'" class="friend" is-link>
      </mt-cell>
      <mt-button class="exit" size="large" @click="exit" >退出登录</mt-button>
    </div>
  </div>
</template>

<script>
import Header from '../main/header'
import { MessageBox } from 'mint-ui'
export default {
  name: 'mainMy',
  components: {
    vheader: Header
  },
  props: ['headTitle'],
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    exit () {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
    }
  }
}
</script>

<style scoped>
  .mint-navbar >.mint-tab-item {
    padding: 0px 0;
    font-size: 15px;
  }
  .friend {
    border-bottom: #EEEEEE solid thin;
  }
  .back {
    background-color: #eaeaea;
    padding: 10px 0 40px 0;
    width: 100%;
  }
  .exit {
    margin-top: 10px;
    background: white;
  }
  .up {
    margin-top: 10px;
  }
</style>
