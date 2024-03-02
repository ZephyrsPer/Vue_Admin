

// 模拟路由表数据


// 通用路由，登录后就发送了
const routes = [
    {
        path: '/',
        component: "layout",
        children: [
            {
                path: "dashboard",
                component: "dashboard",
            },
            {
                path: "user_control",
                component: "UserControl",
            }
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
                component: "Admin",
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
                component: "Vistor",
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
