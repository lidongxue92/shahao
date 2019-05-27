<template>
  <div class="Middle">
    <div class="list" v-on:click="toDetailLive(1)">
      <span class="number">1</span>
      <img src="~@/assets/img/timg.jpg">      
      <div class="right" >
        <h4>起床开箱子。</h4>
        <p>
          <span>最近直播</span> &emsp;&emsp;2019-09-28
        </p>
        <span class="see">300</span>
      </div>
    </div>   
     <div class="list" v-on:click="toDetailLive(2)">
      <span class="number">2</span>
      <img src="~@/assets/img/timg.jpg">      
      <div class="right" >
        <h4>起床开箱子。</h4>
        <p>
          <span>最近直播</span> &emsp;&emsp;2019-09-28
        </p>
        <span class="see"> 300</span>
      </div>
    </div>    
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
        this.$router.push({name: 'classificationdetail', params: {id: id}});
      }
    }
  }
</script>

<style lang="less" scoped>
  .Middle {
    width:62%;
    display: inline-block;
    padding-bottom: 30px;
    text-align: left;
    margin-left: 1%;
    .list{
      background: #fff;
      overflow: hidden;
      height: 80px;
      margin-bottom:10px;
      display: flex;
      cursor: pointer;
      .number{display: inline-block;width:8%;line-height: 80px;font-size: 20px;font-weight: 550;text-align: center;
      }
      img{width:25%}
      .right{
        display: inline-block;width:62%;margin-left: 2%;padding: 10px 0;position: relative;
        h4{font-size: 19px;}
        p{
          line-height: 30px;font-size: 14px;
          span{font-size: 16px}
        }
        .see{position: absolute;right: 20px;font-size: 18px;font-weight: 550;top: 30px;}
      }
    } 
  }
</style>
