<template lang="html">
  <div>
    <div class="bg center">
      <div class="box">
        <div class="content center">
          {{ this.$store.state.alertBox.content }}
        </div>
        <div class="button center">
          <button type="button" class="btn btn-success" @click="close">我知道了</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close(){
      this.$store.commit('setAlertOpen', false);
      if (this.$store.state.alertBox.site != null){
        this.$router.push(this.$store.state.alertBox.site);
      }
      this.$store.commit('setAlertSite', null);
    }
  }
}
</script>

<style lang="css" scoped>
*{
  z-index: 99999;
  margin: 0;
  padding: 0;
  font-family: "KaiTi";
}
.bg{
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, .1);
}
.box{
  background-color: white;
  width: 400px;
  height: 220px;
  border-radius: 30px;
}
.content{
  font-size: 22px;
  height: 150px;
}
.center{
  display:flex;
  align-items:center;
  justify-content:center;
}
.button{
  height: 60px;
}
button{
  height: 40px;
  width: 80px;
  cursor: pointer;
}
</style>
