<template>
  <div class="document-info">
    <span v-if="changedData || true" class="changed printStr"> 이 문서는 {{date}}에 마지막으로 바뀌었습니다.</span>
    <span class="copyright printStr">모든 텍스트는 <a class="hyperlink" href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">크리에이티브 커먼즈 저작자표시-동일조건변경허락 3.0</a>에 따라 사용할 수 있습니다. </span>
  </div>
</template>

<script>
    export default {
        name: "info.vue",
        props: ['date'],
        data() {
            date: 20181024
        }
    }
</script>

<style>

  #documentInfo {
    border: 1px solid #DDD;
    padding:8px;
    margin: 50px auto 0;
    max-width: 700px;
  }

 #documentInfo .printStr {
   display: block;
   text-align: center;
   font-size: 13px;
 }

  #documentInfo .hyperlink {
    color: #33b733;
    text-decoration: none;
  }
 #documentInfo .hyperlink:hover {
   color: #33b733;
   text-decoration: underline;
 }
</style>
