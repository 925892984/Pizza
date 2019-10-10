<template>
  <div class="container">
    <div class="page-header">
      <!-- <h1>
        {{basket.name}}
      </h1> -->
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <img src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=516a100c34adcbef053479049cad2e0e/ca1349540923dd54d7868ea0d409b3de9d824804.jpg" alt="披萨" class="img-rounded img-responsive center-block">
      </div>
      <div class="col-sm-12 col-md-8">
        <div class="list-group">
          <button type="button" class="list-group-item">
            <h4 class="list-group-item-heading">做法：</h4>
            <p class="list-group-item-text">
              先将秤好的面粉加上配料和匀，然后在底盆上油，铺上一层由鲜美番茄混合的风味浓郁的比萨酱料，
              再撒上柔软的乳酪，放上海鲜、意式香肠、加拿大腌肉、火腿、五香肉粒、蘑菇、青椒、菠萝等新鲜馅料，
              最后放进烤炉在260℃下烘烤5至7分钟。好了，一个美味的比萨出炉了，值得注意的是：出炉即食、风味最佳，
              千万不要等到搁置时间长了再品尝。比萨按大小一般分为三种尺寸：6寸(切成4块)、9寸(切成6块)、
              12寸(切成8块)，按厚度分为厚薄两种。
              </p>
          </button>
          <button type="button" class="list-group-item">Dapibus ac facilisis in</button>
          <button type="button" class="list-group-item">Morbi leo risus</button>
          <button type="button" class="list-group-item">Porta ac consectetur ac</button>
          <button type="button" class="list-group-item">Vestibulum at eros</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
//   data() {
//     return {
//       basket: {}
//     };
//   },
//   methods: {
//     getmsg(id) {
//       this.$axios
//         .get("menu/" + id, function() {})
//         .then(msg => {
//           this.basket = msg.data;
//         });
//     }
//   },
//   created() {
//     this.getmsg(this.$route.params.id);
//   }
};
</script>
