<template>

    <div class="readDocument">
        <div is="documentInfoMessage" id="document-info">
          {{documentInfoMessage}}
        </div>
        <div v-if="!hasLoading && !detectNotFound" id="showDocument">
          <div id="documentContent">
            <doc-content v-bind:document="document"></doc-content>
          </div>
          <div id="documentInfo">
            <doc-info v-bind:document="document"></doc-info>
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
    title: "국방위키(가칭): 대문",
    content: "이곳은 국군장병의 지식을 공유하는 국방망의 위키피디아, 국방위키입니다. 사용자들은 교범이나 실무와 관련한 지식들을 자유롭게 국방위키에 등재할 수 있고, ",
    date: "20180101235959",
    comment: "TEST",
  };

    export default {
      name: "ReadDocument.vue",
      props: {
        isHideTopNavigator: Boolean,
        config: Object,
        document: Object
      },

      data() {
        if(this.document.title === "<unavailable>") {
          var title = null;
          var path = window.location.pathname;
          var docRegex = /^\/w\/(.*)/i;
          var docMatch = docRegex.exec(path);
          var that = this;
          var hideTopNavigator = false;
          this.$emit('getData', loadingDocument);
          if(docMatch && docMatch.length > 1) {
            title = docMatch[1];
            this.hasLoading = true;
            this.$emit('getData', Object.assign(loadingDocument, {title: title}));
            http('../src/json/'+title+'.json').then(function(resolve){
              var data = resolve.data;
              that.$emit('getData', resolve.data);
              that.document = resolve.data;
            })['catch'](function(e){
              that.config.detectNotFound = true;
              that.config.detectError = true;
              console.error(e);
            })['finally'](function() {
              that.hasLoading = false;
            });
          } else if(path === '/') {
            title = loadingDocument.title;
            this.$emit('getData', loadingDocument);
            this.document = loadingDocument;
          } else {
            hideTopNavigator = true;
            this.config.detectError = true;
          }
          this.config.hideTopNavigator = hideTopNavigator;
        }
          return {
            documentInfoMessage: null,
            document: loadingDocument,
            hasLoading: this.hasLoading,
            originTitle: title
          };
      },
      watch: {
        'config.editCancel': function(newVal, oldVal) {

        }
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
