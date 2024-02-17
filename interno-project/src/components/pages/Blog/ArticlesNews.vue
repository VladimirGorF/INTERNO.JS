<template>
  <div>
    <div id="app" class="box__blogPage">
      <div class="blogPageContent">
        <div id="articles&news" class="titleBlogPage">Articles & News</div>
        <div class="examples">
          <MyArticle
            v-for="item in sliceProducts"
            :key="item.id"
            :item="item"
          />
          <!-- Нужно забиндить :item = "item" чтобы его увидел дочерний компонент тогда он попадет в его Props -->
        </div>
        <div class="pagination">
          <div class="pagBox">
            <a
              href="#articles&news"
              class="page"
              @click="
                backPage();
                pagesCounterFunc();
                makeSound();
                getProducts(activePageId, 6);
              "
              >&lt;</a
            >
            <a
              href="#articles&news"
              class="page"
              v-for="page in slicePages"
              :key="page.id"
              :class="{ active: page.id === activePageId }"
              @click="
                activePageId = page.id;
                getProducts(page.id, 6);
                pagesCounterFunc();
                makeSound();
                movePage(page.id);
              "
              >0{{ page.id }}</a
            >
            <a
              href="#articles&news"
              class="page"
              @click="
                forwardPage();
                pagesCounterFunc();
                makeSound();
                getProducts(activePageId, 6);
              "
              >&gt;</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import MyArticle from './MyArticle'
export default {
  name: 'ArticlesNews',
  components: {
    MyArticle
  },
  data () {
    return {
      pageStart: 1, // начало отображения страниц
      pageEnd: 4,
      pagesQuantity: 1,
      activePageId: 1, // активная подсвечиваемая страница по умолчанию
      pages: [],
      products: [],
      productStart: 0,
      productEnd: 6,
      productsQuantity: 0
    }
  },
  created () {
    // при создании вызывается мутация SET_articles и в нее передаются из коммита в actions данные из fetchDataArticles
    this.SET_articles(this.fetchDataArticles())
    this.productsGet()
    this.pagesCounterFunc()
  },
  methods: {
    ...mapMutations(['SET_articles']),
    ...mapActions(['fetchDataArticles']),
    ...mapGetters(['getArticlesList']),

    productsGet () {
      setTimeout(() => {
        if (this.$store.getters.getArticlesList.length) {
          this.products = this.$store.getters.getArticlesList // получаем из хранилища
        }
      }, 100)
    },

    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3')
      )
      audio.play()
    },
    movePage (page) {
      if (
        this.pageEnd > this.pagesQuantity + 1 ||
        page === this.pagesQuantity
      ) {
        return page // бессмысленный возврат для linter
      } else if (page + 1 === this.pageEnd) {
        this.pageStart += 1
        this.pageEnd += 1
      } else if (page === this.pageStart && this.pageStart !== 1) {
        this.pageStart -= 1
        this.pageEnd -= 1
      }
    },
    forwardPage () {
      if (this.activePageId === this.pagesQuantity) {
        // значит и переключаться не надо никуда
        return
      } else if (this.pageEnd === this.pagesQuantity + 1) {
        this.activePageId += 1
        return
      } else if (this.activePageId === 1) {
        this.activePageId += 1
        return
      }
      this.pageStart += 1
      this.pageEnd += 1
      this.activePageId += 1
    },
    backPage () {
      if (this.activePageId === 1) {
        return
      } else if (this.pageStart - 1 <= 1) {
        this.pageStart = 1
        this.pageEnd = 4
        this.activePageId -= 1
        return
      } else if (this.activePageId === this.pagesQuantity) {
        this.activePageId -= 1
        return
      }
      this.activePageId -= 1
      this.pageStart -= 1
      this.pageEnd -= 1
    },
    getProducts (page, step) {
      if (this.activePageId === 1) {
        this.productStart = 0
        this.productEnd = 6
      } else {
        this.productEnd = step * page + 1
        this.productStart = this.productEnd - 6
      }
    },
    pagesCounterFunc () {
      const pagesQuantity = Math.ceil(this.products.length / 6) // определяем количество страниц
      for (let i = 2; i < pagesQuantity + 2; i++) {
        this.pages.push({
          id: i,
          class: ''
        })
      }
      this.pagesQuantity = pagesQuantity
    }
  },
  computed: {
    sliceProducts () {
      if (this.products.length) {
        return this.products.slice(this.productStart, this.productEnd) // срез продуктов на вывод по 6 штук на странице
      }
      return []
    },
    slicePages () {
      return this.products.slice(this.pageStart, this.pageEnd) // срез страниц
    }
  }
}
</script>

<style lang="scss" scoped></style>
