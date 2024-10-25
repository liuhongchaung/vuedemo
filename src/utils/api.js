import axios from 'axios';
import { ElMessage } from 'element-plus'
import router from '../router'

//请求拦截器
axios.interceptors.request.use(config =>{
    //如果存在token,请求携带token
    if (window.localStorage.getItem('token')) {
        config.headers['token'] = window.localStorage.getItem('token');
    }
    return config;
},error => {
    console.log(error)
});

//响应拦截器
axios.interceptors.response.use(success =>{
    if (success.status && success.status ==200){
        //业务逻辑错误
        if (success.data.code === '500'){
            ElMessage.error(success.data.message);
            return;
        }else if (success.data.code === '401'){
            ElMessage.error(success.data.message);
            router.replace('/login');
            return;

        } else {
            if (success.data.message){
                ElMessage.success(success.data.message);
            }
            return success.data;
        }
    }
},error =>{
    if (error.status == 404 || error.status == 403 || error.status == 504 || error.status == 500){
        ElMessage.error('服务器异常，服务被吃了，嘎嘎嘎！！！');
    }
    return;
});

let base = '/api';

//post请求
export const post = (url,params)=>{
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
};

//get请求
export const get = (url,params)=>{
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
};
