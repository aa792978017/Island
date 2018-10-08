<template>
  <div id="app"style="width: 100%;height: 100%">
    <vcontain></vcontain>
    <router-view/>
  </div>
</template>

<script>
import Contain from './components/main/contain'

export default {
  name: 'App',
  components: {
    vcontain: Contain,
  },
  data () {
    return {
      list: [1, 2, 3, 1, 3434343],
      selected: '1'
    }
  },
  methods: {
    init () {
      this.selected = 1
    }
  },
  beforeCreate(){
    this.init()
  }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
  padding: 0px
}
</style>
