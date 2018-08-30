<template>
  <div>
    <div class="wscn-http404">
      404
    </div>
    <router-link class="goIndex" to="/">返回用户中心</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404 {
  display: block;
  position: relative;
  margin: 60px auto 20px;
  padding: 0 100px;
  overflow: hidden;
  font-size: 30px;
  text-align: center;
  background: linear-gradient(to bottom, red, yellow);
  -webkit-background-clip: text;
  color: transparent;
  animation-name: bounceIn;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  animation-iteration-count: infinite;
}
.goIndex {
  display: block;
  width: 50%;
  height: 2rem;
  margin: 0 auto;
  background: #26a2ff;
  line-height: 2rem;
  color: #fff;
  text-align: center;
  border-radius: 1rem;
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
