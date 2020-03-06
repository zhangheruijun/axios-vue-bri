<template>
    <div>6666</div>
</template>
<script>
// axios请求的主要五种方式
//get：获取数据 两个参数  例：axios.post('/post',confog),其中config：{params:{},timeout:1000,...}等
//post:提交数据(表单提交 + 文件上传);1.form-data 表单提交(表单提交，文件上传);2.application/json 用的最多的提交  3个参数
//put:更新数据(所有数据都提交到后端);1.form-data 表单提交(表单提交，文件上传);2.application/json 用的最多的提交   3个参数
//patch:更新数据(只将修改的数据推送到后端);1.form-data 表单提交(表单提交，文件上传);2.application/json 用的最多的提交  3个参数
//delete:删除数据  两个参数
export default {
    name:'',
    data(){
        return{

        }
    },
    components:{},
    created(){
        // //get请求
        // this.$axios({
        //     method:'get',
        //     url:'/data.json',
        //     params:{
        //         id:25
        //     }
        // }).then((res)=>{
        //     console.log(res.data,'dsfs')
        // });

        // //post请求
        // //post:1.form-data 表单提交(表单提交，文件上传);2.application/json 用的最多的提交
        // let data = {id:'dsjh'}
        // this.$axios.post('/post',data).then((res)=>{
        //     console.log(res.data)
        // })
        // this.$axios({
        //     method:'POST',
        //     url:'/post',
        //     data:data
        // }).then(res=>{
        //     console.log(res.data)
        // })

        // //form-data 请求
        // let formData = new FormData();
        // for(let a in data){
        //     formData.append(a,data[a])
        // }
        // this.$axios.post('/post',formData).then((res)=>{
        //     console.log(res.data)
        // })
        // //put、patch 请求;与post类似
        // this.$axios.put('/put',data).then((res)=>{
        //     console.log(res.data)
        // })
        //   this.$axios.patch('/patch',data).then((res)=>{
        //     console.log(res.data)
        // })
        
        //delete请求
        // this.$axios.delete('/delete',{
        //     params:{
        //         names:'sdfsdfds'  //参数在url路径上传参
        //     }
        // }).then((res=>{
        //     console.log(res);
        // }))

        // this.$axios.delete('/delete',{
        //     data:{
        //         names:'fd'  //参数在request的body上
        //     }
        // }).then((res=>{
        //     console.log(res);
        // }))
    }
}
</script>