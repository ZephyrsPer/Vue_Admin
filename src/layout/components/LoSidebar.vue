<template>
  <div class="menu">
    <div v-if="!themeStore.isCollapsed" class="title">
      <el-icon :class="['iconfont', 'icon-weijianyi']" :size="24"></el-icon>
      <!-- <span class="title-name">VueAdmin</span> -->
    </div>
    <div v-else class="title">
      <el-icon :class="['iconfont', 'icon-weijianyi']" :size="24"></el-icon>
    </div>
    <el-menu :default-active="defaultActive" :collapse="themeStore.isCollapsed" :router="true">
      <el-menu-item index="/dashboard">
        <el-icon :class="['iconfont', 'icon-tiaoseban']"></el-icon>
        <span class="menu-name">控制面板</span>
      </el-menu-item>
      <el-menu-item index="/power_admin" v-if="useUserStore().token == 'admin-token'">
        <el-icon :class="['iconfont', 'icon-jiesuo']"></el-icon>
        <span class="menu-name">Admin</span>
      </el-menu-item>
      <el-menu-item index="/power_vistor" v-if="useUserStore().token == 'vistor-token'">
        <el-icon :class="['iconfont', 'icon-jiesuo']"></el-icon>
        <span class="menu-name">Vistor</span>
      </el-menu-item>
      <el-sub-menu index="/user_control">
        <template #title>
          <el-icon class="iconfont icon-yonghu">
          </el-icon>
          <span>用户控制</span>
        </template>
        <el-menu-item index="/user_control">
          <el-icon></el-icon>
          <!-- <i></i> -->
          <span class="menu-name">管理界面</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/markdown">
        <el-icon :class="['iconfont', 'icon-fuwenbenbianjiqi_ziti']"></el-icon>
        <span class="menu-name">MarkDown</span>
      </el-menu-item>

      <el-sub-menu index="/charts">

        <template #title>
          <el-icon class="iconfont icon-tubiao">
          </el-icon>
          <span>图表</span>
        </template>
        <el-menu-item index="/charts_bar">
          <el-icon class="iconfont icon-tubiao-zhuzhuangtu"></el-icon>
          <span class="menu-name">柱状图</span>
        </el-menu-item>
        <el-menu-item index="/charts_line">
          <el-icon class="iconfont icon-tubiao-zhexiantu"></el-icon>
          <span class="menu-name">折线图</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import useThemeStore from "@/store/theme";
import useUserStore from "@/store/user";


const themeStore = useThemeStore();

const route = useRoute();

// 只有相关依赖进行更新，重新进行计算
const defaultActive = computed(() => {
  return route.path;
});
</script>

<style lang="less" scoped>
.is-active {
  // background-color: rgb(146, 207, 118);
  color: rgb(201, 108, 46);
  // border-radius: 10px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}
</style>
