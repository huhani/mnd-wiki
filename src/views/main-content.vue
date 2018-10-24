<template>
  <doc-title-section></doc-title-section>


</template>


<script>
  import VueRouter from "vue-router"
  import Vue from "Vue";
  import DocTitleSection from "./TitleSection.vue";
  Vue.use(VueRouter);

  export default {
    data: function(){
      return {
        test: 12312312312
      }
    },
    methods: {

    },
    components: {
      DocTitleSection: DocTitleSection
    }
  }

</script>



<style>

</style>
