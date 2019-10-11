<template>
<div class="container row" id="Vip">
<nav>
  <form class="form-group">
    <label for="email">邮箱:</label>
    <input type="text" placeholder="search" v-model="search" id="email" class="form-control">
  </form>
  <router-link :to="{name:'registerLink'}" class="router">
    <button class="btn btn-primary">添加</button>
  </router-link>
    
</nav>
  <table class="table table-striped table-hover col-mx-12">
    <thead>
      <tr>
        <th>姓名:</th>
        <th>邮箱:</th>
        <th>生日:</th>
        <th>联系方式:</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in searchUser" :key="item.id">
        <td>{{item.username}}</td>
        <td>{{item.email}}</td>
        <td>{{item.birthday}}</td>
        <td>{{item.tel}}</td>
        <td>
          <router-link :to=" '/pizza/showMsg' ">
          <button class="btn btn-info">详情</button>
          </router-link>   
        </td>        
      </tr>
    </tbody>
  </table>
</div>

</template>
<script>
export default {
  data() {
    return {
      search:'',
      users:[]
    }
  },
  methods: {
    getmsg(){
    this.$axios.get('index/users')
      .then(res=>{
        this.users = res.data
      })
    },
//     nav(search) {
//       var newList = [];
//       this.users.forEach(item => {
//         // console.log(item.name)
//         if (item.title.indexOf(search) != -1) {
//           newList.push(item);
//         }
//       });
//       return newList;
//     }
  },
  computed: {
    searchUser(){
      return this.users.filter(user=>{
        return user.email.match(this.search)
      })
    }
  },
  created() {
    this.getmsg()
  },
  
  
}
</script>
<style scoped>
#Vip{
  padding-top: 40px;
}
nav{
  width: 100%;
}
nav>form{
  float: left;
}
.router{
  float: right;
  margin-right: 105px;
  margin-bottom: 20px;
}
</style>
