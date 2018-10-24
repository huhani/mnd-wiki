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
    export default {
        name: "ReadDocument.vue",

      data() {
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
