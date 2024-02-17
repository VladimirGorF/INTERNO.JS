<template>
  <div>
    <MyHeader />
    <div class="box__blogDetailsPage">
      <div class="articleBlogBanner"></div>
      <div id="app" class="articlesBox">
        <div class="articles">
          <MyBlogArticles :Tag="Tag" />

          <div class="right">
            <div class="title">Tags</div>
            <div class="tagsBox">
              <a
                href="#app"
                class="button"
                v-for="tag in tags"
                :key="tag.id"
                :class="[tag.id === activeTagId && Tag ? 'buttonVisited' : '']"
                @click="
                  activeTagId = tag.id;
                  showArticles(tag.name);
                  makeSound();
                "
              >
                {{ tag.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '../../pages/MyHeader.vue'
import MyFooter from '../../pages/MyFooter.vue'
import MyBlogArticles from './MyBlogArticles.vue'

export default {
  name: 'MyBlogDetails',
  components: {
    MyBlogArticles,
    MyHeader,
    MyFooter
  },
  data () {
    return {
      activeTagId: '0',
      Tag: '',
      tags: [
        { id: 0, name: 'Kitchen' },
        { id: 1, name: 'Bedroom' },
        { id: 2, name: 'Architecture' },
        { id: 3, name: 'Building' },
        { id: 4, name: 'Kitchen Planing' }
      ]
    }
  },

  methods: {
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3')
      )
      audio.play()
    },

    showArticles (nameOfTag) {
      this.Tag === nameOfTag ? (this.Tag = '') : (this.Tag = nameOfTag)
      // если придет клик с уже кликнутого Тега, то обнуляем фильтр, а если фильтр обнулен, то устанавливаем по клику новый
    }
  }
}
</script>
