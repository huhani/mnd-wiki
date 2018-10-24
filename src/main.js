import Vue from 'vue'
import navbar from './views/navbar.vue';
import MainContent from './views/main-content.vue'

window.a = new Vue({
  el: '#navbar',
  render: h => h(navbar)
})

window.b = new Vue({
  el: '#main-content',
  render: h => h(MainContent)
})
