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
      <div class="slider">
        <img
          class="slide"
          :class="getClass(index)"
          v-for="(item, index) in sliderUrls"
          :key="index"
          :src="item.url"
          alt="Слайдер №"
        />
        <button class="next" @click="forward();makeSound();">&gt;</button>
        <button class="prev" @click="back();makeSound();">&lt;</button>
      </div>
    </div>
    <div class="iconsBox">
      <div class="icons">
        <!-- Присваиваем класс checked по номеру активного слайда -->
        <div
          class="icon"
          :class="{ checked: [0, 3, 6].includes(activeSlide) }"
        ></div>
        <div
          class="icon"
          :class="{ checked: [1, 4, 7].includes(activeSlide) }"
        ></div>
        <div
          class="icon"
          :class="{ checked: [2, 5, 8].includes(activeSlide) }"
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
      activeSlide: 0
    }
  },
  created () {
    this.SET_SliderImagesUrls(this.fetchDataSliderImagesUrls())
  },
  methods: {
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/jeleznaya-knopka-vyiklyucheniya1.mp3')
      )
      audio.play()
    },
    // регистрируем все геттеры
    ...mapGetters([
      'getTitleProjectDetais',
      'getDescriptonProjectDetais',
      'getSliderImagesUrls'
    ]),
    ...mapMutations(['SET_SliderImagesUrls', 'ADD_SliderList']),
    ...mapActions(['fetchDataSliderImagesUrls']),

    // если выходим за границы слайдера то будем повторять показ, увеличивая наш массив слайдерских картинок
    getClass (index) {
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
      if (this.activeSlide < this.sliderUrls.length - 1) {
        this.activeSlide++
      } else {
        if (this.activeSlide <= 2) {
          // если он будет на последнем слайде, то увеличим массив слайдера на три элемента
          this.ADD_SliderList()
          setTimeout(() => {
            // нужна небольшая задержка на переходе с поледнего слайда для плавности
            this.activeSlide++
          }, 10)
        }
      }
    },
    back () {
      if (this.activeSlide > 0) {
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
  background: url("../../../../public/projectDetailsImages/Banner.svg") no-repeat;
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
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.slider {
  width: 1200px;
  height: 800px;
  position: relative;
  overflow: hidden;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 1s ease-in-out;
}
.outRight {
  left: 1200px;
}
.outLeft {
  left: -1200px;
}

.active {
  left: 0;
}

button {
  border-radius: 20px;
  position: absolute;
  top: 50%;
  opacity: 0.4;
}

.prev {
  width: 100px;
  left: 10px;
  font-size: 50px;
}

.next {
  width: 100px;
  right: 10px;
  font-size: 50px;
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
