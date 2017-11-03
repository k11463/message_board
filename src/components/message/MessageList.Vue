<template lang="html">
  <div class="row soto" @click="click">
        <div class="col-sm-1 identity">{{ msg.msg_identity }}</div>
        <div class="col-sm-2 name">{{ msg.msg_name }}</div>
        <div class="col-sm-7 title">{{ msg.msg_title }}</div>
        <div class="col-sm-2 time">{{ msg.msg_time }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'msg',
    'id'
  ],
  methods: {
    click(){
      this.$router.push(`/messageBoard/watchMessage/${this.id}`);
      window.localStorage.setItem('index', this.id);
    }
  }
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
  font-size: 20px;
  height: 60px;
  user-select: none;
}
.row{
  border: 1px solid;
}
.identity{
  padding: 13px 0 0 10px;
}
.time{
  font-size: 15px;
  padding: 8px 0 0 24px;
}
.name{
  padding: 13px 0 0 40px;
}
.title{
  padding: 13px 0 0 10px;
}
.soto{
  cursor: pointer;
}
.soto:hover{
  background-color: #F0f0f0;
}
</style>
