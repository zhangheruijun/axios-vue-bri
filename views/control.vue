<template>
    <div>
        <!-- 联系人列表 -->
         <van-contact-list
            :list="list"
            @add="onAdd"
            @edit="onEdit" 
        />
        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" position="bottom">
            <van-contact-edit
                :contact-info="editingContact"
                :is-edit="isEdit"
                @save="onSave"
                @delete="onDelete"
            />
        </van-popup>
    </div>
</template>
<script>
// import axios from 'axios';
import {ContactList,Toast,ContactEdit,Popup} from 'vant';
export default {
    name:'control',
    data(){
        return {
            list:[],
            instance:null, //axios的实例
            showEdit:false, //联系人编辑的显隐
            editingContact:{}, //正在编辑联系人的数据
            isEdit:false,  //  false新建，true编辑
        }
    },
    components:{
        [ContactList.name]:ContactList,
        [ContactEdit.name]:ContactEdit,
        [Popup.name]:Popup,
    },
    created(){
        // this.instance = axios.create({
        //     baseURL:'http://localhost:9000/api',
        //     timeout:1000
        // });
        this.getList()
    },
    methods:{
        async getList(){
            let res = await this.$Http.getContactList();
            this.list = res.data
            // this.instance.get('/contactList').then(res=>{
            // this.list = res.data.data
            // }).catch(err=>{
            //     Toast('请求失败')
            //     console.log(err);
            // })
        },
        //添加联系人
        onAdd(){
            this.showEdit = true;  //显示弹框
            this.isEdit = false  //添加联系人模式
        },
        //编辑联系人
        onEdit(item){
            this.showEdit = true; //显示弹框
            this.isEdit = true; //编辑联系人模式
            this.editingContact = item
        },
        //保存联系人
        async onSave(info){
            if(this.isEdit){
                //编辑联系人保存
                let res = await this.$Http.editContac(info)
                     if(res.code===200){
                        Toast('编辑成功');
                        this.showEdit = false;
                        this.getList()
                    }
                // this.instance.put('/contact/edit',info).then(res=>{
                //     if(res.data.code===200){
                //         Toast('编辑成功');
                //         this.showEdit = false;
                //         this.getList()
                //     }
                // }).catch(()=>{
                //     Toast('编辑失败')
                // })
            }else{
                //新建联系人保存
                let res = await this.$Http.newContactJson(info);  //isFormData默认为false，可以不写
                console.log(info)
                if(res.code===200){
                        Toast('新建成功');
                        this.showEdit = false;
                        this.getList()
                 }
                // this.instance.post('/contact/new/json',info).then(res=>{
                //     if(res.data.code===200){
                //         Toast('新建成功');
                //         this.showEdit = false;
                //         this.getList()
                //     }
                // }).catch(err=>{
                //     console.log(err)
                //     Toast('新建失败')
                // })
            }
        },
        //删除联系人 
        async onDelete(info){
           let res = await this.$Http.delContact(
                {
                   id:info.id
                }
            )
            if(res.code==200){
                Toast('删除成功');
                this.showEdit = false;
                this.getList()
            }
            // this.instance.delete('/contact',{
            //     params:{
            //         id:info.id
            //     }
            // }).then(res=>{
            //     if(res.data.code==200){
            //         Toast('删除成功');
            //         this.showEdit = false;
            //         this.getList()
            //     }
            // }).catch(()=>{
            //     Toast('删除失败')
            // })
        },
    }
}
</script>