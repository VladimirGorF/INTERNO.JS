<template>
  <div>
    <div class="box__blogBanner">
      <div class="titleBox">
        <div class="title">Articles & News</div>
        <div class="text">Home / Blog</div>
      </div>
    </div>
    <LastArticle />
    <ArticlesNews />
  </div>
</template>

<script>
import ArticlesNews from './ArticlesNews'
import LastArticle from './LastArticle'
import { mapMutations } from 'vuex'
export default {
  name: 'MyBlog',
  components: {
    ArticlesNews,
    LastArticle
  },
  created () {
    this.SET_Visibility(true) //  передаем true во флаг страницы NotFound
  },
  methods: {
    ...mapMutations(['SET_Visibility'])
  }
}
</script>
