<template>
  <div class="container">
    <form class="col-xs-12 form-horizontal">
      <div class="form-group">
        <label>姓名:</label>
        <input type="text" class="form-control" v-model="user_personl.username" v-focus>
      </div>
      <div class="form-group">
        <label>昵称：</label>
        <input type="text" class="form-control" v-model="user_personl.nickname">
      </div>
      <div class="form-group">
        <label>个性签名:</label>
        <input type="text" class="form-control" v-model="user_personl.style">
      </div>
      <div class="form-group">
        <label>联系方式：</label>
        <input type="text" class="form-control" v-model="user_personl.tel">
      </div>
      <div class="form-group">
        <label>年龄：</label>
        <input type="text" class="form-control" v-model="user_personl.age">
      </div>
      <div class="form-group">
        <label>生日：</label>
        <input type="text" class="form-control" v-model="user_personl.birthday">
      </div>
      <div class="form-group">
        <label>所在地：</label>
        <input type="text" class="form-control" v-model="user_personl.address">
      </div>
      <button class="btn btn-primary" @click.prevent="updataCustomer()">提交</button>
    </form>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      user_personl:{}
    }
  },
  methods: {
    showmsg(){
        this.$axios.post('index/user',JSON.stringify({'id':this.CookieUtil.get('id')}))
        .then(res => {
          this.user_personl = res;
        })
    },
    updataCustomer(){
      if(!this.user_personl.username || !this.user_personl.nickname || !this.user_personl.tel){
        alert("请添加相关信息！")
      }else{
        const newmsg = {
					id: this.CookieUtil.get('id'),
          username: this.user_personl.username,
          nickname: this.user_personl.nickname,
          email:this.user_personl.email,
          tel:  this.user_personl.tel,
          age:this.user_personl.age,
          birthday:this.user_personl.birthday,
          address: this.user_personl.address,
          password:this.user_personl.password,
          conPassword:this.user_personl.conPassword,
          style:this.user_personl.style
         }     
        this.$axios.post('index/updataUser',JSON.stringify(newmsg))
          .then(res=>{
						if(res.data.code == 200){//修改个人信息成功
							this.$router.push({name:"homeLink"})
						}else{
							alert('修改信息失败')
						}
            
          })
      }
    }
  },
  created() {
     this.showmsg()
  },
}
</script>
<style scoped>

</style>
