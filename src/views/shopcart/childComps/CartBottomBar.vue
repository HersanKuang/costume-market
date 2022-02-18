<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计: {{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '¥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        // 方法一：性能偏低，要全部遍历完
        // if (this.cartList.length === 0) return false
        // return !(this.cartList.filter(item => !item.checked).length)
        /* 隐式转换 */
        // const nom = 0
        // console.log(!num); //true
        // 方法二：
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) { //  全部选中
          this.cartList.forEach(item => item.checked = false)
        } else {  //  部分或全部不选中
          this.cartList.forEach(item => item.checked = true)
        }

        // 这个简化不可以，item.checked和this.isSelectAll会互相改变，会影响上面computed的方法
        // this.cartList.forEach(item => item.checked = !this.isSelectAll)
      },
      calcClick() {
        if (!this.isSelectAll) {
          this.$toast.show('您还没有选择商品哦', 2000)
        }
      }
    }
  }

</script>
<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
}
.check-content {
  margin-left: 5%;
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 20%;
}
.check-button {
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin-right: 5px;
}
.price {
  font-size: 15px;
  flex: 1;
}
.calculate {
  width: 24%;
  font-size: 14px;
  text-align: center;
  background-color: orangered;
}
</style>
