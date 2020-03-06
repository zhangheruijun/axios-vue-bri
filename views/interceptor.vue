<template>
    <div></div>
</template>
<script>
import axios from 'axios';
export default {
    name:'interceptor',
    data(){
        return {}
    },
     //拦截器：在请求或者响应被处理前拦截他们。有两种：1.请求拦截器；2.响应拦截器
    created(){
       //请求拦截器
        axios.interceptors.request.use(
            config=>{
                //在请求前做些什么
                return config
            },err=>{
                //在请求错误的什么做些什么
                return Promise.reject(err)
            }
        );

        //响应拦截器
        axios.interceptors.response.use(
            res=>{
                //请求成功对响应数据做处理
                return res
            },err=>{
                //响应错误做什么处理
                return Promise.reject(err)
            }
        )
        //失败进入catch();如:axios.get().then().catch(err=>{})

        //取消拦截器(了解)
        let interceptor = axios.interceptors.request.use(
            config=>{
                config.headers={
                    auth:true
                }
                return config
            }
        )
        axios.interceptors.request.eject(interceptor)  //实际开发中是给实例添加拦截器

    //例子:登录状态（token:''）需要登录的接口
    let instance = axios.create({});
    instance.interceptors.request.use(
        config=>{
            config.headers.token = '';  //一般不用对象包裹token,因为还有其它参数
            return config
        }
    )
    //不需要登录的接口
    let newInstance = axios.create();
    //移动端开发
    let instance_phone = axios.create({});
    instance_phone.interceptors.request.use(
        config=>{
            $('model').show();
            return config
        }
    )
    instance_phone.interceptors.response.use(
        res=>{
            $('model').hide();
            return res
        }
    )
  }
}
</script>