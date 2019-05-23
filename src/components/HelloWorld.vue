<template>
  <div class="box">
    <div class="jump" @click="jumpTabar">
      点我
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:'helloWord',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log('Hello Word')
  },
  methods:{
    jumpTabar(){
      this.$router.push({
        path:'/tabBar',
        query:{
          test:'aaa'
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .box{
    width: 100%;
    height: 100%;
    background: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    .jump{
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: black;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
