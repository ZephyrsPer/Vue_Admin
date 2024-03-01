import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import router from "./router";
// import toAddRoutes from "@/utils/getRoutes"
import useUserStore from "./store/user";


NProgress.configure({
    showSpinner: false
})
// 无需重定向
const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, _, next) => {
    NProgress.start()
    // 从 localStorage 中读取 token
    const token = localStorage.getItem('token');
    // 验证token是否过期
    if (token == 'admin-token' || token == 'vistor-token') {
        const hasRoutes = useUserStore().gethasRoutes
        if (hasRoutes) {
            next()
        } else {
            try {
                await useUserStore().toAddRoutes()
                const routes = useUserStore().getAccessedRoutes
                routes.forEach(route => {
                    router.addRoute(route);
                });
                next({ ...to,replace:true });
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})