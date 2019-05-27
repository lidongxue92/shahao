<template>
  <div class="Middle">
    <div class="list">
      <p class="img">
        <img @mouseenter="changeActive($event)" @mouseleave="removeActive($event)" src="~@/assets/img/timg.jpg">
      </p>      
      <div class="bottom">
        <h4>起床开箱子。</h4>
        <img  src="~@/assets/img/icon/calendar.png">&ensp;2019-05-08 
        <span>
          <img src="~@/assets/img/icon/hot.png">
          <img src="~@/assets/img/icon/hot.png">
          <img src="~@/assets/img/icon/hot.png">
        </span> &ensp;
        <span><img src="~@/assets/img/icon/game.png">&ensp;未分类</span>
        <a href="javascript:" class="more" v-on:click="toDetailLive(1)">查看更多</a>
      </div>
    </div>
     <div class="list">
      <p class="img">
        <img @mouseenter="changeActive($event)" @mouseleave="removeActive($event)" src="~@/assets/img/timg.jpg">
      </p>      
      <div class="bottom">
        <h4>起床开箱子。</h4>
        <img src="~@/assets/img/icon/calendar.png">&ensp;2019-05-08 
        <span>
          <img src="~@/assets/img/icon/hot.png">
          <img src="~@/assets/img/icon/hot.png">
          <img src="~@/assets/img/icon/hot.png">
        </span> &ensp;
        <span><img src="~@/assets/img/icon/game.png">&ensp;未分类</span>
        <a href="javascript:" class="more" v-on:click="toDetailLive(2)">查看更多</a>
      </div>
    </div>
    
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        list: [],
        seen:false,
        current:0
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
      },
      changeActive($event) {
        $event.currentTarget.className = 'imganimate';
      },
      removeActive($event) {
        $event.currentTarget.className = 'imgout';
      }
    }
  }
</script>

<style lang="less" scoped>
  .Middle {
    width:62%;
    display: inline-block;
    text-align: center;
    padding-bottom: 30px;
    margin-left: 1%;
    .list{
      background: #fff;
      overflow: hidden;
      width:100%;
      position: relative;
      height: 400px;
      margin-bottom: 20px;
      .img{
        width:100%;overflow: hidden;
        img{width:100%;overflow: hidden}
      }
      .imganimate{animation:bounce-in 1s forwards}
      @keyframes bounce-in {
        0%   {transform: scale(1);}
        100% {transform: scale(1.1);}
      }
      .imgout{animation:bounce 1s forwards}
      @keyframes bounce {
        0%   {transform: scale(1.1);}
        100% {transform: scale(1);}
      }
      .bottom{
        position: absolute;background: #fff;bottom: 0px;width:100%;padding: 20px 2%;text-align: left;
        h4{font-size: 18px;margin-bottom: 10px;}
        img{width:15px;position: relative;top: 3px;} 
        span{margin-left: 10px;}
        .more{background: #eee;color: #999;width:80px;text-align: center;border-radius: 30px;padding:3px 0;margin-top: 20px;display: block;}
        .more:hover{background: #ffca80;color: #f8f8f8;}
      }
    } 
  }
</style>
