<template lang="html">
  <div id="app">
    <app-alertBox v-if="this.$store.state.alertBox.open"></app-alertBox>
    <app-header></app-header>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AlertBox from './components/AlertBox.vue';
export default {
  components: {
    appHeader: Header,
    appAlertBox: AlertBox
  }
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
