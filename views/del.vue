<template>
    <div></div>
</template>
<script>
import axios from 'axios';
export default {
    name:'del',
    data(){
        return {}
    },
    created(){
        //实际开发过程中，一般添加统一的错误机制
        let instance = axios.create({});
        instance.interceptors.request.use(
            config=>{
                return config
            },err=>{
                $('model').show()
                //请求错误;一般以http状态码以4开头;401请求超时；404 not found (没有找到接口)
                return Promise.reject(err)
            }
        )
        instance.interceptors.response.use(
            res=>{
                return res
            },err=>{
                 $('model').show()
                //响应错误;一般以http状态码以5开头;500系统错误；502系统重启
                return Promise.reject(err)
            }
        )
        //请求拦截器与响应拦截器的错误处理机制都会进入到catch()
        instance.get('/data.json').then().catch((res)=>{
            //请求拦截器与响应拦截器的错误处理机制都会进入这里
        })
        //catch()不做特殊处理可以不写


        //取消请求(了解)
         let source = axios.CancelToken.source();
         let ins = axios.create({})
         ins.get('/data.json',{
             cancelToken:source.token
         }).then(config=>{
             console.log(res)
         }).catch(err=>{
             console.log()  //err:'取消请求sss'
         })
         //取消请求
         source.cancel('取消请求sss')

    }
}
</script>