<template>
  <div class>
    <doc-title-section></doc-title-section>
    <doc-content></doc-content>
  </div>
</template>


<script>
  import VueRouter from "vue-router"
  import Vue from "Vue";
  import DocTitleSection from "./TitleSection.vue";
  import ReadDocument from "./ReadDocument.vue";
  Vue.use(VueRouter);

  export default {
    data: function(){
      return {
        test: 123
      }
    },
    methods: {

    },
    components: {
      DocTitleSection: DocTitleSection,
      DocContent: ReadDocument
    }
  }

</script>



<style>

</style>
