<template>

    <div class="readDocument">
        <div is="documentInfoMessage" id="document-info">
          {{documentInfoMessage}}
        </div>
        <div id="documentContent">
          <doc-content></doc-content>
        </div>
        <div id="documentInfo">
          <doc-info></doc-info>
        </div>
    </div>


</template>

<script>
  import content from './doc/content.vue'
  import info from './doc/info.vue'
  import http from 'axios'

  var loadingDocument = {
    title: "데이터를 불러오는 중입니다.",
    content: "ㄹㅇ루다가",
    date: "20180101235959",
    comment: "ㅎ",
  };

    export default {
        name: "ReadDocument.vue",
        documentData: loadingDocument,
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
            })['catch'](function(e){
              console.error(e);
            });
          } else {

          }
          return {
            documentInfoMessage: null
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
