<template>
  <div class="Right">
    <h5>分类</h5>
    <a href="javascript:" style="font-size: 0.8rem;">jinle</a>
    <a href="javascript:" style="font-size: 1.1rem;">sha</a>
    <a href="javascript:" style="font-size: 1rem;">这个i变废为宝 </a>
    <a href="javascript:" style="font-size: 1.3rem;">上啥课还是</a>
    <a href="javascript:" style="font-size: 1rem;">撒娇砍杀看</a>
    <a href="javascript:" style="font-size: 1.1rem;">啊大姐扫大街</a>
    <a href="javascript:" style="font-size: 1rem;">啊我块钱我回去我</a>
    <a href="javascript:" style="font-size: 1.5rem;">飒飒</a>
    <a href="javascript:" style="font-size: 1rem;">啊飒飒</a>
    <a href="javascript:" style="font-size: 0.5rem;">啊倒萨打算</a>
    <a href="javascript:" style="font-size: 1rem;">受到收到</a>
    <a href="javascript:" style="font-size: 1.6rem;">sdsds</a>
    <a href="javascript:" style="font-size: 1rem;">sdsdss</a>
    <a href="javascript:" style="font-size: 1.1rem;">阿德撒旦</a>

  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        list: []
      }
    },
    computed: {
      catalogName() {
          return this.$store.state.app.indexCatalogName;
      }
    },
    mounted() {
      this.getLiveList();
    },
    methods: {
      getLiveList() {
        this.$http.get(API.getLiveList).then(
          (res) => {
            console.log(res.data);
            this.list = res.data;
          }
        )
      },
      toDetailLive(id) {
        this.$router.push({name: 'live', params: {id: id}});
      }
    }
  }
</script>

<style lang="less" scoped>
  .Right {
    width:15%;
    text-align: center;
    padding-bottom: 30px;
    display: inline-block;
    vertical-align: top;
    margin-left: 1%;
    h5{margin-bottom: 10px;text-align: left;font-size: 14px}
    a{color: #777;margin-right: 5px;}  
  }
</style>
