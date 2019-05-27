<template>
  <div class="Left">
    <img class="headimg" src="~@/assets/img/bread.png">
    <h4>傻浩</h4>
    <h5>傻浩直播平台主播</h5>
    <p><img src="~@/assets/img/icon/position.png">&ensp;啥子圈子</p>
    <span class="button" v-on:click="toDetailLive()">关注一下</span>
    <p class="follow">
      <span>
        <b>4189</b>
        关注
      </span>
      <span>
        <b>418</b>
        粉丝
      </span>
    </p>
    <p class="gouser">
      <a href="javascript:" title="STEAM" v-on:click="tosteam()">
        <img src="~@/assets/img/icon/steam.png">
      </a>
      <a href="javascript:" title="微博" v-on:click="toweibo()">
        <img src="~@/assets/img/icon/weibo.png">
      </a>
      <a href="javascript:" title="傻浩吧" v-on:click="tomsg()">
        <img src="~@/assets/img/icon/msg.png">
      </a>
      <a href="javascript:" title="云音乐" v-on:click="tomusic()">
        <img src="~@/assets/img/icon/music.png">
      </a>
    </p>
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
        alert('跳斗鱼')
      },
      tosteam(id) {
        alert('跳steam')
      },
      toweibo(id) {
        alert('跳微博')
      },
      tomsg(id) {
        alert('跳斗鱼贴吧')
      },
      tomusic(id) {
        alert('跳音乐')
      }
    }
  }
</script>

<style lang="less" scoped>
  .Left {
    width:20%;
    display: inline-block;
    text-align: center;
    background: #fff;
    padding-bottom: 30px;
    vertical-align: top;
    height: 500px;
    .headimg {
      width:50%;
      margin-top: 50px;
    }
    h4{font-size: 16px;}
    h5{font-weight: normal;font-size: 13px}
    p{
      font-size: 12px;
      img{width:10px;}
    }
    .button{display: inline-block;width:50%;margin-top: 30px;background: #ffca80;color: #f8f8f8;text-align: center;height: 30px;line-height: 30px;border-radius: 30px;cursor: pointer;}
    .follow{
      display: flex;
      margin-top: 20px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
      padding: 15px 0;
      span{
        display: inline-block;width:50%;text-align: center;border-left: 1px solid #eee;
        b{display: block;font-size: 15px;}
      }
    }
    .gouser{
      display: flex;
      margin-top: 20px;
      a{
        display: inline-block;width:25%;text-align: center;color: #495060;
        img{width:20px;}
      }
    }
  }
</style>
