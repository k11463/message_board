<template lang="html">
  <div>
    <app-chg v-if="this.$store.state.chgMsg" :title="this.$store.state.msg[this.$route.params.id].msg_title" :content="this.$store.state.msg[this.$route.params.id].msg_content" :id="this.$store.state.msg[this.$route.params.id].msg_id"></app-chg>
    <div class="container">
      <form class="form-control">
        <div class="form-group">
          <div class="row top">
              <div class="col-sm-1">
                <div class="msg_id"># {{ this.$store.state.msg[this.$route.params.id].msg_id }}</div>
              </div>
              <div class="col-sm-1 top-left">
                <div class="row center">
                  <div class="identity">{{ this.$store.state.msg[this.$route.params.id].msg_identity }}</div>
                </div>
                <div class="row center">
                  <div class="name">{{ this.$store.state.msg[this.$route.params.id].msg_name }}</div>
                </div>
              </div>
              <div class="col-sm-8 center">
                <div class="row">
                  <div class="title">{{ this.$store.state.msg[this.$route.params.id].msg_title }}</div>
                </div>
              </div>
              <div class="col-sm-2 center">
                <div class="row">
                  <div class="time">{{ this.$store.state.msg[this.$route.params.id].msg_time }}</div>
                </div>
              </div>
          </div>
          <div class="row mid">
            <div class="col-sm-12">
              <!--<div class="content">{{ this.$store.state.msg[this.$route.params.id].msg_content }}</div>-->
              <textarea rows="18" cols="65" class="content" v-model="this.$store.state.msg[this.$route.params.id].msg_content" readonly></textarea>
            </div>
          </div>
          <div class="row form-control bot center" v-if="this.$store.state.isUser">
            <div class="col-sm-6 center">
              <button type="button" class="btn btn-info" @click="edit_msg">修改文章</button>
            </div>
            <div class="col-sm-6 center">
              <button type="button" class="btn btn-secondary">刪除文章</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import chgMsg from './ChangeMessage.vue';
export default {
  methods: {
    edit_msg(){
      this.$store.commit('setChgMsg', true);
    }
  },
  components: {
    appChg: chgMsg
  }
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
  user-select: none;
}
.msg_id{
  font-size: 18.5px;
}
form{
  width: 700px;
  height: 620px;
}
.top{
  border-bottom: 1px solid #d6d6d6;
  width: 700px;
  height: 60px;
}
.top-left{
  font-size: 18px;
}
.title{
  font-size: 22px;
  padding: 11px;
}
.center{
  display:flex;
  align-items:center;
  justify-content:center;
}
.mid{
  padding: 30px;
  height: 550px;
  font-size: 18px;
}
.bot{
  height: 60px;
  margin-right: 20px;
  width: 700px;
  margin-left: -12px;
}
button{
  cursor: pointer;
}
.content{
  word-break: keep-all;
  border: none;
  resize: none;
  outline: none;
}
</style>
