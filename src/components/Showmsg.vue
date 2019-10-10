<template>
  <div class="container">
    <div class="page-header">
      <h1 class="con-left col-md-8">{{user.username}} <small>的个人信息</small></h1>
      <span class="pull-right col-md-4">
        <router-link :to=" '/personalDetails'" class="btn btn-primary">编辑</router-link>
        <!-- <button class="btn btn-danger" @click="delectUser(user.id)">删除</button> -->
      </span>
    </div>
    <div class="main">
      <ul>
        <li>
          <div class="msg">
            <span>昵称:</span>
          <p>{{user.nickname}}</p>
          </div>
          
        </li>
        <li>
           <div class="msg">
             <span>个性签名:</span>
          <p>{{user.style}}</p>
           </div>
          
        </li>
        <li>
           <div class="msg">
             <span>联系方式:</span>
          <p>{{user.tel}}</p>
           </div>
          
        </li>
        <li>
           <div class="msg">
             <span>年龄:</span>
          <p>{{user.age}}</p>
           </div>
          
        </li>
        <li>
           <div class="msg">
             <span>生日:</span>
          <p>{{user.birthday}}</p>
           </div>
          
        </li>
        <li>
           <div class="msg">
             <span>居住地:</span>
          <p>{{user.address}}</p>
           </div>
          
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
data() {
  return {
    user:{}
  }
},
computed: {

},
methods: {
  getid(){
    this.$axios.post('index/user',JSON.stringify({'id':this.CookieUtil.get('id')}))
    .then(res=>{
      this.user = res.data
    })
  },
//   delectUser(){
//     this.$axios.post('index/deleteuser',JSON.stringify({'id':this.CookieUtil.get('id')}))
//     .then(res=>{
//     this.$router.push({name:'vip'})
//   })
//   }
},
created() {
  this.getid()
},
}
</script>
<style scoped>
.main{
  margin: 30px auto;
  height: 400px;
  width: 500px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: aquamarine;
  box-sizing: content-box;
}
ul{
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction:column ;
}
.main ul li{
  list-style: none;
  border-bottom: 1px solid #eeeeee;
  flex: 1;
}
.pull-right{
  float: right;
  margin-top: -50px;
}
.pull-right>button{
  margin-left: 5px;
}
.msg{
  /* border: 1px solid #000; */
  padding-top: 10px;
  margin: 5px auto;
  display: flex;
}
.main p,main{
  display: inline-block;
  color: #000;
  padding: 0;
  margin: 0;
}
span{
  flex: 0 0 90px;
  font-size: 16px;
  font-weight: 600;
}
p{
  flex: 1;
  font-size: 14px;
  font-weight: 600;
}

</style>
