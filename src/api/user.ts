// 用来请求到服务端的页面路由数据
import request from "@/utils/request";

const toLogin = (username:any,password:any) => {
    return request({
        url: "/api/login",
        method: "POST",
        params:{
            username,
            password
        }
    })
}

export default toLogin