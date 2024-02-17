<template>
  <div class="left">
    <article class="article" v-for="item in itemsList" :key="item.id">
      <div v-if="Tag === item.tagArticle || Tag === ''">
        <h2 class="title">
          {{ item.title }}
        </h2>
        <p class="text" v-if="item.text">
          {{ item.text }}
        </p>
        <p class="text" v-if="item.text2">
          <span class="numbers">1</span>
          {{ item.text2 }}
        </p>
        <p class="text" v-if="item.text3">
          <span class="numbers">2</span>
          {{ item.text3 }}
        </p>
        <p class="text" v-if="item.text4">
          <span class="numbers">3</span>
          {{ item.text4 }}
        </p>
        <img class="articleImage" :src="item.url" alt="articleImage" />
        <div class="dateInformation">
          <div class="left">{{ item.dateBoxText }}</div>
          <div class="right">{{ item.type }}</div>
        </div>
        <p class="text" v-if="item.text5">
          {{ item.text5 }}
        </p>
        <p class="text" v-if="item.text5">
          {{ item.text6 }}
        </p>
        <div class="sloganBox" v-if="item.sloganCheck">
          <div class="commas">,,</div>
          <div class="subtitle">
            {{ item.subtitle }}
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'MyBlogDetails',
  props: ['Tag'],

  created () {
    // при создании вызывается мутация  и в нее передаются из коммита в actions данные из fetch
    this.SET_articlesBlog(this.fetchDataArticlesBlog())
  },

  data () {
    return {}
  },
  methods: {
    ...mapMutations(['SET_articlesBlog']),
    ...mapActions(['fetchDataArticlesBlog']),
    ...mapGetters(['getArticlesBlogList'])
  },
  computed: {
    itemsList () {
      return this.$store.getters.getArticlesBlogList
    }
  }
}
</script>
