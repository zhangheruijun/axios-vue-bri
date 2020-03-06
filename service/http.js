import axios from 'axios';
import service from './contactApi';
import {Toast} from 'vant';

//service循环遍历出不同的请求方法
let instance = axios.create({
    baseURL:'http://localhost:9000/api',
    timeout:1000
})
const Http = {};  //包裹请求方法的容器  {getContactList:instance[api.method](api.url,newParams,config)}
//请求参数格式的统一
for(let key in service){
    let api = service[key];  //url与method; {methos:'',url:''}
    Http[key] = async function(
        params,  //请求参数
        isFormData=false,  //标识是否form-data请求
        config={}  //配置参数
        ){
            let newParams = {};
            //content-type是否为form-data的判断
            if(params&&isFormData){
                newParams = new FormData();
                for(let i in params){
                    newParams.append(i,params[i])
                }
            }else{
                newParams = params
            }
            //不同请求的判断
            let response = {}; //请求的返回值
            if(api.method==='post'||api.method==='put'||api.method==='patch'){
                try{
                    response = await instance[api.method](api.url,newParams,config)
                }catch(err){
                    response = err
                }
            }else if(api.method==='delete'||api.method==='get'){
                config.params = newParams;  //参数放在url上
                try{
                    response = await instance[api.method](api.url,config)
                }catch(err){
                    response = err
                } 
            }
            return response  //返回请求返回值
        }
}

//--------------------拦截器的添加----------------
//请求拦截器
instance.interceptors.request.use(config=>{
    //请求前做些什么
    Toast.loading({
        mask:false, //是否有阴影
        duration:0, //一直存在
        forbidClick:true, //禁止点击
        message:'加载中...'
    })
    return config
},()=>{
    //请求错误
    Toast.clear();
    Toast('请求错误,请稍后重试')
})
//响应拦截器
instance.interceptors.response.use(res=>{
    //请求成功做些什么
    Toast.clear();
    return res.data
},()=>{
    //请求失败做些什么
    Toast.clear();
    Toast('请求错误,请稍后重试')
})

export default Http