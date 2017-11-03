<template lang="html">
  <div>
    <div v-if="this.$store.state.hasMsg">
      <message-list v-for="(msg, index) in this.$store.state.msg" :msg="msg" :id="index"></message-list>
    </div>
    <div class="noMsg" v-if="!this.$store.state.hasMsg">
      目前沒有任何留言
    </div>
  </div>
</template>

<script>
import MessageList from './MessageList.vue';
export default {
  components: {
    MessageList,
  }
}
</script>

<style lang="css" scoped>
.noMsg{
  font-size: 20px;
  text-align: center;
  margin-top: 5%;
}
</style>
