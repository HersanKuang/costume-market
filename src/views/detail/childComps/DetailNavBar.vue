<template>
 <div>
   <nav-bar>
      <template #left>
        <div>
          <img src="~assets/img/common/back.svg" alt="" class="back" @click="backClick">
        </div>
      </template>
     <template #center>
       <div class="title">
          <div
            v-for="(item, index) in titles" 
            class="title-item" 
            :class="{active: index === currentIndex}"
            @click="titleClick(index)"
          >
          {{item}}
          </div>
       </div>
     </template>
   </nav-bar>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: { 
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }

</script>
<style scoped>
.title {
  display: flex;
  font-size: 13.5px;
  padding-left: 20px;
  padding-right: 20px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  width: 25%;
  height: 25%;
}
</style>
