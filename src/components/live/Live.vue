<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class="layout-content">
      <!-- 左侧推荐 -->
      <left></left>
      <!-- 中间主体内容 -->
      <LiveMiddle></LiveMiddle>      
      <!-- 右侧分类 -->
      <right></right>
    </div>
  </div>
</template>

<script>
 
  import TopNav from '../common/TopNav.vue';
  import Left from '../index/Left.vue';
  import LiveMiddle from './LiveMiddle.vue'; 
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
      LiveMiddle, 
      Right     
      
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    background: #f5f7f9;
    width: 100%;
    .layout-content{margin-top: 20px;padding: 0 10%;display: flex;}
  }
  .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{display: inline-block;}
</style>