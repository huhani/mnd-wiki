<template>
  <div class>
    <doc-title-section v-bind:document="documentObject" v-bind:config="config"></doc-title-section>
    <doc-content v-if="!config.isEdit" v-on:getData="subscribeData" v-bind:config="config"></doc-content>
    <doc-edit v-if="config.isEdit" v-bind:config="config"></doc-edit>
  </div>
</template>


<script>
  import VueRouter from "vue-router"
  import Vue from "Vue";
  import DocTitleSection from "./TitleSection.vue";
  import ReadDocument from "./ReadDocument.vue";
  import EditDocument from "./doc/edit.vue";
  Vue.use(VueRouter);

  function hasEditMode() {
    var path = window.location.pathname;
    var editRegex = /^\/edit\/(.*)/i;
    return !!path.match(editRegex);
  }

  export default {
    data: function(){
      return {
        test: 123,
        documentObject: null,
        config: {
          isEdit: hasEditMode(),
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
      DocContent: ReadDocument,
      DocEdit: EditDocument
    }
  }

</script>



<style>
  .footnote-list{
    line-height: 2em;
    display: block;
  }

</style>
