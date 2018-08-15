<template>
  <div id="app">
    <div class="container-fluid">
      <app-header/>
      <div class="d-flex flex-row pt-5">
        <transition
          name="slide"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  created () {
    this.$store.dispatch('loadStocks')
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
