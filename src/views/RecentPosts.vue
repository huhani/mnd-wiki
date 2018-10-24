<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>최근 변경</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>-->
    </div>
    <div v-for="item in items" class="text item">
      {{'List item ' + item }}
    </div>
  </el-card>

</template>

<script>
  import Vue from 'vue';
  import Element from 'element-ui';
  Vue.use(Element);

    export default {
        data() {
          return {
          items: [
            {item: 'Foo'},
            {item: 'Bar'}
            ]
          }
        }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 99%;
    height: 99%;
  }
</style>
