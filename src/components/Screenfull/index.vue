
<template>
    <el-tooltip class="item" effect="dark" :content="state.isScreenfull ? '退出全屏' : '全屏'" placement="bottom">
        <div class="screenfull" @click="handleScreenfull">
            <el-icon class="iconfont" :class="state.isScreenfull ? 'icon-suoxiao' : 'icon-24gl-expand'"
                :size="24"></el-icon>
        </div>
    </el-tooltip>
</template>
<script lang="ts" setup>
import screenfull from 'screenfull'
import { reactive } from 'vue'

const state = reactive({
    isScreenfull: false as boolean
})
/**
 * @desc:设置||退出全屏
 * @param {*}
 * @return {*}
 */
const handleScreenfull = () => {
    screenfull.toggle()
    if (!state.isScreenfull) {
        return false
    }
    screenfull.toggle()
}
/**
 * @desc: 监听浏览器全屏变化
 * @param {*}
 * @return {*}
 */
const handleScreenfullChange = () => {
    state.isScreenfull = !state.isScreenfull
}
screenfull.on('change', handleScreenfullChange)
</script>
  
<style lang="less">
.screenfull {
    padding: 0px 12px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    &:hover {
        background-color: #ffe;
    }
}
</style>
  