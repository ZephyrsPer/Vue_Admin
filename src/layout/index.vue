<template>
  <div class="layout">
    <div class="side">
      <LoSidebar></LoSidebar>
    </div>
    <div class="main">
      <LoNavbar></LoNavbar>
      <LoMain></LoMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoMain from "./components/LoMain.vue";
import LoNavbar from "./components/LoNavbar.vue";
import LoSidebar from "./components/LoSidebar.vue";

</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100vh;

  .side {
    width: auto;
    // background-color: aqua;
  }

  .main {
    // background-color: rgb(83, 163, 163);
    flex: 1;
  }
}
</style>
