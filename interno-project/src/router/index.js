import Vue from 'vue'
import Router from 'vue-router'

import MyIndex from '../components/pages/Index/MyIndex.vue'
import ProjectDetails from '../components/pages/ProjectDetails/ProjectDetails.vue'
import MyHeader from '../components/pages/MyHeader.vue'
import MyFooter from '../components/pages/MyFooter.vue'
import MyBlog from '../components/pages/MyBlog.vue'
import MyBlogDetails from '../components/pages/MyBlogDetails.vue'
import MyProject from '../components/pages/MyProject/MyProject.vue'
import PageNotFound from '../components/pages/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //  адреса будет показывать без хеша #  у мод три режима
  routes: [ // здесь прописываем пути роутера
    {
      path: '/index',
      name: 'index',
      component: MyIndex
    },
    {
      path: '/projectDetails',
      name: 'projectDetails',
      component: ProjectDetails
    }, {
      path: '/header',
      name: 'header',
      component: MyHeader
    }, {
      path: '/footer',
      name: 'footer',
      component: MyFooter
    }, {
      path: '/blog',
      name: 'blog',
      component: MyBlog
    }, {
      path: '/blogDetails',
      name: 'blogDetails',
      component: MyBlogDetails
    }, {
      path: '/project',
      name: 'project',
      component: MyProject
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '*',
      redirect: '/404' // перенаправляется на /404
    }

  ]
})
