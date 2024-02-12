<template>
  <div class="box">
    <div class="lineBox">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>

    <MyHeader />
    <router-view />
    <MyFooter v-if="visibility" />
  </div>
</template>

<script>
import MyHeader from './components/pages/MyHeader.vue'
import MyFooter from './components//pages/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  created () {
    // this.$router.push({ name: 'index' }) // пушим в роутре главную страницу при загрузке сайта
  },
  computed: {
    visibility () {
      return this.$store.getters.getVisibility // запрашиваем флаг через геттер в store
    }
  }
}
</script>

<style></style>
