<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class="layout-content">
      <!-- 左侧推荐 -->
      <left></left>
      <!-- 中间主体内容 -->
      <div class="middle">
        <div class="banner">
          <img class="left" src="~@/assets/img/timg.jpg">
          <div class="right">
            <h5>DOTA2</h5>
            <p class="clearfix">
              <span class="fl">最近直播</span><span class="fr c-ffca80">2019-12-29</span>
            </p>
            <p class="clearfix">
              <span class="fl">直播次数</span><span class="fr ">300</span>
            </p>
          </div>
        </div>
        <Filemiddle></Filemiddle>
      </div>
            
      <!-- 右侧分类 -->
      <right></right>
    </div>
  </div>
</template>

<script>
 
  import TopNav from '../common/TopNav.vue';
  import Left from '../index/Left.vue';
  import Filemiddle from '../file/Filemiddle.vue'; 
  import Right from '../index/Right.vue';
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    components: {
      TopNav,
      Left,
      Filemiddle, 
      Right     
      
    }
  }
</script>

<style lang="less" scoped>
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  .layout {
    background: #f5f7f9;
    width: 100%;
    .layout-content{
      margin-top: 20px;padding: 0 10%;display: flex;
      .middle{
        width:62%;
        .banner{
          width:100%;display: flex;height: 160px;margin-bottom: 20px;
          img{width:50%;}
          .right{
            width:50%;background: #fff;padding: 10px 20px;
            h5{font-size: 18px;font-weight: normal;margin-bottom: 30px;}
            p{
              font-size: 13px;line-height: 20px;
              .fl{float: left;}
              .fr{float: right;}
              .c-ffca80{color: #ffca80}
            }
          }
        }
      }
    }
  }
</style>