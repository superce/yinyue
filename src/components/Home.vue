<template>
  <div class="home">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './header'

export default {
  components:{
    Header
  },
  name: 'Home'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    width: 100%;
    height: 100%;
    background: #F7F9FA;
  }
</style>
