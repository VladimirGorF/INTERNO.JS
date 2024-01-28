<template>
  <div class="box">
    <div class="box__lineMainBox">
      <div class="lineBox">
        <div class="box blog"></div>
        <div class="box blog"></div>
        <div class="box blog"></div>
      </div>
    </div>
    <div class="box__blogBanner">
      <div class="titleBox">
        <div class="title">Articles & News</div>
        <div class="text">Home / Blog</div>
      </div>
    </div>
    <ArticlesNews />
  </div>
</template>

<script>
import ArticlesNews from './ArticlesNews'
export default {
  name: 'MyBlog',
  components: {
    ArticlesNews
  }
}
</script>
