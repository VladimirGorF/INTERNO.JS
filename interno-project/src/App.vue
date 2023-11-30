<template>
  <div>
    <!-- <h1>Страница MyHeader</h1>
    <MyHeader />
    <h1>Страница MyFooter</h1>
    <MyFooter /> -->
    <!-- <h1 style="display: flex; justify-content: center;">Страница MyIndex</h1>
    <MyIndex /> -->
    <!-- <h1>Страница MyBlog</h1>
    <MyBlog /> -->
    <!-- <h1>Страница MyBlogDetails</h1>
    <MyBlogDetails /> -->
    <!-- <h1>Страница Project</h1>
    <MyProject /> -->
        <h1>Страница ProjectDetails</h1>
    <ProjectDetails />
  </div>
</template>

<script>
import ProjectDetails from './components/ProjectDetails/ProjectDetails.vue'

// import MyHeader from './components/MyHeader.vue'
// import MyFooter from './components/MyFooter.vue'
// import MyIndex from './components/Index/MyIndex.vue'
// import MyBlog from './components/MyBlog.vue'
// import MyBlogDetails from './components/MyBlogDetails.vue'
// import MyProject from './components/MyProject/MyProject.vue'

export default {
  name: 'App',
  components: {
    ProjectDetails
  }
}
</script>
