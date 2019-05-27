<template>
  <div class="Middle">
   <p>您可以通过使用TortoiseSVN（俗称“小乌龟”）等任何SVN工具，访问以上SVN分支地址对本APP项目的代码进行提交，更新等操作。操作结果与APICloud Studio的“云端同步”功能相同。登录SVN工具的用户名为您在APICloud注册时的邮箱，密码可通过点击“获取分支密码”获得。</p>   
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .Middle {
    margin-top: 20px;
    width:98%;
    display: inline-block;
    text-align: left;
    padding-bottom: 30px;
    margin-left: 1%;
    font-size: 13px;
    p{width:100%;background: #fff;padding: 20px;border-radius: 10px;} 
  }
</style>
