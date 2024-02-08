<template>
  <div class="box">
    <div class="box__lineMainBox">
      <div class="lineBox">
        <div class="box projectDetails"></div>
        <div class="box projectDetails"></div>
        <div class="box projectDetails"></div>
      </div>
    </div>
    <div class="banner"></div>
    <div class="informBox">
      <div class="inform">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
      </div>
    </div>
    <div class="sliderBox">
      <img
        class="searchImage"
        src="../../../assets/images/projectPageImages/search.svg"
        alt="searchImg"
        @click="preview()"
      />
      <div :class="sliderBoxClass">
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
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ProjectDetails',
  data () {
    return {
      sliderBoxClass: 'slider',
      activeSlide: 0
    }
  },
  created () {
    this.SET_SliderImagesUrls(this.fetchDataSliderImagesUrls())
    this.SET_Visibility(true) //  передаем true во флаг страницы NotFound
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
    ...mapMutations(['SET_SliderImagesUrls', 'SET_Visibility']),
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

    // если выходим за границы слайдера то будем повторять показ, увеличивая наш массив адресов слайдерских картинок
    forward () {
      if (this.activeSlide < this.sliderUrls.length - 1) {
        this.makeSoundSlider()
        this.activeSlide++
      }
    },
    back () {
      if (this.activeSlide > 0) {
        this.makeSoundSlider()
        this.activeSlide--
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
  margin-bottom: 20px;
}
.slider {
  width: 800px;
  height: 800px;
  position: relative;
  overflow: hidden;
  transition: 1s;
}

.sliderBig {
  width: 1500px;
  height: 1200px;
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
  top: 100px;
  left: 1500px;
  z-index: -1;
}
.outLeft {
  top: 100px;
  left: -1500px;
  z-index: -1;
}

.active {
  left: 0px;
  top: 100px;
}

button {
  border-radius: 20px;
  position: absolute;
  top: 55%;
  opacity: 0.3;
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
  left: 10px;
}

.next {
  right: 10px;
}

.searchImage {
  position: absolute;
  top: 50%;
  left: 45%;
  z-index: 2;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.4;
}

.searchImage:hover {
  transform: scale(1.1);
  opacity: 0.7;
}

.iconsBox {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  .icons {
    display: flex;
    gap: 10px;
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
