<template>
  <div class="Middle">
    <div class="main">
      <div class="list"><span class="icon"><img src="~@/assets/img/icon/date.png"></span><span>2019-05-08</span></div>
      <div class="list mt20">
        <span class="icon change"><b></b></span>
        <div class="right">
          <img class="Bubble" src="~@/assets/img/icon/Bubble.png">
          <h5>banban游戏更新再do</h5>
          <p>
            <img  src="~@/assets/img/icon/calendar.png">&ensp;2019-05-08 
            <span>
              <img src="~@/assets/img/icon/hot.png">
              <img src="~@/assets/img/icon/hot.png">
              <img src="~@/assets/img/icon/hot.png">
            </span> &ensp;
            <span><img src="~@/assets/img/icon/game.png">&ensp;未分类</span>
          </p>
        </div>        
      </div> 
      <div class="list mt20">
        <span class="icon change"><b></b></span>
        <div class="right">
          <img class="Bubble" src="~@/assets/img/icon/Bubble.png">
          <h5>banban游戏更新再do</h5>
          <p>
            <img  src="~@/assets/img/icon/calendar.png">&ensp;2019-05-08 
            <span>
              <img src="~@/assets/img/icon/hot.png">
              <img src="~@/assets/img/icon/hot.png">
              <img src="~@/assets/img/icon/hot.png">
            </span> &ensp;
            <span><img src="~@/assets/img/icon/game.png">&ensp;未分类</span>
          </p>
        </div>        
      </div> 
      <div class="list mt20">
        <span class="icon change"><b></b></span>
        <div class="right">
          <img class="Bubble" src="~@/assets/img/icon/Bubble.png">
          <h5>banban游戏更新再do</h5>
          <p>
            <img  src="~@/assets/img/icon/calendar.png">&ensp;2019-05-08 
            <span>
              <img src="~@/assets/img/icon/hot.png">
              <img src="~@/assets/img/icon/hot.png">
              <img src="~@/assets/img/icon/hot.png">
            </span> &ensp;
            <span><img src="~@/assets/img/icon/game.png">&ensp;未分类</span>
          </p>
        </div>        
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
        this.$router.push({name: 'live', params: {id: id}});
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
    .main{
      overflow: hidden;position: relative;
      .mt20{margin-top: 20px;}
      .list{
        color: #ffca80;
        font-size:20px;
        font-weight: normal;
        display: flex;
        .icon{
          display: inline-block;width:35px;height: 35px;border-radius: 50%;background: #ffca80;text-align: center;margin-right: 20px;position: relative;
          img{width:80%;position: relative;top: 5px;}
          b{display: inline-block;width:10px;height: 10px;border-radius: 50%;background: #ffca80;position: relative;z-index: 1;}
        }
        .change{vertical-align: top;background: transparent;margin-top: 5px;}
        .right{
          background: #fff;width:100%;padding: 15px;position: relative;
          .Bubble{position: absolute;left: -15px;width:10px;width:20px;top: 10px;}
          h5{font-weight: normal;font-size: 16px;color: #666;}
          p{
            font-size: 13px;color: #666;margin-top: 20px;
            img{width:10px;}
          }
        }   
      }
    }
    .main:after{position: absolute;content: '';width:3px;background: #eee;height: 100%;left:15px;top: 35px;z-index: 0;}
  }
</style>
