<template>
	<form>
		<h3 class="text-muted my-5">添加新的Pizza</h3>
		<div class="form-group row">
			<label class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.name" v-focus>
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
			</div>
		</div>
		<p><strong>选项1</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size1">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price1">
			</div>
		</div>

		<p><strong>选项2</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size2">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price2">
			</div>
		</div>
		<div class="form-group row">
			<button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
		</div>
	</form>
</template>
<script>
	export default {
		data() {
			return {
				newPizza: {}
			}
		},
		methods: {
			addMenuItem() {
				if (!this.newPizza.name) {
					alert("请输入Pizza名称")
				} else if (!this.newPizza.description) {
					alert('请输入Pizza描述')
				} else {
					let data = {
						'name': this.newPizza.name,
						'description': this.newPizza.description
					}
					this.$axios.post("commodity/addMenu", JSON.stringify(data))
						.then(res => {
							var data = res.data
							if (data.code == 200) { //添加品种成功
								var id = data.id; //保存id值，添加到品种分类和获取品种和品种分类信息时用
								let msg = {
									'classify': [{
											'menu_id': data.id,
											'size': this.newPizza.size1,
											'price': this.newPizza.price1
										},
										{
											'menu_id': data.id,
											'size': this.newPizza.size2,
											'price': this.newPizza.price2
										}
									],
								}
								this.$axios.post("commodity/addClassify", JSON.stringify(msg))
									.then(res => {
										if (res.data.code == 200) { //添加品种分类成功
											//获取品种和品种分类信息，添加到vuex中
											this.$axios.post('commodity/menuMsg', JSON.stringify({
													'id': id
												}))
												.then(res => {
													let data = res.data
													if (data.code == 200) {
														this.$store.commit("pushToMenuItems",data.data)
														this.$router.push({
															name: "menuLink"
														})
													}
												})
										} else { //添加品种分类失败，需要删除添加成功的品种
											alert('添加品种分类失败，需要删除添加成功的品种');
										}
									})
							} else {
								alert('添加失败')
							}
						})
				}
			}
		}
	}
</script>
