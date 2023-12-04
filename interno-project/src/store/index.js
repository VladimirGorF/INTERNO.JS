import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notFoundFlag: true, // сеттер для флага перехода на страницу NotFound, по умлочанию true, но если перешли на NotFound, то изменится на false
    projectItemsList: [],
    examplesList: [],
    sliderImagesUrls: [
      // {
      //   url: 'projectDetailsImages/slider1.svg'
      // },
      // {
      //   url: 'indexImages/bannerImage.svg'
      // },
      // {
      //   url: 'indexImages/Blog3.svg'
      // }
    ],
    titleProjectDetails: 'Minimal Look Bedrooms',
    descriptonProjectDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
  },
  mutations: {
    //  перебрасываем наш массив из actions в state
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
    ADD_SliderList (state) { // увеличиваем размер сладеров для бесконечной прокрутки
      state.sliderImagesUrls.push(...[
        {
          url: 'projectDetailsImages/slider1.svg'
        },
        {
          url: 'indexImages/bannerImage.svg'
        },
        {
          url: 'indexImages/Blog3.svg'
        }
      ])
    },
    SET_NotFoundFlag (state, flag) { // сеттер для флага перехода на страницу NotFound
      state.notFoundFlag = flag
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
      }, 500)
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
            title: 'Low Cost Latest Invented Interior Designing <br/> Ideas.'
          },
          {
            url: 'indexImages/Blog3.svg',
            title: 'Best For Any Office & Business Interior <br/> Solution'
          }
        ]
        commit('SET_ExamplesList', examplesList)
      }, 1000)
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
            url: 'indexImages/Blog3.svg'
          }
        ]
        commit('SET_SliderImagesUrls', sliderImagesUrls)
      }, 1000)
    }
  },
  getters: {
    // для вывоза данных из state в другие компоненты
    getProjectItemsList: (state) => state.projectItemsList,
    getExamplesList: (state) => state.examplesList,
    getTitleProjectDetails: (state) => state.titleProjectDetails,
    getDescriptonProjectDetails: (state) => state.descriptonProjectDetails,
    getSliderImagesUrls: (state) => state.sliderImagesUrls,
    getNotFoundFlag: (state) => state.notFoundFlag
  }
})
