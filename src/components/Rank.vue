<template>
  <div class="rank">
    <div class="music" v-for="m in msg">
      <h4>{{ m.name }}</h4>
      <img :src="m.pic_s210" alt="">
      <ul>
        <li v-for="con in m.content">
          {{ con.title }}
          <p>{{ con.author }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name:'Rank',
    data () {
    return {
      msg:''
    }
  },
  created(){
    let url = 'http://api.apiopen.top/musicRankings'
    let that = this
    axios.get(url).then(res => {
        that.msg = res.data.result
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rank{
  margin-top: 4.3rem;
}
.music{
    width:18rem;
    margin: 0 auto;
  }
  .music h4{
    margin:.7rem 0;
    font-size: .8rem;
    font-size: cursive;
    color:#333;
    border-left: 2px solid #d33a31;
    padding-left: .5rem;
  }
  .music img{
    width: 100%;
  }
  .music li{
    font-size: .7rem;
    font-family: serif;
    color:#333;
    margin:1rem 0;
  }
  .music li p{
    font-size: .6rem;
    color:#888
  }
</style>

