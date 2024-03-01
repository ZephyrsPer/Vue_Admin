

const adminInfo = {
    info: "管理员账户信息"
}

const vistorInfo = {
    info: "游客账户信息"
}

export default [
    {
        url: '/api/login',
        method: 'post',
        response: (req) => {
            const { username, password } = req.query
            if (username == 'admin') {
                return {
                    code: 200,
                    info: {
                        token: "admin-token",
                        adminInfo
                    }
                }
            } else if (username == 'vistor') {
                return {
                    code: 200,
                    info: {
                        token: "vistor-token",
                        vistorInfo
                    }
                }
            } else {
                return {
                    code: 401,
                    msg: "密码错误，请检查您的用户名和密码"
                }
            }

        }
    }
];