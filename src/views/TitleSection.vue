<template>
  <div v-if="!config.hideTopNavigator">
    <H1 class="docTitle">{{title}}<span v-if="config.isEdit" class="edit-name">::편집</span></H1>
    <el-button-group class="controlButtons">
      <el-button size="mini" type="primary" icon="el-icon-question">질의응답</el-button>
      <el-button size="mini" type="primary" icon="el-icon-info">역사</el-button>
      <el-button size="mini" type="primary" icon="el-icon-edit">편집</el-button>
      <el-button size="mini" type="primary" icon="el-icon-delete">삭제</el-button>
    </el-button-group>
    <div class="clear"></div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import Element from 'element-ui';
  Vue.use(Element);

  export default {
    data() {
      return {
        title: "국방위키(가칭):대문"
      };
    },
    props : {
      document: Object,
      config: Object
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    watch: {
      document(documentObj) {
        this.title = decodeURIComponent(documentObj.title);
      }
    }
  }
</script>

<style>
.docTitle {
  display: inline-block;
  font-size: 28px;
  margin: 15px 5px;
}

.docTitle .edit-name {
  color: #666;
}

.clear {
  clear: both;
}
  .controlButtons {
    float: right;
    padding: 25px 50px 20px 0;
  }
</style>
