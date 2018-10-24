<template>
  <el-container>
    <el-header>
      <navbar></navbar>
    </el-header>

    <el-container>
        <el-aside>
          <recent-posts></recent-posts>
        </el-aside>
        <el-container>
          <el-main>
            <main-content></main-content>
          </el-main>

        </el-container>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import navbar from './navbar.vue'
  import MainContent from './main-content.vue'
  import RecentPosts from './RecentPosts.vue'
    export default {
      name: "main.vue",
      components: {
        navbar:navbar,
        mainContent: MainContent,
        recentPosts: RecentPosts
      }
    }
</script>

<style scoped>
</style>
