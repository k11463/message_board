<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-5"></div>
      <div class="col-sm-2">
        <form>
          <div class="form-group top_box">
            <div class="row">
              <div class="col-sm-12 title">會員登入</div>
            </div>
          </div>
          <div class="form-group box">
            <div class="row">
              <label for="Input_UserName" class="col-sm-3 col-form-label">帳號</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="Input_UserName" placeholder="Enter UserName" v-model="userName">
              </div>
            </div>
          </div>
          <div class="form-group box">
            <div class="row">
              <label for="Input_Password" class="col-sm-3 col-form-label">密碼</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" id="Input_Password" placeholder="Enter Password" v-model="password">
              </div>
            </div>
          </div>
          <div class="form-group msg_box">
            <div class="row">
              <div class="col-sm-12">
                {{ msg }}
              </div>
            </div>
          </div>
          <div class="form-group btn_box">
            <div class="row">
              <div class="col-sm-6">
                <center>
                  <button type="button" v-if="!this.$store.state.user" class="btn btn-info" @click="login">
                    登入
                  </button>
                </center>
                <center>
                  <button type="button" v-if="this.$store.state.user" disabled class="btn btn-info" @click="login">
                    <i class="fa fa-spinner fa-spin"></i>
                    登入中
                  </button>
                </center>
              </div>
              <div class="col-sm-6">
                <center><button type="button" class="btn btn-secondary">取消</button></center>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-sm-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName: "",
      password: "",
      msg: ""
    }
  },
  methods: {
    login(){
      if (this.userName != "" && this.password != ""){
        this.axios.post('/login', {userName: this.userName, password: this.password
        }).then((res) => {
          window.localStorage.setItem('token', res.data[0].token);
          this.$store.dispatch('signIn', {name: res.data[0].name});
          this.$router.push('/');
        }).catch((err) => {
          this.$swal('error', err, "error");
        })
      }
      else{

      }
    }
  }
}
</script>

<style lang="css" scoped>
.title{
  font-size: 26px;
  text-align: center;
  font-family: "KaiTi";
}
input{
  font-size: 18px;
}
input:focus{
  background-color: #fff8d7;
}
label{
  font-size: 18px;
  font-family: "KaiTi";
}
button{
  cursor: pointer;
  font-family: "KaiTi";
}
.top_box{
  margin-top: 10%;
}
.box{
  margin-top: 12%;
}
.ide{
  margin-top: 5px;
}
.msg_box{
  margin-top: 3%;
  text-align: center;
  font-size: 20px;
  color: #f24;
}
.btn_box{
  margin-top: 10%;
}
</style>
