<template>
  <div>
    <MyHeader />
    <div class="box__blogBanner">
      <div class="titleBox">
        <div class="title">Articles & News</div>
        <div class="text">Home / Blog</div>
      </div>
    </div>
    <LastArticle />
    <ArticlesNews />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '../../MyHeader.vue'
import MyFooter from '../../MyFooter.vue'
import ArticlesNews from './ArticlesNews'
import LastArticle from './LastArticle'
export default {
  name: 'MyBlog',
  components: {
    ArticlesNews,
    LastArticle,
    MyHeader,
    MyFooter
  }
}
</script>
