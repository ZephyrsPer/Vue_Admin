// 通用路由，登录后就发送了
const routes = [
    {
        path: '/',
        component: "layout",
        children: [
            {
                path: "dashboard",
                name: "控制面板",
                component: "dashboard",
                meta: {
                    title: "控制面板"
                }
            },
            {
                path: "user_control",
                name: "用户控制",
                component: "UserControl",
                meta: {
                    title: "用户控制"
                }
            },
            {
                path: "markdown",
                name: "MarkDown",
                component: "MarkDown",
                meta: {
                    title: "MarkDown"
                }
            },
            {
                path: "charts_bar",
                name: "bar",
                component: "bar",
                meta: {
                    title: "bar"
                }
            },
            {
                path: "charts_line",
                name: "line",
                component: "line",
                meta: {
                    title: "line"
                }
            },

        ]
    },
]

const adminRoutes = [
    // 遍历每一级，递归完成进行下一个
    {
        path: '/',
        component: "layout",
        children: [
            {
                path: 'power_admin',
                name: "管理员权限",
                component: "Admin",
                meta: {
                    title: "管理员权限"
                }
            },
        ]
    },
    ...routes
]

const vistorRoutes = [
    {
        path: '/',
        component: "layout",
        children: [
            {
                path: 'power_vistor',
                name: "游客权限",
                component: "Vistor",
                meta: {
                    title: "游客权限"
                }
            },
        ]
    },
    ...routes
]




export default [
    {
        url: '/api/getRoutes',
        method: 'get',
        response: (req) => {
            // 从请求对象中获取请求头信息
            const headers = req.headers;
            // console.log(req.headers);
            const token = headers['authorization']
            // console.log(token);
            if (token) {
                if (token == 'admin-token') {
                    return {
                        code: 200,
                        routes: adminRoutes
                    };
                } else if (token == 'vistor-token') {
                    return {
                        code: 200,
                        routes: vistorRoutes
                    };
                }
            } else {
                return {
                    code: 401,
                    msg: "没有权限"
                }
            }
        }
    }
];
