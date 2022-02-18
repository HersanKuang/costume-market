<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/shopcart) = false
      // /home -> item1(/profile) = false
      // indexOf: 当你在this.$router.path中没有找到indexOf里边的path 就等于 -1, 不等于 -1 就是找到
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      // 返回一个判断：isActive 是否处于活跃, 是: 传入activeColor, 否: 传空值
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // console.log('itemClick');
      this.$router.push(this.path)

      // 重写push的方法，避免重复点击报错
      // this.$router.push(this.path).catch(err => {})
    }
  }
}
</script>
<style>
/* 在style标签上添加scoped属性，以表示它的样式作用于当下的模块，很好的实现了样式私有化的目的 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 图片下面会默认多3个像素,这样可以去掉 */
  vertical-align: middle;
  /* 图片下边增加2像素 */
  /* margin-bottom: 2px; */
}

/* .active {
  color: red;
} */
</style>
