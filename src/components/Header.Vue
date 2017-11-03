<template lang="html">
  <div>
    <div class="headerBox">
      <div class="container">
        <router-link to="/" class="home">
          <div>
            首頁
          </div>
        </router-link>
        <router-link to="" class="welcome" v-if="this.$store.state.login">
          <div>
            歡迎：{{this.$store.state.user}}
          </div>
        </router-link>
        <div class="top_box" v-if="!this.$store.state.login">
          <router-link to="/newMessage" class="boxes">
            <div>
              &nbsp;&nbsp;&nbsp;PO文
            </div>
          </router-link>
          <router-link to="/messageBoard/msg" class="boxes">
            <div>
              &nbsp;&nbsp;&nbsp;留言區
            </div>
          </router-link>
          <router-link to="/signUp" class="boxes">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;註冊
            </div>
          </router-link>
          <router-link to="/signIn" class="boxes">
            <div>
              登入
            </div>
          </router-link>
        </div>

        <div class="top_box" v-if="this.$store.state.login">
          <router-link to="/newMessage" class="boxes">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PO文
            </div>
          </router-link>
          <router-link to="/messageBoard/msg" class="boxes">
            <div>
              &nbsp;&nbsp;&nbsp;留言區
            </div>
          </router-link>
          <router-link to="" class="boxes">
            <div>
              會員資料
            </div>
          </router-link>
          <div class="boxes" @click="logOut">
            <div>
              登出
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut(){
      window.localStorage.clear();
      this.$store.commit('setUser', null);
      this.$router.push('/signIn');
    }
  },
}
</script>

<style lang="css" scoped>
.headerBox{
  background-color: #E5FEFF;
  width: 100vw;
  height: 60px;
}
.home{
  float: left;
  height: 60px;
  width: 150px;
  font-size: 25px;
  padding: 8px 0 0 48px;
  margin-left: 10px;
  cursor: pointer;
  display: inline-flex;
  color: #90F0F3;
  text-decoration: none;

}
.home:hover{
  color: #14C2B6;
}
.boxes{
  float: right;
  width: 120px;
  height: 60px;
  font-size: 19px;
  padding: 13px 0px 0px 27px;
  cursor: pointer;
  color: #90F0F3;
  text-decoration: none;
}
.boxes:hover{
  color: #14C2B6;
}
.top_box{
  display: inline-flex;
  float: right;
}
.welcome{
  float: left;
  width: 150px;
  height: 60px;
  font-size: 19px;
  padding: 13px 0px 0px 27px;
  cursor: pointer;
  color: #90F0F3;
  text-decoration: none;
}
.welcome:hover{
  color: #14C2B6;
}
</style>
