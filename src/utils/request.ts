import axios from 'axios';


// 创建axios实例
const instance = axios.create({
    // 设置基础URL
    // 如果是Electron环境，则使用/api作为基础URL，否则使用Vite环境的渲染服务地址
    // baseURL: process.env.NODE_ENV === 'production' ? '/api' : import.meta.env.VITE_RENDERER_VITE_SERVER_URL,
    // 设置请求超时时间
    timeout: 15000,
    // 是否携带跨域请求中的凭据
    withCredentials: true
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            // 如果存在 token，则将 token 添加到请求头中
            config.headers['authorization'] = token;
        }
        return config;
    },
    (error) => {
        console.error("请求失败，请稍后重试");
        return Promise.reject(error);
    },
);


// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // 从错误对象中获取响应信息
        const response = error.response;
        // 断网处理
        // if (!response) $canNotConnect(error);
        // 状态码处理
        switch (response?.status) {
            case 400:
                console.error("客户端错误：", response.status, response.statusText);
                // 执行客户端错误的处理逻辑
                break;
            case 401:
                console.error("未授权：", response.status, response.statusText);
                // 执行未授权的处理逻辑
                break;
            case 403:
                console.error("禁止访问：", response.status, response.statusText);
                // 执行禁止访问的处理逻辑
                break;
            case 404:
                console.error("未找到资源：", response.status, response.statusText);
                // 执行未找到资源的处理逻辑
                break;
            case 500:
                console.error("服务器错误：", response.status, response.statusText);
                // 执行服务器错误的处理逻辑
                break;
            default:
                // 处理其他状态码或错误条件
                console.error("未处理的错误：", error.message);
        }
        // 继续传递错误
        return Promise.reject(error);
    },
);

export default instance;
