<template>
  <div class="live-panel">     
    <embed  height="360" allownetworking="all" allowscriptaccess="always" src="https://staticlive.douyucdn.cn/common/share/play.swf?room_id=228989" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true"  allowFullScreenInteractive="true" type="application/x-shockwave-flash">
    <!-- <video
      id="myVideo"
      class="video-js"
      >
      <source
          src="//vjs.zencdn.net/v/oceans.mp4"
          type="video/mp4"
      >
      </video> -->
    <div class="intro">
      <h1>{{name}}</h1>
      <p>
        <img src="~@/assets/img/icon/calendar.png">&ensp;2019-05-08 
        <span>
          <img src="~@/assets/img/icon/hot.png">
          <img src="~@/assets/img/icon/hot.png">
          <img src="~@/assets/img/icon/hot.png">
        </span> &ensp;
        <span><img src="~@/assets/img/icon/game.png">&ensp;未分类</span>
      </p>
    </div>
    <charts></charts>
    <p class="detail"><span><b>直播时长</b>458</span><span><b>弹幕总数</b>458</span></p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Charts from './Charts'
  import Video from 'video.js'
  import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video
  // import API from '../../config/request';
  export default {
    data() {
      return {
        name: 'banban游戏更新再do',
        intro: '加载中'
      }
    },
    created() {
      // this.getLiveData();
    },
    mounted() { 
        this.initVideo()
    },
    methods: {
      initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "100%",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px"
        });
      }      
    },
    components: {
      Video,
      Charts,
      Vue
    }
  }
</script>
<style type="text/css">
.myVideo-dimensions{width:100%;}
</style>
<style lang="less" scoped>
  .live-panel {
    padding: 10px;
    width:62%;
    margin-left: 1%;
    embed{width:100%;}
    .intro{
      margin-top: 20px;background: #fff;padding: 15px;margin-bottom: 20px;
      p{
        font-size: 13px;color: #666;margin-top: 15px;
        img{width:10px;}
      }
    }
    .detail{
      display: flex;background: #fff;width:100%;font-size: 14px;
      span{
        display: inline-block;width:50%;
        b{margin-right: 30px;}
      }
    }
  }
</style>
