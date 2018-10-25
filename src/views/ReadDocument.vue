<template>

    <div class="readDocument">
        <div is="documentInfoMessage" id="document-info">
          {{documentInfoMessage}}
        </div>
        <div id="documentContent">
          <doc-content v-bind:document="documentData"></doc-content>
        </div>
        <div id="documentInfo">
          <doc-info v-bind:document="documentData"></doc-info>
        </div>
    </div>


</template>

<script>
  import content from './doc/content.vue'
  import info from './doc/info.vue'
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
          var path = window.location.pathname;
          var docRegex = /^\/w:(.*)/i;
          var docMatch = docRegex.exec(path);
          var that = this;
          this.$emit('getData', loadingDocument);

          if(docMatch && docMatch.length > 1) {
            let title = docMatch[1];
            http('../src/json/'+title+'.json').then(function(resolve){
              that.$emit('getData', resolve.data);
              that.documentData = resolve.data;
            })['catch'](function(e){
              console.error(e);
            });
          } else {

          }
          return {
            documentInfoMessage: null,
            documentData: loadingDocument
          };
      },
      components: {
        docContent: content,
        docInfo: info
      }
    }
</script>

<style scoped>

</style>
