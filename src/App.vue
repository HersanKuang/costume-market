<template>
 <div id="app">
   <router-view/>
   <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: "app",
  components: {
    MainTabBar
  },
  data() {
    return {
    }
  },
  methods: {
  }
}

</script>
<style>
@import 'assets/css/base.css';
</style>
