<template>
  <div>
    <MyHeader />
    <div class="projactDetalsPage">
      <div class="banner"></div>
      <div class="informBox">
        <div class="inform">
          <h1 class="title">{{ title }}</h1>
          <p class="description">{{ description }}</p>
        </div>
      </div>
      <div class="sliderBox">
        <div id="sliderID" :class="sliderBoxClass">
          <img
            class="slide"
            :class="getImageClass(index)"
            v-for="(item, index) in sliderUrls"
            :key="index"
            :src="item.url"
            alt="Слайдер №"
          />
          <button class="next" @click="forward()">&gt;</button>
          <button class="prev" @click="back()">&lt;</button>
          <a href="#sliderID">
            <img
              :class="searchImageClass"
              src="../../../assets/images/projectPageImages/search.svg"
              alt="searchImg"
              @click="preview()"
            />
          </a>
        </div>
      </div>
      <div class="iconsBox">
        <div class="icons">
          <!-- Рисуем иконки и присваиваем класс checked по номеру активного слайда. -->
          <div
            class="icon"
            :class="{
              checked: activeSlide === index,
            }"
            v-for="(item, index) in sliderUrls"
            :key="index.id"
            @click="move(index)"
          ></div>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '../../pages/MyHeader.vue'
import MyFooter from '../../pages/MyFooter.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ProjectDetails',
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      sliderBoxClass: 'slider',
      activeSlide: 0,
      searchImageClass: 'searchImage'
    }
  },
  created () {
    this.SET_SliderImagesUrls(this.fetchDataSliderImagesUrls())
  },
  methods: {
    preview () {
      this.makeSoundPreview()
      if (this.sliderBoxClass === 'slider') {
        this.sliderBoxClass = 'sliderBig'
      } else {
        this.sliderBoxClass = 'slider'
      }
    },
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-v-prostranstve-priglushennyii-blizkii.mp3')
      )
      audio.play()
    },
    makeSoundSlider () {
      const audio = new Audio(
        require('../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3')
      )
      audio.play()
    },
    makeSoundPreview () {
      const audio = new Audio(
        require('../../../assets/sounds/multfilm-stun-fail-oshibka-knopka-parametryi-videoigryi-43032.mp3')
      )
      audio.play()
    },

    // регистрируем все геттеры
    ...mapGetters([
      'getTitleProjectDetais',
      'getDescriptonProjectDetais',
      'getSliderImagesUrls'
    ]),
    ...mapMutations(['SET_SliderImagesUrls']),
    ...mapActions(['fetchDataSliderImagesUrls']),

    getImageClass (index) {
      if (index < this.activeSlide) {
        return 'outLeft'
      }
      if (index === this.activeSlide) {
        return 'active'
      }
      if (index > this.activeSlide) {
        return 'outRight'
      }
    },

    forward () {
      this.makeSoundSlider()
      if (this.activeSlide < this.sliderUrls.length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },
    back () {
      this.makeSoundSlider()
      if (this.activeSlide > 0) {
        this.activeSlide--
      } else {
        this.activeSlide = this.sliderUrls.length - 1
      }
    },
    move (indexOfClicked) {
      if (this.activeSlide !== indexOfClicked) {
        this.makeSoundSlider()
        this.activeSlide = indexOfClicked
      }
    }
  },
  computed: {
    title () {
      return this.$store.getters.getTitleProjectDetails
    },
    description () {
      return this.$store.getters.getDescriptonProjectDetails
    },
    sliderUrls () {
      return this.$store.getters.getSliderImagesUrls
    }
  }
}

// слайдер
</script>

<style lang="scss" scoped>
.banner {
  height: 350px;
  background: url("../../../../public/projectDetailsImages/Banner.svg")
    no-repeat;
  background-position: 50% 50%;
  margin-bottom: 150px;
}

.informBox {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  .inform {
    width: 658px;
    .title {
      color: #292f36;
      font-family: "DM Serif Display";
      font-size: 50px;
      margin-bottom: 10px;
    }
    .description {
      color: #4d5053;
      font-family: "Jost";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
}

// стили слайдера

.sliderBox {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  // height: 800px;
}
.slider {
  width: 60vw;
  height: 60vh;
  position: relative;
  overflow: hidden;
  transition: 1s;
}

.sliderBig {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  transition: 1s;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 1s ease-in-out;
}

.outRight {
  top: 10px;
  left: 1650px;
  z-index: -1;
}
.outLeft {
  top: 10px;
  left: -1650px;
  z-index: -1;
}

.active {
  left: 0px;
  top: 10px;
}

button {
  border-radius: 20px;
  position: absolute;
  top: 50%;
  opacity: 0.4;
  width: 100px;
  font-size: 50px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.1);
  opacity: 0.6;
}

.prev {
  left: 5%;
}

.next {
  right: 5%;
}

.searchImage {
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.4;
}

.searchImage:hover {
  opacity: 0.7;
}

.iconsBox {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  .icons {
    display: flex;
    gap: 10px;
    cursor: pointer;
    .icon {
      width: 20px;
      height: 20px;
      border: 1px solid;
      border-radius: 50%;
    }
    .checked {
      background-color: bisque;
      transition: 1s;
    }
  }
}
</style>
