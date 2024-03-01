// 用来请求到服务端的页面路由数据
import request from "@/utils/request";

const getRoutes = () => {
    // 这里返回的promise对象
    return request({
        url: "/api/getRoutes",
        method: "GET",
        
    })
}

export default getRoutes;