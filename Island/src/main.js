// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// 引入mint-ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入Echart组件,以后再引入把
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)

const transitions = []

const hookTransition = (transition) => {
  if (transitions.indexOf(transition) !== -1) return

  const getVueInstance = (element) => {
    let instance = element.__vue__
    if (!instance) {
      const textNode = element.previousSibling
      if (textNode.__vue__) {
        instance = textNode.__vue__
      }
    }
    return instance
  }

  Vue.transition(transition, {
    afterEnter (el) {
      const instance = getVueInstance(el)

      if (instance) {
        instance.doAfterOpen && instance.doAfterOpen()
      }
    },
    afterLeave (el) {
      const instance = getVueInstance(el)

      if (instance) {
        instance.doAfterClose && instance.doAfterClose()
      }
    }
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
