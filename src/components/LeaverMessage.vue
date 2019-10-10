<template>
  <div class="main container">
    <div class="list-group">
      <span class="list-group-item active">
        <h4 class="list-group-item-heading">欢迎来到留言墙</h4>
        <p class="list-group-item-text">在这里你可以写下你的小秘密，也可以偷看别人的秘密额~~</p>
      </span>
    </div>
    <div class="nav">
      <form>
        <label>搜索:</label>
        <input type="text" v-model="keywords" v-focus>
      </form>
      <router-link :to="{name:'write'}">
        <button class="btn btn-info">写留言墙</button>
      </router-link>
    </div>

    <div class="content">
      <!-- <div class="speak" v-for="(item,index) in search(keywords)" :key="index"> -->
        <div class="speak" v-for="(item,index) in nav" :key="index">
          <router-link :to="'/showArticle/' + item.id" tag="div" class="article">
            <h2 v-rainbow>{{item.title}}</h2>
            <h4>{{item.content}}</h4>
            <p>--{{item.write}}</p>
          </router-link>
        </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leaveMessage: [],
      keywords: ""
    };
  },
  methods: {
    // getLeaveMessage(){
    //   return this.$store.getters.getLeaveMessage;
    // },
    getmsg() {
      this.$axios.get("leavemessage/getmsglist").then(res => {
        this.leaveMessage = res.data;
        // this.$store.dispatch("setLeaveMessage",res.data)
      });
    }
    //搜索功能实现
    // search(keywords){
    //   let newList = []
    //   this.leaveMessage.forEach(element => {
    //     if(element.author.indexOf(keywords) != -1){
    //       newList.push(element)
    //     }
    //   });
    //   return newList
    // }
  },
  computed: {
    //搜索功能实现
    nav() {
      return this.leaveMessage.filter(item => {
        return item.content.match(this.keywords)
				 // ||
//         item.title.match(this.keywords) || 
//         item.write.match(this.keywords);
      });
    }
  },
  created() {
    this.getmsg();
  },
  //注册局部指令v-rainbow
  directives: {
    rainbow: {   //彩虹文字
      bind: function(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .main {
  max-width: 800px;
  margin: 0 auto;
} */
.nav {
  display: flex;
  margin-top: 20px;
}
.nav > form {
  flex: 1;
}
nav > button {
  flex: 0 0 50px;
}
label {
  font-size: 30px;
}
.nav > form > input {
  width: 500px;
  padding: 10px;
  margin-left: 5px;
}
.content {
  width: 100%;
}
.main .content .speak {
  position: relative;
  width: 1000px;
  height: 130px;
  border: 1px solid #aaa;
  margin: 20px auto;
  overflow: hidden;
}
.article{
   position: relative;
   height: 100%;
   width: 100%;
}
.article > h2 {
  text-align: center;
}
.article > h4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-indent: 2em;
}
.article > p {
  position: absolute;
  right: 50px;
}
</style>
