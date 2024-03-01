<template>
    <div class="hamburger" @click="emitMenuAlter">
        <el-icon class="iconfont" :class="useThemeStore().isCollapsed ? 'icon-zhankai' : 'icon-shifang'"
            :size="24"></el-icon>
    </div>
</template>

<script lang="ts" setup>
import useThemeStore from "@/store/theme";

const emit = defineEmits(['emitMenuAlter'])
const emitMenuAlter = () => {
    emit('emitMenuAlter')
}
</script>

<style lang="less" scoped>
.hamburger {
    height: 100%;
    padding: 0px 12px;
    margin-right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgb(235, 235, 232);
    }
}
</style>