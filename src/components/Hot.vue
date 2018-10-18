<template>
  <div class="hot">
    <div class="content">
      <h3>{{ title.title }}</h3>
      <ul>
        <li v-for="ca in title.channellist">
          <img :src="ca.thumb" :alt="ca.name">
          <h4>{{ ca.cate_sname }}</h4>
        </li>
      </ul>
    </div>
    <div class="content">
      <h3>{{ title2.title }}</h3>
      <div class="con-list" >
        <ul>
          <li v-for="(t,index) in title2.channellist" :key="index">
            <img :src="t.avatar" :alt="t.name">
            <p>{{ t.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
   name:'Hot',
   data(){
     return{
       title:'',
       title2:''
     }
   },
   created(){
     let url = 'http://api.apiopen.top/musicBroadcasting'
     axios.get(url).then(res => {
      this.title = res.data.result[0];
      this.title2 = res.data.result[1]
     })
   }
  }
</script>
<style scoped>
  .hot{
    width:18rem;
    margin: 0 auto;
    margin-top: 4.3rem;
  }
  .content h3{
    font-size: .9rem;
    color:#333;
    font-family: cursive;
    line-height: 1.5rem;
  }
  .content ul{
    display: flex;
    flex-wrap: wrap;
  }
  .content li{
    width:5.5rem;
    margin:0 .25rem;
  }
  .content li img{
    width:100%;
  }
  .content li h4{
    font-size: .7rem;
    font-family: cursive;
  }
</style>

