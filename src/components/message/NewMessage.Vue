<template lang="html">
  <div class="container">
    <div class="row body">
        <form class="form-control">
          <div class="form-group col-sm-12">
            <div class="row title">
              <div class="col-sm-12">新增留言</div>
            </div>
            <div class="row">
              <div class="col-sm-12 msg">{{ msg }}</div>
            </div>
            <div class="row msgTitle">
              <label for="title" class="col-sm-2">文章標題</label>
              <input type="text" class="form-control col-sm-10" id="title" v-model="title" :class="{'is-invalid': titleNull}">
            </div>
            <div class="row msgContent">
              <label for="content" class="col-sm-12">文章內容</label>
              <textarea rows="18" cols="30" class="form-control col-sm-12" id="content" v-model="content"></textarea>
            </div>
            <div class="row msgBtn">
              <div class="col-sm-6">
                <center><button type="button" class="btn btn-success" @click="send">送出文章</button></center>
              </div>
              <div class="col-sm-6">
                <center><button type="button" class="btn btn-secondary">取消</button></center>
              </div>
            </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "",
      content: "",
      msg: "",
    }
  },
  methods: {
    send(){
      if (this.title == ""){
        this.msg = "標題不可為空!!";
      }
      else{
        this.msg = "";
        this.axios.post('/newMsg', {name: this.$store.state.user, title: this.title, content: this.content, identity: this.$store.state.identity}).then((res) => {
          this.$swal('新增成功', "新增文章成功，立刻跳轉業面", "success").then((res) => {
            setTimeout(() => {
              this.$router.push("/messageBoard/msg");
            }, 1000);
          })
        }).catch((err) => {
          alert(err);
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
}
.title{
  font-size: 28px;
  text-align: center;
  margin-top: 4%;
}
form{
  position: absolute;
  padding: 0 30px 0 30px;
  width: 700px;
  height: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2%;
}
label{
  font-size: 18px;
  margin-top: 5px;
}
input{
  height: 35px;
}
.msgTitle{
  height: 40px;
}
textarea{
  resize: none;
  font-size: 17px;
  word-break: keep-all;
}
.msgContent{
  margin-top: 5%;
  margin-bottom: 7%;
}
.msgBtn{
  margin-bottom: 10%;
}
.msg{
  color: #f24;
  text-align: center;
  font-size: 17px;
  margin-top: 6%;
}
button{
  cursor: pointer;
  padding: 5px;
}
</style>
