<template>
 <div class="goods">
   <goods-list-item v-for="item in goods" :goods-item="item"/>
 </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: 'GoodList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
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
  .goods {
    /* 弹性布局：均匀排列每个元素 */
    display: flex;
    /* 规定灵活的项目在必要的时候拆行或拆列，不兼容IE11以下 */
    flex-wrap: wrap;
    /* 每个元素周围分配相同的空间 不兼容IE11以下 */
    justify-content: space-around;
    padding: 2px;
  }
</style>
