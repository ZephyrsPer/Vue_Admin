// 把请求到的数据封装成router数组
import router from "@/router";
import getRoutes from "@/api/getRoutes"
// 每次构成一个{},就放入router

const modules = import.meta.glob("../pages/**/**.vue");


// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRoutes(asyncRouterMap: any[]) {
    return asyncRouterMap.filter(route => {
        if (route.component) {
            // Layout组件特殊处理
            if (route.component === 'layout') {
                route.component = () => import(`@/layout/index.vue`)
            } else {
                route.component = modules[`../pages/${route.component}/index.vue`]
            }
            if (route.children && route.children.length) {
                route.children = filterAsyncRoutes(route.children)
            }
            return true
        }
    })
}

const toAddRoutes = async () => {
    try {
        const res = await getRoutes();
        // console.log(res);                  
        const routes = res.data.routes;
        // console.log(routes);

        const accessedRoutes = filterAsyncRoutes(routes);
        // console.log(accessedRoutes);
        localStorage.setItem('routes', accessedRoutes);

        for (const route of accessedRoutes) {
            // console.log(route);
            router.addRoute(route);
            // console.log(router.options.routes);
        }
        // 打印已添加的路由

    } catch (err) {
        console.error('请求出错：', err);
    }
}

export default toAddRoutes;
