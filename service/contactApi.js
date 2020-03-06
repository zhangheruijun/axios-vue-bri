const CONTACT_API = {
    //获取联系人
    getContactList:{
        method:'get',
        url:'/contactList'
    },
    //新建联系人: form-data
    newContactForm:{
        method:'post',
        url:'contact/new/form'
    },
    //新建联系人: applicatios/json
    newContactJson:{
        method:'post',
        url:'/contact/new/json'
    },
    //编辑联系人
    editContac:{
        method:'put',
        url:'/contact/edit'
    },
    //编辑联系人
    delContact:{
        method:'delete',
        url:'/contact'
    },
}
export default CONTACT_API