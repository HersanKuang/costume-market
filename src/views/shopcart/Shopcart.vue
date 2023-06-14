<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar>
      <template #center class="nav-bar">购物车({{length}})</template>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'
 
export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // 两种语法
    // ...mapGetters(['cartLength', 'cartList'])
    ...mapGetters({
      length: 'cartLength'
    })
  }
};
</script>
<style scoped>
  .cart {
    height: 100vh;
    overflow: hidden;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
  }
</style>
