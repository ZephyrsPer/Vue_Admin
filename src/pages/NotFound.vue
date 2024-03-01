<template>
    <div class="not-found">
        <h1>404 - 页面未找到</h1>
        <p>抱歉，您访问的页面不存在。</p>
        <router-link to="/dashboard">返回首页</router-link>
    </div>
</template>
  
<script setup lang="ts">

</script>
  
<style lang="less" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
    }

    router-link {
        padding: 0.5rem 1rem;
        border: 2px solid #333;
        border-radius: 5px;
        color: #333;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
            background-color: #333;
            color: #fff;
        }
    }
}
</style>
  