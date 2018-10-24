<template>
  <div id="documentInfo">
    <span v-if="changedData || true" class="changed printStr"> 이 문서는 {{date}}에 마지막으로 바뀌었습니다.</span>
    <span class="copyright printStr">모든 텍스트는 크리에이티브 커먼즈 저작자표시-동일조건변경허락 3.0에 따라 사용할 수 있습니다. </span>
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
 #documentInfo .printStr {
   display: block;
   text-align: center;
 }
</style>
