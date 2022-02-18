<template>
 <div class="tab-control">
   <div v-for="(item, index) in titles" 
        class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
     <span>{{item}}</span>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      },
      // subcategories: {
      //   type: Object,
      //   default() {
      //     return {}
      //   }
      // },
      // categoryDetail: {
      //   type: Array,
      //   default() {
      //     return []
      //   }
      // }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        // vm.$emit( eventName, […args] ) 即 vm.$emit(事件, 参数)
        this.$emit('tabClick', index)
      }
    }
  }

</script>
<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
