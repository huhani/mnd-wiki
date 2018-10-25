<template>
    <div id="EditPage">
      <write-post-page id="WritePostPage" v-bind:document="document" v-bind:origin-title="originTitle" v-bind:config="config"></write-post-page>
    </div>
</template>

<script>
    import WritePostPage from "../WritePostPage.vue"

    export default {
      name: "edit",
      props: {
          config: Object,
          document: Object,
        originTitle: String
      },
      data() {
          return {
            unavailableStr: "<unavailable>"
          }
      },
      watch: {
        document(documentObject) {
          this.document = documentObject;
        },
        originTitle(title) {
          this.input = title;
        }
,      },
      components: {
        WritePostPage: WritePostPage
      }
    }
</script>

<style>

  #EditPage {
    position: relative;
  }

  #EditPage .edit-container {
    margin-left: 0;
    width:100%;
    position: relative;
  }

</style>
