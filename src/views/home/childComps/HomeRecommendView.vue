<template>
 <div class="recommend">
   <div v-for="item in recommends" class="recommend-item">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
      }
    }
  }

</script>
<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    /* 弹性布局，均匀分布item */
    flex: 1;
  }
  .recommend-item img {
    width: 75px;
    height: 75px;
    margin-bottom: 8px;
  }

</style>
