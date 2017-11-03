<template lang="html">
  <div class="container">
    <div class="row box_area">
      <div class="col-sm-12">
        <div class="row title">
          <div class="cpn" @click="close"></div>
        </div>
        <div class="row body center">
          {{ content }}
        </div>
        <div class="row btns">
          <div class="col-sm-6 center">
            <button type="button" class="btn btn-info" @click="yes">確定</button>
          </div>
          <div class="col-sm-6 center">
            <button type="button" class="btn btn-secondary" @click="no">取消</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" @click="close">
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'content'
  ],
  methods: {
    yes(){
      this.$emit('result', 1);
      this.$store.commit('setYesNo', false);
    },
    no(){
      this.$emit('result', 0);
      this.$store.commit('setYesNo', false);
    },
    close(){
      this.$store.commit('setYesNo', false);
    }
  }
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
  margin: 0;
  padding: 0;
}
.box_area{
  width: 500px;
  height: 300px;
  z-index: 400;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
}
.bg{
  background-color: rgba(0, 0, 0, .3);
  width: 100vw;
  height: 100vh;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
}
.title{
  border-bottom: 1px solid #b7b9b7;
  height: 55px;
  font-size: 20px;
}
.title .cpn{
  padding: 15px;
  margin-left: 90%;
  background-image: url("https://image.flaticon.com/icons/svg/174/174443.svg");
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.body{
  padding: 20px;
  height: 165px;
  font-size: 24px;
}
.center{
  display:flex;
  align-items:center;
  justify-content:center;
}
.btns{
  height: 80px;
  border-top: 1px solid #b7b9b7;
}
button{
  padding: 5px 18px 5px 18px;
  cursor: pointer;
}
</style>
