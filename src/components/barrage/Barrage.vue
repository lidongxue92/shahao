<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class="layout-content">
      <!-- 左侧推荐 -->
      <left></left>
      <!-- 中间主体内容 -->
      <div class="middle">
        <div class="serach">
          <select>
            <option value="user">用户名</option>
            <option value="intro">内容</option>
            <option value="time">时间</option>
          </select>
          <input />
          <img class="unfold" src="~@/assets/img/icon/more_unfold.png">
        </div>
        <Barragedetail v-if="show"></Barragedetail>      
      </div>  
      <!-- 右侧分类 -->
      <right></right>
    </div>
  </div>
</template>

<script>
 
  import TopNav from '../common/TopNav.vue';
  import Left from '../index/Left.vue';
  import Barragedetail from './Barragedetail.vue'; 
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
      Barragedetail,
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
        width:62%;margin-left: 1%;
        .serach{
          padding: 20px 15px;background: #fff;border-radius: 30px;border: 1px solid #ddd;position: relative;
          select{position: absolute;left: 15px;border: 0;width:15%;outline: none;appearance: none;font-size: 14px;color: #666;height: 40px;top: 10px;}
          .unfold{position: absolute;left: 12%;width:20px;top: 22px;}
          input{margin-left: 18%;width:80%;border: 0;outline: none;color: #666;}
        }
      }
    }
  }
</style>