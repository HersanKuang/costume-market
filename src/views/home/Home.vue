<template>
 <div id="home">
   <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
   <home-swiper :banners="banners"/>
   <recommend-view :recommends="recommends"/>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import { getHomeMultidata } from 'network/home'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>
<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
