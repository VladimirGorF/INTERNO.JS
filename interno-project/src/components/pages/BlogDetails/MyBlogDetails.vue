<template>
  <div>
    <div class="box__blogDetailsPage">
      <div class="articleBlogBanner"></div>
      <div id="app" class="articlesBox">
        <div class="articles">

          <MyBlogArticles :Tag = "Tag"/>

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
  </div>
</template>

<script>
import MyBlogArticles from './MyBlogArticles.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'MyBlogDetails',
  components: {
    MyBlogArticles
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
  created () {
    this.SET_Visibility(true) //  передаем true во флаг страницы NotFound
  },
  methods: {
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3')
      )
      audio.play()
    },
    ...mapMutations(['SET_Visibility']),

    showArticles (nameOfTag) {
      this.Tag === nameOfTag ? (this.Tag = '') : (this.Tag = nameOfTag)
      // если придет клик с уже кликнутого Тега, то обнуляем фильтр, а если фильтр обнулен, то устанавливаем по клику новый
    }
  }
}
</script>
