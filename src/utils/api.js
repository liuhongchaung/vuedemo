import axios from 'axios';
import { ElMessage } from 'element-plus'
import router from '../router'

//系统拦截器
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
            ElMessage.success(success.data.message);
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
}
