<template lang="html">
  <div>
    <center><button @click="open">開啟</button></center>
  </div>
</template>

<script>
export default {
  methods: {
    open(){
      this.$store.dispatch('alertBox', "測試");
    }
  }
}

</script>

<style lang="css" scoped>
h1{
  text-align: center;
}
</style>
