<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img src="../assets/icon.png" alt class="mx-auto d-block">
					<form>
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" class="form-control" v-model="email" id="email" v-focus>
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" class="form-control" v-model="password" id="password">
						</div>
						<button type="submit" class="btn btn-block btn-success" @click.prevent="onSubmit">登陆</button>
						<button class="form-group btn btn-block btn-info" @click.prevent="forget">忘记密码？</button>
						<button class="form-group btn btn-block btn-info" @click.prevent="register">没有账号？</button>
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
				password: ""
			};
		},
		//   beforeRouteEnter (to, from, next) {
		//     next(vm=>{
		//       vm.$store.dispatch("setUser",null)
		//     })
		//   },
		methods: {
			onSubmit() {
				if (!this.email) {
					alert('邮箱不能为空')
				} else if (!this.password) {
					alert('密码不能未空')
				} else {
					var data = JSON.stringify({
						"email": this.email,
						"password": this.password
					})
					this.$axios.post('index/login', data)
						.then(res => {
							var data = res.data;
							if (data.code == 200) { //登陆成功
								this.CookieUtil.set('id', data.data.id, new Date(new Date().valueOf() + 1 * 24 * 60 * 60 * 1000), "/",
									"localhost") //在cookie中保存登陆状态
								this.CookieUtil.set('email', data.data.email, new Date(new Date().valueOf() + 1 * 24 * 60 * 60 * 1000), "/",
									"localhost")
								this.CookieUtil.set('username', data.data.username, new Date(new Date().valueOf() + 1 * 24 * 60 * 60 * 1000),
									"/", "localhost")
								this.$store.dispatch("setUser", data.data)
								this.$router.push('{name:"homeLink"}'); //跳转到首页
							} else { //登录失败
								alert('账号或密码错误！')
							}
						})
				}
			},
			forget() {
				this.$router.push({
					name: 'forgetLink'
				}) //跳转到忘记密码页
			},
			register() {
				this.$router.push({
					name: "registerLink"
				}); //跳转到注册账号页面
			}
		}
	};
</script>
<style scoped>

</style>
