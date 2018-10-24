import Vue from 'vue'
import App from './views/App.vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

window.a = new Vue({
  el: 'main',
  render: h => h(App)
});
