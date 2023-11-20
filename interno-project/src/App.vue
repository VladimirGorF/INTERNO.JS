<template>
  <div>
    <h1>Страница MyHeader</h1>
    <MyHeader />
    <h1>Страница MyFooter</h1>
    <MyFooter />
    <h1>Страница MyIndex</h1>
    <MyIndex />
    <h1>Страница MyBlog</h1>
    <MyBlog />
    <h1>Страница MyBlogDetails</h1>
    <MyBlogDetails />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyIndex from './components/MyIndex.vue'
import MyBlog from './components/MyBlog.vue'
import MyBlogDetails from './components/MyBlogDetails.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyIndex,
    MyBlog,
    MyBlogDetails
  }
}
</script>
