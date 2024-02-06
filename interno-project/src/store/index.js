import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visibility: true,
    projectItemsList: [],
    examplesList: [],
    sliderImagesUrls: [
      // сюда придут данные из actions
    ],
    indexOfLastArticle: -1,
    articles: [], // статьи для ArticlesNews
    titleProjectDetails: 'Minimal Look Bedrooms',
    descriptonProjectDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
  },
  mutations: {
    //  перебрасываем наш массив из actions в state
    SET_articles (state, articles) {
      state.articles = articles
    },
    SET_indexOfLastArticle (state, indexOfLastArticle) {
      state.indexOfLastArticle = indexOfLastArticle
    },
    SET_projectItemsList (state, projectItemsList) {
      state.projectItemsList = projectItemsList
    },
    SET_ExamplesList (state, examplesList) {
      state.examplesList = examplesList
    },
    SET_SliderImagesUrls (state, sliderImagesUrls) {
      // примет картинки из actions, но по факту не принимает
      state.sliderImagesUrls = sliderImagesUrls
    },
    SET_Visibility (state, flag) { // сеттер для флага перехода на страницу NotFound
      state.visibility = flag
    }
  },
  actions: {
    // имитируем полученные данных из удаленной БД записывая из в нужную мутацию, которая отвечает за изменение данных массива в state
    fetchData ({ commit }) {
      setTimeout(() => {
        const projectItemsList = [
          {
            url: 'indexImages/Item1.svg',
            title: 'Modern Kitchan',
            text: 'Decor / Artchitecture'
          },
          {
            url: 'indexImages/Item2.svg',
            title: 'Modern Kitchan',
            text: 'Decor / Artchitecture'
          },
          {
            url: 'indexImages/Item3.svg',
            title: 'Modern Kitchan',
            text: 'Decor / Artchitecture'
          },
          {
            url: 'indexImages/Item4.svg',
            title: 'Modern Kitchan',
            text: 'Decor / Artchitecture'
          }
        ]
        commit('SET_projectItemsList', projectItemsList)
      }, 100)
    },
    fetchDataArticles ({ commit }) {
      setTimeout(() => {
        const articlesList = [
          {
            id: 0,
            url: '/blogImages/Blog1.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 1,
            url: '/blogImages/Blog4.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '15 September,1614',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 2,
            url: '/blogImages/Blog2.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 3,
            url: '/blogImages/Blog3.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 4,
            url: '/blogImages/Blog5.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 5,
            url: '/blogImages/Blog6.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 6,
            url: '/blogImages/Blog1.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 7,
            url: '/blogImages/Blog2.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 8,
            url: '/blogImages/Blog3.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 9,
            url: '/blogImages/Blog4.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 10,
            url: '/blogImages/Blog5.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 December,2022'
          },
          {
            id: 11,
            url: '/blogImages/Blog6.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 12,
            url: '/blogImages/Blog1.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 13,
            url: '/blogImages/Blog2.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 14,
            url: '/blogImages/Blog3.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 15,
            url: '/blogImages/Blog4.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 16,
            url: '/blogImages/Blog5.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 17,
            url: '/blogImages/Blog6.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 18,
            url: '/blogImages/Blog1.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 19,
            url: '/blogImages/Blog2.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 20,
            url: '/blogImages/Blog3.svg',
            title: 'Best For Any Office & Business Interior Solution',
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 21,
            url: '/blogImages/Blog4.svg',
            title: "Let's Get Solution For Building Construction Work",
            dateBoxText: '26 December,2022',
            text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
          },
          {
            id: 22,
            url: '/blogImages/BannerPostPhoto.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            dateBoxText: '26 January,2024',
            text: 'Last article ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica'
          }
        ]
        commit('SET_articles', articlesList)
      }, 100)
    },
    fetchDataExamples ({ commit }) {
      setTimeout(() => {
        const examplesList = [
          {
            url: 'indexImages/Blog1.svg',
            title: 'Let’s Get Solution For Building Construction Work'
          },
          {
            url: 'indexImages/Blog2.svg',
            title: 'Low Cost Latest Invented Interior Designing Ideas.'
          },
          {
            url: 'indexImages/Blog3.svg',
            title: 'Best For Any Office & Business Interior Solution'
          }
        ]
        commit('SET_ExamplesList', examplesList)
      }, 100)
    },
    fetchDataSliderImagesUrls ({ commit }) {
      setTimeout(() => {
        const sliderImagesUrls = [
          {
            url: 'projectDetailsImages/slider1.svg'
          },
          {
            url: 'indexImages/bannerImage.svg'
          },
          {
            url: 'blogImages/BannerPostPhoto.svg'
          }
        ]
        commit('SET_SliderImagesUrls', sliderImagesUrls)
      }, 100)
    }
  },
  getters: {
    // для вызова данных из state в другие компоненты
    getProjectItemsList: (state) => state.projectItemsList,
    getArticlesList: (state) => state.articles,
    getindexOfLastArticle: (state) => state.indexOfLastArticle,
    getExamplesList: (state) => state.examplesList,
    getTitleProjectDetails: (state) => state.titleProjectDetails,
    getDescriptonProjectDetails: (state) => state.descriptonProjectDetails,
    getSliderImagesUrls: (state) => state.sliderImagesUrls,
    getVisibility: (state) => state.visibility
  }
})
