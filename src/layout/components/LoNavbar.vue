<template>
    <div class="navbar">
        <div class="left">
            <Hamberger @emit-menu-alter="handleMenuAlter"/>
            <!-- <Breadcrumb /> -->
        </div>
        <div class="right">
            <Screenfull />
            <HeaderAvatar />
        </div>
    </div>
</template>

<script setup lang="ts">
import Screenfull from '@/components/Screenfull/index.vue';
import HeaderAvatar from "@/components/HeaderAvatar/index.vue"
import Hamberger from "@/components/Hamburger/index.vue"
import useThemeStore from '@/store/theme';



const handleMenuAlter = () => {
    useThemeStore().changeIsCollapsed()
}

</script>

<style lang="less" scoped>
.navbar {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    // background-color: hwb(0 95% 5%);

    .left {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .right {
        display: flex;
        align-items: center;
        height: 100%;
    }
}
</style>