import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import getRoutes from "@/api/getRoutes";

import toLogin from "@/api/user"

import { toRaw } from "vue";

const modules = import.meta.glob("../pages/**/**.vue");

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRoutes(asyncRouterMap: any[]): RouteRecordRaw[] {
    return asyncRouterMap.filter(route => {
        if (route.component) {
            // Layout组件特殊处理
            if (route.component === 'layout') {
                route.component = () => import(`@/layout/index.vue`);
            } else {
                route.component = modules[`../pages/${route.component}/index.vue`];
            }
            if (route.children && route.children.length) {
                route.children = filterAsyncRoutes(route.children);
            }
            return true;
        }
        return false;
    });
}

const useUserStore = defineStore({
    id: "user",
    state: () => {
        return {
            accessedRoutes: [] as RouteRecordRaw[],
            hasRoutes: false,
            token: localStorage.getItem('token') || null
        };
    },
    getters: {
        // 显式指定返回类型为 RouteRecordRaw[]
        getAccessedRoutes(): RouteRecordRaw[] {
            // 访问正确的属性名
            return toRaw(this.accessedRoutes)
        },
        gethasRoutes(): boolean {
            return this.hasRoutes
        }
    },
    actions: {
        async toAddRoutes() {
            try {
                const res = await getRoutes();
                const routes = res.data.routes;

                const accessedRoutes = filterAsyncRoutes(routes);
                this.accessedRoutes = accessedRoutes;
                this.hasRoutes = true
            } catch (err) {
                console.error('请求出错：', err);
            }
        },
        // 清除 token，并从 Local Storage 中移除
        clearToken(): void {
            this.token = null;
            localStorage.removeItem('token');
        },
        async login(username: any, password: any) {
            const res = await toLogin(username, password)
            const data = res.data
            if (data.code == 200) {
                const info = data.info
                localStorage.setItem('token', info.token);
                this.token = info.token
            }
        }
    },
    persist:{
        key:"USER",
        storage: localStorage,
        paths: ["token"]
    }
});

export default useUserStore;
