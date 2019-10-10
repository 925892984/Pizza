<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email" v-focus>邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="password">确认密码</label>
              <input type="password" class="form-control" v-model="conPassword">
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      conPassword: "",  
    };
  },
  methods: {
    onSubmit() {
		//提交数据到后台
			if(!this.email){
				alert('邮箱不能为空')
			} else if(!this.password){
				alert('密码不能未空')
			} else if(!this.conPassword) {
				alert('确认密码不能为空')
			} else {
				let msg = {"email":this.email,"password":this.password,"conPassword":this.conPassword}
				var data = JSON.stringify(msg)
				this.$axios.post('index/register',data)
				.then(res=>{
					var data = res.data
					if(data.code == 200){//注册成功
						this.$router.push({name:'loginLink'})
					}else{
						alert("注册失败")
					}
				})
			}

    }
  }
};
</script>