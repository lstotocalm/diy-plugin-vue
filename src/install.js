export default {
  install(Vue) {
    Vue.prototype.$domain = function (val) {
      console.log(val)
    }
  }
}