<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <scroll 
      class="content" 
      ref="scroll" 
      :probeType="3" 
      @scroll="contentScroll" 
    >
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <home-feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <!-- <goods-list :goods="goods[currentType].list"/> -->
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/TabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backTop/BackTop"

import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import HomeFeatureView from "./childComps/HomeFeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home"

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  methods: {
    //
    //
    //
    //
    // 事件监听的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = "new"
          break;
        case 2:
          this.currentType = "sell"
          break;
      }
    },
    backClick() {
      // ref绑定的组件scroll的scroll.scrollTo方法(x, y, ms)
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      this.$refs.scroll.scrollTo(0, 0)
      // console.log('-----');
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = (-position.y) > 900
    },
    // loadMore() {
    //   this.getHomeGoods(this.currentType)
    // },
    //
    //
    //
    //
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then((res) => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
#home {
  /* 第一种方案 */
  /* padding-top: 44px; */
  padding-top: 40px;
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  /* position: sticky; */
  /* top: 44px; */
  background-color: #fff;
  /* z-index: 9; */
}
.content {
  /* height: 300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* background-color: #fff; */
}

/* 第一种方案 */
/* .content { */
/* height: 300px; */
/* 设置home的高度(屏幕高度-标签栏49-导航栏44) */
/* height: calc(100% - 93px);
    overflow: hidden;
  } */
</style>
