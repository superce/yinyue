<template>
<div>
  <div class="fixed">
    <div class="title">
      <h1>
        策哥音乐网
      </h1>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(nav,index) in nav" :key="index" @click="toggle(index)" :class="{active:index === navI}">{{ nav }}</li>
      </ul>
    </div>    
  </div>
  <div class="nav-box">
    <Rank v-show="navI === 0"/>
    <Hot v-show="navI === 1"/>
    <Search v-show="navI === 2"/>
  </div>
</div>
</template>

<script>
  import Rank from './Rank'
  import Hot from './Hot'
  import Search from './Search'
  export default {
    components:{
      Rank,
      Hot,
      Search
    },
    name:'Header',
    data(){
      return{
        nav:['排行榜','电台','搜索'],
        navI:0
      }
    },
    methods:{
      toggle(index){
        this.navI = index
      }
    }
  }
</script>

<style scoped>
.fixed{
  width:100%;
  position: fixed;
  top:0;
  left:0;
}
h1{
  width: 100%;
  color:#fff;
  background: #d43c33;
  font-size: 1rem;
  line-height: 2.5rem;
  padding-left:1rem;
  letter-spacing: 0;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px -2px 0px #333, 0px -5px 7px #001135 
}
ul{
  display: flex; 
  justify-content: space-around;
  line-height: 1.5rem;
  box-shadow: 0 1px 6px #ccc;
  background: #fff;
}
li{
  font-size: .8rem;
  padding: 0 1rem;
  font-family: cursive;
}
li.active{
  color:#d33a31;
  border-bottom: 1px solid #d33a31;
}
.nav-box .none{
  display: none;
}
</style>

