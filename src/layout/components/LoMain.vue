<template>
  <!-- 标签式导航 -->
  <TagsView></TagsView>
  <div class="main">
    <!-- <el-button type="primary" @click="themeStore.changeIsCollapsed">测试按钮</el-button> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TagsView from "@/components/TagsView/index.vue"

// import useThemeStore from "@/store/theme";

// import { storeToRefs } from 'pinia'
// const themeStore = useThemeStore();
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  /* 设置高度为100% */
  overflow-y: auto;
  /* 设置垂直方向上自动显示滚动条 */
}
</style>
