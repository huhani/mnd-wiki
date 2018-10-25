<template>

    <div class="readDocument">
        <div is="documentInfoMessage" id="document-info">
          {{documentInfoMessage}}
        </div>
        <div v-if="!hasLoading && !detectNotFound" id="showDocument">
          <div id="documentContent">
            <doc-content v-bind:document="documentData"></doc-content>
          </div>
          <div id="documentInfo">
            <doc-info v-bind:document="documentData"></doc-info>
          </div>
        </div>
      <div v-else class="ErorSection__container">
        <div v-if="detectNotFound" id="ErrorSection">
          <div id="error-not-found">
            <error-not-found v-bind:title="originTitle"></error-not-found>
          </div>
        </div>
        <div v-else>
          <div id="unexpected-exception">
            <unexpected-exception-error></unexpected-exception-error>
          </div>
        </div>
      </div>

    </div>




</template>

<script>
  import content from './doc/content.vue'
  import info from './doc/info.vue'
  import ErrorNotFound from './doc/NotFound.vue'
  import UnexceptedExceptionError from './doc/UnexpectedExceptionError.vue'
  import http from 'axios'

  var loadingDocument = {
    title: "데이터를 불러오는 중입니다.",
    content: "ㄹㅇ루다가",
    date: "20180101235959",
    comment: "ㅎ",
  };

    export default {
      name: "ReadDocument.vue",
      props: {
        isHideTopNavigator: Boolean,
        config: Object
      },

      data() {
          var title = null;
          var path = window.location.pathname;
          var docRegex = /^\/w:(.*)/i;
          var docMatch = docRegex.exec(path);
          var that = this;
          var hideTopNavigator = false;
          this.$emit('getData', loadingDocument);
          if(docMatch && docMatch.length > 1) {
            title = docMatch[1];
            this.hasLoading = true;
            this.originTitle = title;
            this.$emit('getData', Object.assign(loadingDocument, {title: title}));
            http('../src/json/'+title+'.json').then(function(resolve){
              var data = resolve.data;
              that.$emit('getData', resolve.data);
              that.documentData = resolve.data;
            })['catch'](function(e){
              that.detectNotFound = true;
              that.detectError = true;
              console.error(e);
            })['finally'](function() {
              that.hasLoading = false;
            });
          } else {
            hideTopNavigator = true;
            this.detectError = true;
          }
          this.config.hideTopNavigator = hideTopNavigator;
          return {
            documentInfoMessage: null,
            documentData: loadingDocument,
            detectNotFound: false,
            detectError: false,
            hasLoading: true,
            originTitle: title
          };
      },
      components: {
        docContent: content,
        docInfo: info,
        errorNotFound: ErrorNotFound,
        unexpectedExceptionError: UnexceptedExceptionError
      }
    }
</script>

<style scoped>

</style>
