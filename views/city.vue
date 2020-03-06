<template>
    <div>并发请求</div>
</template>
<script>
export default {
    name:'city',
    data(){
        return{}
    },
    created(){
        //------------------------------------------------axios 并发一次请求多个接口，请求顺序按照数组的顺序-----------------------------
        //axios.all()  axios.spread()
        // let that = this
        // this.$axios.all(
        //     [
        //         that.$axios.get('/data.json'),
        //         that.$axios.get('/city.json')
        //     ]
        // ).then(
        //     that.$axios.spread((dataRes,cityRes)=>{
        //         console.log(dataRes,cityRes)
        //     })
        // )
        
        //----------------------------------------------axios实例与配置---------------------------------------

        // //-------1.全局配置------
        // this.$axios.defaults.timeout = 2000;
        // this.$axios.defaults.baseURL = 'http://localhost:8080'


        // //-------2.实例配置,如果没有配置参数,那么配置的是全局配置的参数---------------
        // let instace = this.$axios.create({
        //     baseURL:'http://localhost:8080',  //请求的域名，基本的地址
        //     timeout:1000, //请求的超时时长;     401请求超时，404借口未找到
        //     url:'/data.json', //请求路径
        //     method:'get',  //请求方式
        //     headers:{  //请求头
        //         token:''
        //     },
        //     // params:{}, //请求参数拼在url上
        //     data:{},  //请求参数放在请求体上
        // })
        // //如果实例配置好的参数要再次修改参数。如：instace.defaults.baseURL='http://localhost:8080' = 2500;
        // instace.get('/zhang.json').then(res=>{
        //     console.log(res)
        // })


        // //--------3.axios请求配置-------------------
        // this.$axios.get('/data.json',{
        //     timeout:5000
        // })
        // instace.get('/data.json').then(res=>{
        //     console.log(res)
        // })
        //优先级:请求配置 > 实例配置 > 全局配置
    }
}
</script>