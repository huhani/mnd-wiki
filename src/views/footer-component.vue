<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>ⓒ Copyright 2018 MNDWiki, All Rights Reserved.</span>
      <br><span style="font-weight:normal; font-size:14px">관리자: 국방부 지식정보화기획처 7급 홍길동, <a href="asdf@mnd.mil">mnd-wiki-admin@mnd.mil</a></span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>-->
    </div>

    <li v-for="footerLists in footerLists" class="text item" id="footerHangmok">
      {{footerLists}}
    </li>
    <li class="hangmok-majimak">&nbsp;</li>
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
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    text-align: center;
    width: 96%;
    position:absolute;
    bottom: 20px;
    border: 2px ;
    border-color:black;

  }
  .clearfix
  {
    text-align: center;
    font-size:24px;
    font-weight:bold;
    padding-top:1px;
    padding-bottom:1px;
  }
  li.text{
    display:inline-block;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 0px;
    padding-bottom: 0px;
    border-left: 2px solid #ececec;
    text-align:center;
  }

  .hangmok-majimak{
    display:inline-block;
    border-right:2px solid #ececec;

  }
</style>
