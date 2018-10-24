import Vue from 'vue'
import navbar from './main/navbar.vue'
import TitleSection from './widget/TitleSection.vue'

window.a = new Vue({
  el: '#navbar',
  render: h => h(navbar)
})

window.b = new Vue({
  el: '#doc-title-section',
  render: h => h(TitleSection)
})
