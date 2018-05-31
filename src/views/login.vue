<template>
  <div>
    <h1>登录</h1>
    <mt-button type="primary" @click="login">登录</mt-button>
  </div>
</template>
<script>
// import { Button } from 'mint-ui'
import { setToken } from '@/utils/auth'
export default {
  data() {
    return {

    }
  },
  components: {},
  methods: {
    login() {
      setToken('skdfjlskdjflds')
      this.$router.push('/')
    }
  }
}
</script>
