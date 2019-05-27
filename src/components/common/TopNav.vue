<template>
<div class="top">
  <span class="icon" v-on:click="toIndex()">
    <img src="~@/assets/img/bread.png">
    &ensp;傻浩直播
  </span>
  <ul>
    <li v-on:click="toIndex()"><img src="~@/assets/img/icon/home.png">&ensp;首页</li>
    <li v-on:click="toclassification()"><img src="~@/assets/img/icon/category.png">&ensp;分类</li>
    <li v-on:click="tofile()"><img src="~@/assets/img/icon/File.png">&ensp;归档</li>
    <li v-on:click='tobarrage()'><img src="~@/assets/img/icon/Barrage.png">&ensp;弹幕</li>        
    <li v-on:click="toabout()"><img src="~@/assets/img/icon/about.png">&ensp;关于</li>
  </ul>
</div>
</template>

<script>
  import API from '../../config/request';
  export default {
    computed: {
      unauth() {
        if (this.$store.state.user.userId !== '') {
          return false;
        }
        else {
          return true;
        }
      },
      accessToken() {
        return this.$store.state.user.accessToken;
      }
    },
    created() {

    },
    methods: {
      
      toIndex() {
        this.$router.push('/')
      },
      toclassification(){
        this.$router.push('/classification')
      },
      tofile(){
        this.$router.push('/file')
      },
      tobarrage(){
        this.$router.push('/barrage')
      },
      toabout(){
        this.$router.push('/about')
      }
    }
  }
</script>

<style lang="less" scoped>
body{font-family: Muli,'Helvetica Neue','Hiragino Sans GB','WenQuanYi Micro Hei','Microsoft Yahei',sans-serif !important;}
  .top {
    background: #fff;
    padding: 0 10%;
    .icon{
      font-size: 12px;cursor: pointer;
      img{height: 40px;position: relative;top: 10px;}
    }
    ul {
      margin-left: 30px;display: inline-block;
      li{display: inline-block;padding: 10px 20px;cursor: pointer;
        img{width:20px;position: relative;top: 5px;}
      }
    }

  }

</style>
