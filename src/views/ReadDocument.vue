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

        <div v-if="detectNotFound" id="ErrorSection">
          <div id="error-not-found">
            <error-not-found v-bind:title="originTitle"></error-not-found>
          </div>
        </div>
    </div>


</template>

<script>
  import content from './doc/content.vue'
  import info from './doc/info.vue'
  import ErrorNotFound from './doc/NotFound.vue'
  import http from 'axios'

  var loadingDocument = {
    title: "국방위키(가칭): 대문",
    content: "이곳은 국군장병의 지식을 공유하는 국방망의 위키피디아, 국방위키입니다. 사용자들은 교범이나 실무와 관련한 지식들을 자유롭게 국방위키에 등재할 수 있고, ",
    date: "20180101235959",
    comment: "TEST",
  };

    export default {
        name: "ReadDocument.vue",
      data() {
          var title = null;
          var path = window.location.pathname;
          var docRegex = /^\/w:(.*)/i;
          var docMatch = docRegex.exec(path);
          var that = this;
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
              console.error(e);
            })['finally'](function() {
              that.hasLoading = false;
            });
          } else {

          }
          return {
            documentInfoMessage: null,
            documentData: loadingDocument,
            detectNotFound: false,
            hasLoading: true,
            originTitle: title
          };
      },
      components: {
        docContent: content,
        docInfo: info,
        errorNotFound: ErrorNotFound
      }
    }
</script>

<style scoped>

</style>
