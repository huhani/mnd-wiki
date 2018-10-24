<template>
  <div>
      <H1 class="docTitle">{{title}}</H1>
      <el-button-group class="controlButtons">
        <el-button size="mini" type="primary" icon="el-icon-edit">역링크</el-button>
        <el-button size="mini" type="primary" icon="el-icon-share">편집</el-button>
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
        title: "우리식 위키페디아:대문"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.docTitle {
  display: inline-block;
}
.clear {
  clear: both;
}
  .controlButtons {
    float: right;
    padding: 25px 50px 20px 0;
  }
</style>
