<template>
    <div class="login">
        <div class="login-container">
            <el-card class="login-card">
                <el-form ref="loginFormRef" :model="loginData" :rules="loginRules">
                    <el-form-item prop="account">
                        <el-input v-model="loginData.account" placeholder="请输入账号" @keyup.enter="handleLogin">
                            <template #prefix><i class="iconfont icon-user"></i></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input v-model="loginData.pwd" placeholder="请输入密码" type="password" @keyup.enter="handleLogin">
                            <template #prefix><i class="iconfont icon-lock"></i></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="userPwd">
                <div>账号：admin 密码：123456</div>
                <div>账号：vistor 密码：123456</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


import router from '@/router';
import useUserStore from '@/store/user';

const loginData = ref({
    account: "admin",
    pwd: "123456",
});

const loginRules = {
    account: [
        { required: true, trigger: "blur", message: "请输入账号" },
        { min: 5, trigger: "blur", message: "账号至少5位数" },
    ],
    pwd: [
        { required: true, trigger: "blur", message: "请输入密码" },
        { min: 5, trigger: "blur", message: "密码至少6位数" },
    ],
};

const loginFormRef = ref();

const handleLogin = async () => {
    const username = loginData.value.account
    const password = loginData.value.pwd
    await useUserStore().login(username, password)
    router.push('/'); // 跳转到根路径
};
</script>

<style lang="less" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* 使用视窗的高度作为容器的高度 */

    .login-container {
        position: relative;

        .login-card {
            padding: 20px;
            width: 400px;

            .el-form {
                .el-button {
                    margin-top: 15px;
                    width: 100%;
                }
            }
        }
    }

    .userPwd {
        display: flex;
        flex-flow: column;
        align-items: center;

        div {
            margin-top: 10px;
        }
    }
}
</style>