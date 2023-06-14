<template>
  <div id="profile">
    <nav-bar class="nav-bar"><template #center>我的档案</template></nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <user-info></user-info>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <!--3.封装成一个整体-->
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'
  import NavBar from 'components/common/navbar/NavBar'

  import message from 'assets/img/profile/message.svg'
  import pointer from 'assets/img/profile/pointer.svg'
  import vip from 'assets/img/profile/vip.svg'
  import cart from 'assets/img/profile/cart.svg'
  import shopping from 'assets/img/profile/shopping.svg'

	export default {
		name: "Profile",
    components: {
		  UserInfo, ListView, NavBar
    },
    data: function () {
		  return {
		    orderList: [
          {path: message, info: '我的消息'},
          {path: pointer, info: '积分商城'},
          {path: vip, info: '会员卡'},
        ],
        serviceList: [
          {path: cart, info: '我的购物车'},
          {path: shopping, info: '下载购物APP'},
        ]
      }
    }
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }

</style>
