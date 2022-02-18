<template>
 <div class="nav-bar">
   <div class="left"><slot name="left"></slot></div>
   <div class="center"><slot name="center"></slot></div>
   <div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
export default {
  name: "NavBar",
}

</script>
<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.08);
  }
  .left, .right {
    width: 60px;
  }
  .center {
    /* 其他有确定宽度，只剩下这一个它会占据剩余的flex盒子 */
    flex: 1;
  }
</style>
