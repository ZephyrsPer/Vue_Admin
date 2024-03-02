<template>
    <div class="header-avatar">
        <el-dropdown class="custom-dropdown">
            <el-avatar :size="32" src="https://empty" @error="errorHandler">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/user';
import { useRouter } from 'vue-router';

const errorHandler = () => true
const authStore = useUserStore();
const router = useRouter();

const logout = () => {
    authStore.clearToken();
    router.replace('/login'); // 在这里设置你想要跳转的登录页面路径
}
</script>

<style lang="less" scoped>
.header-avatar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    // &:hover {
    //     // background-color: rgb(235, 235, 232);
    // }

    // background-color: #1890ff;
    .custom-dropdown {
        .el-dropdown-menu {
            width: auto;
            /* 自动根据内容宽度调整 */
        }

        .avatar-text {
            display: inline-block;
            padding: 0 10px;
            line-height: 40px;
            /* 保持和下拉框一样的高度 */
            cursor: pointer;
            color: #333;
            transition: color 0.3s ease;

            &:hover {
                color: #1890ff;
                /* 鼠标悬停时改变文字颜色 */
            }
        }
    }
}
</style>