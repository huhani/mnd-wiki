<template>
  <el-menu id="navbar" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><img class="logo" src="./img/logo.png">우리식 위키페디아</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>

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
