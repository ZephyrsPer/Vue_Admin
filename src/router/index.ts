import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 这里的路由不需要登录都可以访问
export const constantRoutes: RouteRecordRaw[] = [
    {
        path:"/",
        redirect:"dashboard"
    },
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/:catchAll(.*)', // 捕获所有未匹配的路由
        component: () => import('@/pages/NotFound.vue') // 显示404页面
    }
    // 可以继续添加其他常规路由
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
});

export default router;
