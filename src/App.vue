

<template>
  <!-- <router-link to="/power_admin" class="router-link">去测试页</router-link>
  <router-link to="/power_vistor" class="router-link">去测试页二</router-link>
  <router-link to="/" class="router-link">回首页</router-link> -->
  <router-view></router-view>
</template>


<script setup lang="ts">

</script>

<style lang="less" scoped>
/* 定义变量 */
@primary-color: #007bff;
@link-color: #007bff;

/* 样式 */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

/* 路由链接样式 */
.router-link {
  margin-right: 10px;
  text-decoration: none;
  color: @link-color;
  font-weight: bold;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
}
</style>