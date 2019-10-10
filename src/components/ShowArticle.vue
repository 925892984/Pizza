<template>
  <div class="container row">
    <div class="main col-mx-12 col-md-8">
      <h2>{{article.title}}</h2>
      <p>作者:{{article.write}}</p>
      <article>{{article.content}}</article>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      article:{}
    }
  },
  methods: {
    getmsg(id){
      this.$axios.post('leavemessage/getmsg',JSON.stringify({'id':id}))
      .then((res)=>{
        this.article = res.data
      })
    }
  },
  created() {
    this.getmsg(this.$route.params.id)
  },
}
</script>
<style scoped>
.main{
  margin: 100px auto;
  position: relative;
}
.main>h2{
  text-align: center;
}
.main>p{
  text-align: right;
  right: 100px;
  margin-right: 50px;
}
article{
  position: absolute;
}
</style>
