<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/balance">积分</router-link>
    <router-link to="/myCoupon">卡券</router-link>
    <router-link to="/integral">积分</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '会员中心基础路由测试'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: #39f;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: yellow;
    }
  }
</style>
