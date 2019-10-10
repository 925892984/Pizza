<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a href="/" class="navbar-brand">Pizza点餐系统</a>
			<ul class="navbar-nav">
				<li>
					<router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>
				</li>
				<li>
					<router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link>
				</li>
				<li>
					<router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link>
				</li>
				<li>
					<router-link :to="{name:'vip'}" class="nav-link">会员</router-link>
				</li>
				<li>
					<router-link :to="{name:'leaverMessage'}" class="nav-link">留言墙</router-link>
				</li>
				<li>
					<router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link>
				</li>
			</ul>
			<ul class="navbar-nav ml-auto">
				<li>
					<router-link :to="{name:'loginLink'}" class="nav-link" v-if="!isLogin">登陆</router-link>
				</li>
				<router-link :to="'/personalDetails'" class="nav-link" v-if="isLogin">
					欢迎您
					<span>{{user.email}}</span>
				</router-link>
				<li>
					<div class="nav-link" v-if="isLogin" @click.prevent="loginOut">[退出]</div>
				</li>
				<li>
					<router-link :to="{name:'registerLink'}" class="nav-link" v-if="!isLogin">注册</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		computed: {
			//vuex中获取登陆用户信息
			user() {
				return this.$store.getters.user;
			},
			isLogin() {
				return this.$store.getters.isLogin;
			}
		},
		methods: {
			loginOut() {
				this.CookieUtil.unset('id', "/", "localhost")
				this.CookieUtil.unset('email', "/", "localhost")
				this.CookieUtil.unset('username', "/", "localhost")
				this.$store.state.isLogin = false;
				this.$router.push({
					name: 'loginLink'
				})
			}
		},
		//刷新页面
		beforeDestroy() {
			// window.localStorage.removeItem('reloaded');
		}
	}
</script>
