<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <form>
          <div class="form-group top_box">
            <div class="row">
              <div class="col-sm-12 title">會員註冊</div>
            </div>
          </div>
          <div class="form-group box">
            <div class="row">
              <label for="Input_Name" class="col-sm-2 col-form-label">姓名</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="Input_Name" placeholder="Enter Name" v-model="name">
              </div>
              <label for="Input_UserName" class="col-sm-2 col-form-label">帳號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="Input_UserName" placeholder="Enter UserName" v-model="userName">
              </div>
            </div>
          </div>
          <div class="form-group box">
            <div class="row">
              <label for="Input_Password" class="col-sm-2 col-form-label">密碼</label>
              <div class="col-sm-4">
                <input type="password" :class="{'is-invalid': passwordCurrect}" class="form-control" id="Input_Password" placeholder="Enter Password" v-model="password">
              </div>
              <label for="Confirm_Password" class="col-sm-2 col-form-label">確認密碼</label>
              <div class="col-sm-4">
                <input type="password" :class="{'is-invalid': confirmPasswordCurrect}" class="form-control" id="Confirm_Password" placeholder="Confirm Password" v-model="confirmPassword">
              </div>
            </div>
          </div>
          <div class="form-group box">
            <div class="row">
              <label for="Input_Email" class="col-sm-2 col-form-label">信箱</label>
              <div class="col-sm-6">
                <input type="email" :class="{'is-invalid': emailCurrect}" aria-describedby="emailHelp" class="form-control" id="Input_Email" placeholder="Enter Email" v-model="email">
              </div>
            </div>
          </div>
          <div class="form-group box">
            <div class="row">
              <label for="Input_Phone" class="col-sm-2 col-form-label">手機號碼</label>
              <div class="col-sm-4">
                <input type="text" :class="{'is-invalid': phoneCurrect}" class="form-control" id="Input_Phone" placeholder="Enter Phone" v-model="phone">
              </div>
              <label for="identity" class="col-sm-2 ide">選擇身分</label>
              <select class="form-control col-sm-4" id="identity" v-model="identity">
                <option disabled value="" selected>請選擇您的身分</option>
                <option value="買家">買家</option>
                <option value="賣家">賣家</option>
              </select>
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
              <div class="col-sm-4"></div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-info" @click="signUp()">註冊</button>
              </div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-secondary">取消註冊</button>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
      identity: "",
      msg: "",
      passwordCurrect: false,
      emailCurrect: false,
      phoneCurrect: false
    }
  },
  methods: {
    signUp(){
      if (this.name == "" || this.userName == "" || this.passwordCurrect == true || this.email == "" || this.phone == "" || this.identity == ""){
          this.msg = "有表格未填入資料，或是資料格式錯誤!";
      }
      else{
        if (this.password == this.confirmPassword){
          this.axios.post('/signUp/send', {
            userName: this.userName,
            name: this.name,
            password: this.password,
            email: this.email,
            phone: this.phone,
            identity: this.identity
          }).then((res) => {
              this.$swal('註冊成功', "您已註冊成功!", "success").then((res) =>{
                setTimeout(() => {
                  this.$router.push("/signIn");
                }, 1000);
              })
          }).catch((err) => {
            this.$swal('失敗', '註冊失敗', 'error').then((res) => {
              location.reload();
            })
          })
        }
      }
    }
  },
  watch: {
    password (value){
      if (value.length >= 0 && value.length < 4){
        this.msg = "密碼不可少於4個字!";
        this.passwordCurrect = true;
      }
      else{
        this.msg = "";
        this.passwordCurrect = false;
      }
    },
    email (value){
      var regex = new RegExp("^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$", "g");
      if (!regex.test(this.email)){
        this.msg = "信箱格式錯誤!!";
        this.emailCurrect = true;
      }
      else{
        this.msg = "";
        this.emailCurrect = false;
      }
    },
    phone (value){
      if (this.phone.length >= 0 && this.phone.length < 10){
        this.msg = "這個國家沒有小於10位數的手機，請重新輸入!";
        this.phoneCurrect = true;
      }
      else{
        this.msg = "";
        this.phoneCurrect = false;
      }
    }
  },
  computed: {
    confirmPasswordCurrect(){
      var isCurrect;
      if (this.password !== this.confirmPassword){
        isCurrect = true;
        this.msg = "輸入的密碼不一致，請確認密碼輸入一致!";
      }
      else{
        this.msg = "";
        isCurrect = false;
      }
      return isCurrect;
    }
  }
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
}
.title{
  font-size: 26px;
  text-align: center;
}
select{
  font-size: 18px;
}
input{
  font-size: 18px;
}
input:focus{
  background-color: #fff8d7;
}
label{
  font-size: 18px;
}
button{
  cursor: pointer;
}
.top_box{
  margin-top: 3%;
}
.box{
  margin-top: 7%;
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
  margin-top: 3%;
}
</style>
