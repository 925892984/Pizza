<template>
<div class="container">
	<div class="main">
		<div class="item">
			<h2>主题:</h2>
			<textarea name="" id="item" cols="100%" rows="1" v-model="title" v-focus></textarea>
    </div>
		<div class="content">
			<h2>内容:</h2>
			<textarea name="" id="content" cols="100%" rows="6" v-model="content"></textarea>
		</div>
    <div class="write">
      <label>作者：</label>
      <input type="text" v-model="write">
    </div>
		<button class="btn btn-primary btn-lg" @click.prevent="postLeaveMessage">发表</button>
	</div>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      title:'',
      content:'',
      write:''      
    }
  },
  methods: {
    postLeaveMessage(){
      if(!this.title || !this.content){
        alert("请输入内容！")
      }else{
        let newList = {
        title:this.title,
        content:this.content,
        write:this.write
      }
      this.$axios.post('leavemessage/addmsg',JSON.stringify(newList))
      .then((res)=>{
        this.$router.push({name:"leaverMessage"})
      })
      }   
    }
  },
}
</script>
<style scoped>
*{
	margin: 0;
	padding: 0;
}
.main{
	width:1000px;	
	margin: 10px auto;
}
.main .item{
	width: 100%;
	margin:10px auto;
}
.main .content{
	width: 100%;
	margin: 30px auto;
}
.main textarea{
	font-size: 20px;
	font-family: "微软雅黑";
	font-weight: 400;
	text-indent: 2em;
	line-height: 2em;
}
button{
  width: 100px;
  text-align: center;
}
</style>
