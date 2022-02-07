<template>
  <swiper>
     <swiper-item v-for="item in banners">
       <a :href="item.image">
         <img :src="item.image" alt="">
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
      }
    }
  }

</script>
<style scoped>
</style>
