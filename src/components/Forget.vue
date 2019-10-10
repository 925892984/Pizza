<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt class="mx-auto d-block">
          <form>
            <div v-if="bool" class="form-group">
              <label for="email" v-focus>邮箱账号</label>
              <input type="email" class="form-control" v-model="email" id="email">
            </div>
            <div v-if="!bool" class="form-group">
              <label for="code">验证码</label>
              <input type="text" class="form-control" v-model="code" id="code">
            </div>
            <button v-if="bool" type="submit" class="btn btn-block btn-success" @click.prevent="forget">发送验证码</button>
						<button v-if="!bool" type="submit" class="btn btn-block btn-success" @click.prevent="resetPassword">重置密码</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			email: '',
			code: null,
			bool: true
		}
	},
	methods:{
		forget(){
			if(this.email){
				var data = JSON.stringify({'email':this.email});
				this.CookieUtil.set('forgetEmail',this.email);
				this.$axios.post('index/forget',data)
				.then(res=>{
					var data = res.data;
					if(data.code == 200){ //数据库有这个邮箱
						this.bool = !this.bool;
						this.id = data.id;
					} else {  //账号没注册
						alert('此邮箱未注册')
					}
				})
			}	else{
				alert('请输入邮箱')
			}
		},
		
		resetPassword(){//检验验证码
		if(this.code){
			var data = JSON.stringify({'code':this.code});
			this.$axios.post('index/reset',data)
			.then(res => {
				var data = res.data;
				if(data.code == 200){//验证码正确
					this.$router.push({"name":'resetPassLink'})
				} else{
					alert('验证码错误！')
				}
			})	
		}else{
			alert('请输入验证码')
		}
			
		}
	}
}
	
</script>

<style>
</style>
