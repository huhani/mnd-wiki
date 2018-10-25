<template>
  <div class>
    <doc-title-section v-bind:document="documentObject" v-bind:config="config"></doc-title-section>
    <doc-content v-on:getData="subscribeData" v-bind:config="config"></doc-content>
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
        test: 123,
        documentObject: null,
        config: {
          hideTopNavigator: false
        }
      }
    },
    methods: {
      subscribeData: function(dataObject){
        if(dataObject === void 0) {
          throw new TypeError("dataObject argument must be object.");
        }
        this.documentObject = dataObject;
      }
    },
    components: {
      DocTitleSection: DocTitleSection,
      DocContent: ReadDocument
    }
  }

</script>



<style>

</style>
