<template lang="html">
  <div>
    <div class="bg">
      <div class="gif"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
*{
  z-index: 99999;
  margin: 0;
  padding: 0;
}
.bg{
  background-color: rgba(0, 0, 0, .1);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display:flex;
  align-items:center;
  justify-content:center;
}
.gif{
  background-image: url("https://loading.io/spinners/spinner/lg.ajax-spinner-preloader.gif");
  width: 300px;
  height: 300px;
}
</style>
