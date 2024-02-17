<template>
  <div class="box">
    <div class="lineBox">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>

    <router-view />

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created () {
    // this.$router.push({ name: 'index' })   // если надо пушить в роутре всегда главную страницу при загрузке сайта
  }
}
</script>

<style></style>
