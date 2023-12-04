<template>
  <div>
    <header></header>
    <MyHeader v-if="!notFoundFlag" />
    <router-view />
    <MyFooter v-if="!notFoundFlag" />
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
    this.$router.push({ name: 'index' }) // пушим в роутре главную страницу при создании
  },
  computed: {
    notFoundFlag () {
      return this.$store.getters.getNotFoundFlag
    }
  }
}
</script>

<style></style>
