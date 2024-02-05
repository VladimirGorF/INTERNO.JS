<template>
  <div>
    <div class="box__Post">
      <div class="postMain">
        <div id="main" class="title">Latest Post</div>
        <div class="contentPost">
          <img :src="lastArticle.url" alt="imagePost" class="imagePost" />
          <div class="informPost">
            <div class="titleInformPost">
              {{ lastArticle.title }}
            </div>
            <div class="textPost">
              {{ lastArticle.text }}
            </div>
            <div class="dateBox">
              <p class="dateBoxText">
                {{ lastArticle.dateBoxText }}
              </p>
              <a href="#articles&news">
                <svg
                  class="dateBoxImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle
                    class="circle"
                    cx="26"
                    cy="26.2671"
                    r="26"
                    fill="#F4F0EC"
                  />
                  <path
                    d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'ArticlesNews',
  data () {
    return {
    }
  },

  created () {
    // при создании вызывается мутация SET_articles и в нее передаются из коммита в actions данные из fetchDataArticles
    this.SET_articles(this.fetchDataArticles())
  },
  methods: {
    ...mapMutations(['SET_articles'], ['SET_indexOfLastArticle']),
    ...mapActions(['fetchDataArticles']),
    ...mapGetters(['getArticlesList'], ['getindexOfLastArticle'])
  },
  computed: {
    lastArticle () {
      // проверка на пустоту, данные приходят с имитацией задержки в store и вылетит ошибка без них
      if (this.$store.getters.getArticlesList.length) {
        // берем индекс из store (он там стоит -1 изначально)
        const index = this.$store.getters.getindexOfLastArticle
        //  последняя статья по умолчанию
        return this.$store.getters.getArticlesList.slice(index)[0]
      }
      // возвращаем пустой объект, пока не придут данные и мы не уйдем автоматически в if
      return {
        id: 0,
        url: '',
        title: '',
        dateBoxText: '',
        text: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
