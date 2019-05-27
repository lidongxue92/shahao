<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class="layout-content">
      <!-- 左侧推荐 -->
      <left></left>
      <!-- 中间主体内容 -->
      <div class="middle">
        <h5>About</h5>
        <p>感谢肚皮怪带给我的快乐，希望小肚皮们每天都开开心心。</p>

        <img src="~@/assets/img/timg.jpg">
      </div>  
      <!-- 右侧分类 -->
      <right></right>
    </div>
  </div>
</template>

<script>
 
  import TopNav from '../common/TopNav.vue';
  import Left from '../index/Left.vue';
  import Right from '../index/Right.vue';
  export default {
    data() {
      return {
        show:false
      }
    },
    mounted() {
      this.getLiveList();
    },
    methods: {
      getLiveList() {
        this.$http.get(API.getLiveList).then(
          (res) => {
            console.log(res.data+'只不是数据室');
            this.show = true;
          }
        )
      }
    },
    components: {
      TopNav,
      Left,
      Right     
      
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    background: #f5f7f9;
    width: 100%;
    .layout-content{
      margin-top: 20px;padding: 0 10%;display: flex;
      .middle{
        width:62%;margin-left: 1%;background: #fff;padding: 30px 20px;
        h5{font-size: 18px;}
        img{margin-top: 40px;width:100%;}
      }
    }
  }
</style>