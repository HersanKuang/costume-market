<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    emits: ['close'],
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }

</script>
<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check {
  background-color: lightpink;
  border-color: lightpink;
}
</style>
