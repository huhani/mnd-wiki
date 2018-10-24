<template>
  <el-menu id="navbar" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><img class="logo" src="../img/logo.png">국방위키(가칭)</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-question"></i>도움말</template>
      <el-menu-item index="2-1">이용수칙</el-menu-item>
      <el-menu-item index="2-2">자주 묻는 질문</el-menu-item>
      <el-menu-item index="2-3">About Us</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><i class="el-icon-setting"></i>설정</el-menu-item>
    <el-menu-item index="4" disabled>관리자 메뉴</el-menu-item>

    <el-menu-item class="search" index="5" collapse="true"><el-input class="navbarSearch" placeholder="검색" v-model="input"></el-input></el-menu-item>

  </el-menu>
</template>

<script>

import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element);

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
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
  @import url("//unpkg.com/element-ui@2.4.8/lib/theme-chalk/index.css");

  #navbar .logo {
    width: 25px;
    height: 25px;
    padding: 0 10px 0 0;
  }

  #navbar .search {
    float: right;
  }
  #navbar .navbarSearch {
    width: 35%;
    min-width: 200px;
  }

</style>
