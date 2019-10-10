<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from "./NewPizza.vue";
export default {
  data() {
    return {
      // getMenuItems:[]
    };
  },
  components: {
    "app-new-pizza": NewPizza
  },
  computed: {
    getMenuItems: {
      // 在vuex中获取数据
      get() {
        // return this.$store.state.menuItems  
        // 通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      set() {}
    }
  },
  created() {
    this.$axios.get("commodity/menu")
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.$store.commit("setMenuItems", data)
      });
  },
  methods: {
    deleteData(item) {  //使用post让后台删除数据，不用delete
        this.$axios.post("commodity/deleteMenu",JSON.stringify({'id':item.id}))
        .then(res => {
					if(res.data.code == 200){//删除成功
						this.$router.push({name:"menuLink"})
						this.$store.commit("removeMenuItems", item);
					}
				})
        .catch(err => console.log(err));
    }
  }
};
</script>


