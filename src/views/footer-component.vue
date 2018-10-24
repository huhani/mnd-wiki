<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>ⓒ Copyright 2018 MNDWiki, All Rights Reserved.</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>-->
    </div>
    <div v-for="footerLists in footerLists" class="text item">
      {{footerLists}}
    </div>
  </el-card>

</template>

<script>
    export default {
      created:function(){
          console.log("@@ createㅇ!");
      },
      mounted:function(){
        console.log("@@ mounted");
      },
      methods:{

      },
      data() {
        return {
          footerLists: ["개인정보보호방침", "이용약관", "쿠키 사용 정책", "국방부", "Vue.js"]
        }
      }
    }
</script>

<style scoped>
  <style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
  }
</style>
