<template>
  <swiper>
     <swiper-item v-for="item in banners">
       <a :href="item.image">
         <img :src="item.image" alt="" @load="imageLoad">
       </a>
     </swiper-item>
   </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      // 轮播图片加载完了获取的offsetTop才是正确的
      imageLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }

</script>
<style scoped>
</style>
