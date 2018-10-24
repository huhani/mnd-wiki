<template>

  <footer class="footer-basic-centered">

    <p class="footer-copyright">ⓒ Copyright 2018 MND-Wiki, All rights reserved.</p>

    <p class="footer-links">
      <a href="#">개인정보보호방침</a>
      ·
      <a href="#">이용약관</a>
      ·
      <a href="#">국방부</a>
      ·
      <a href="#">Vue.js</a>
    </p>

    <p class="footer-administrator">관리자: 국방부 지식정보화추진처 7급 홍길동, mnd-wiki-contact@mnd.mil</p>

  </footer>

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
        // 데이터는 함수로만 가능!
      }
    }
  }
</script>

<style>
  .el-footer {
    padding: 0;
  }
</style>

<style scoped>

  .footer-basic-centered{
    background-color: #292c2f;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    font: normal 18px sans-serif;

    padding: 45px;
  }

  .footer-basic-centered .footer-copyright{
    color:  #8d9093;
    font-size: 24px;
    margin: 0;
  }

  .footer-basic-centered .footer-administrator{
    color:  #8f9296;
    font-size: 14px;
    margin: 0;
  }

  .footer-basic-centered .footer-links{
    list-style: none;
    font-weight: bold;
    color:  #ffffff;
    padding: 35px 0 23px;
    margin: 0;
  }

  .footer-basic-centered .footer-links a{
    display:inline-block;
    text-decoration: none;
    color: inherit;
  }

  /* If you don't want the footer to be responsive, remove these media queries */

  @media (max-width: 600px) {

    .footer-basic-centered{
      padding: 35px;
    }

    .footer-basic-centered .footer-copyright{
      font-size: 18px;
    }

    .footer-basic-centered .footer-administrator{
      font-size: 12px;
    }

    .footer-basic-centered .footer-links{
      font-size: 14px;
      padding: 25px 0 20px;
    }

    .footer-basic-centered .footer-links a{
      line-height: 1.8;
    }
  }
</style>
