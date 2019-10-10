<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt class="mx-auto d-block">
          <form>
            <div class="form-group">
              <label for="password" v-focus>新密码</label>
              <input type="password" class="form-control" v-model="password" id="password">
            </div>
            <div class="form-group">
              <label for="conPassword">确认密码</label>
              <input type="password" class="form-control" v-model="conPassword" id="conPassword">
            </div>
						<button type="submit" class="btn btn-block btn-success" @click.prevent="home">重置密码</button>
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
			password: '',
			conPassword: '',
			id: null
		}
	},
	methods:{
		home(){
			if(!this.password){
				alert("请输入新密码")
			} else if(!this.conPassword){
				alert('请输入确认密码')
			}else{
				var data = JSON.stringify({'email':this.CookieUtil.get('forgetEmail'),'password':this.password,'conPassword':this.conPassword});
				this.CookieUtil.unset('forgetEmail');
				this.$axios.post('index/resetPassword',data)
				.then(res=>{
					var data = res.data;
					if(data.code == 200){//重置密码成功		
						this.$router.push({'name':"loginLink"})		
					} else{
						alert('重置密码失败！');
					}
				})
			}	
		}
	}
}
	
</script>

<style>
</style>
