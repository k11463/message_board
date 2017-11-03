<template lang="html">
  <div>
    <div class="container soto">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-12 title">
              <router-link to="/messageBoard/msg" class="title01">
                留言區
              </router-link>
            </div>
          </div>
          <div class="row msg">
            <div class="col-sm-12">
              <router-view></router-view>
            </div>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
*{
  font-family: "KaiTi";
}
.soto{
  margin-top: 1.5%;
}
.msg{
  margin-top: 2%;
}
.title{
  font-size: 28px;
  width: 100vw;
  height: 70px;
  padding: 10px;
  text-align: center;
}
.title01{
  text-decoration: none;
  color: black;
  cursor: default;
}
</style>
