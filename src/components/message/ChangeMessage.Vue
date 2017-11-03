<template lang="html">
  <div class="container">
    <app-yesno v-if="this.$store.state.yesno" :content='"確定要修改嗎?"' @result="yesno_result"></app-yesno>
    <div class="row mae center">
      <form>
        <div class="form-control body">
          <div class="form-group">
            <div class="row">
              <div class="col-sm-12 title">修改留言</div>
            </div>
          </div>
          <div class="form-group fz">
            <div class="row cpn">
              <div class="col-sm-12">
                <div class="row center">
                  <label for="msg_title" class="col-sm-2">文章標題</label>
                  <input type="text" class="form-control msg_title col-sm-9" id="msg_title" v-model="title">
                  <div class="col-sm-1"></div>
                </div>
              </div>
            </div>
            <div class="row cpn">
              <div class="col-sm-12">
                <label for="msg_content">文章內容</label>
                <textarea rows="16" cols="26" id="msg_content" class="form-control msg_content" v-model="content"></textarea>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row btns">
              <div class="col-sm-6 center">
                <button type="button" class="btn btn-info" @click="isChg">確定修改</button>
              </div>
              <div class="col-sm-6 center">
                <button type="button" class="btn btn-secondary" @click="cancel">取消</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg" @click="cancel">
    </div>
  </div>
</template>

<script>
import YesNo from '../YesNoAlertBox.vue';
export default {
  props: [
    'title',
    'content',
    'id'
  ],
  components: {
    appYesno: YesNo
  },
  methods: {
    isChg(){
      this.$store.commit('setYesNo', true);
    },
    cancel(){
      this.$store.commit('setChgMsg', false);
    },
    yesno_result(value){
      if (value == 1){
        this.axios.post('/chgMsg', {title: this.title, content: this.content, id: this.id}).then((res) => {
          this.$swal('成功', '修改成功', 'success').then(() => {
            location.reload();
          })
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
  user-select: none;
}
.bg{
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.mae{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
}
.center{
  display:flex;
  align-items:center;
  justify-content:center;
}
.body{
  width: 700px;
  height: 800px;
  padding: 20px;
}
.title{
  font-size: 26px;
  text-align: center;
}
.fz{
  font-size: 18px;
}
.cpn{
  margin-top: 4%;
}
label{
  margin-top: 1%;
}
.msg_title{
  font-size: 18px;
}
.btns{
  margin-top: 6%;
}
button{
  cursor: pointer;
}
textarea{
  resize: none;
  font-size: 20px;
  word-break: break-all;
}
</style>
