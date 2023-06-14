<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <tab-control 
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tabControl"
      v-show="isTabFixed"
      ref="tabControlShift"
    />
    <scroll 
      class="content" 
      ref="scroll" 
      :probeType="3" 
      @scroll="contentScroll" 
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature-view/>
      <tab-control 
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <!-- <goods-list :goods="goods[currentType].list"/> -->
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/TabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"

import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import HomeFeatureView from "./childComps/HomeFeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home"
import { backTopMixin } from 'common/mixin'
export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView
  },
  mixins: [backTopMixin],
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
      tabOffsetTop: 0,
      isTabFixed: false
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
      // 让两个tabControl保持同步
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControlShift.currentIndex = index
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 900

      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },
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
      })
      .catch((err) => {
        console.log(err);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
      .then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
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
  position: relative;
  height: 100vh;
  /* 解决BetterScroll滚动顶部和底部的bug */
  overflow:hidden;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabControl {
  position: relative;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}

/* 第一种方案 */
/* .content { */
/* height: 300px; */
/* 设置home的高度(屏幕高度-标签栏49-导航栏44) */
/* height: calc(100% - 93px); */
    /* overflow: hidden; */
  /* } */
</style>
