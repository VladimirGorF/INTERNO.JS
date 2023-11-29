<template>
  <div class="box">
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
          :class="class1"
          src="projectDetailsImages/slider1.svg"
        />
        <img class="slide" :class="class2" src="indexImages/bannerImage.svg" />
        <img
          class="slide"
          :class="class3"
          src="blogImages/BlogBannerPhoto.svg"
        />
        <button class="next" @click="forward">&gt;</button>
        <button class="prev" @click="back">&lt;</button>
      </div>
    </div>
    <div class="iconsBox">
      <div class="icons">
        <div class="icon" :class="{ checked: class1 === 'active' }"></div>
        <div class="icon" :class="{ checked: class2 === 'active' }"></div>
        <div class="icon" :class="{ checked: class3 === 'active' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectDetails',

  data () {
    return {
      class1: 'active',
      class2: 'outRight',
      class3: 'outRight'
    }
  },

  methods: {
    ...mapGetters(['getTitleProjectDetais', 'getDescriptonProjectDetais']),

    forward () {
      if (this.class1 === 'active') {
        this.class2 = 'active'
        this.class1 = 'outLeft'
      } else if (this.class2 === 'active') {
        this.class3 = 'active'
        this.class2 = 'outLeft'
      }
    },
    back () {
      if (this.class3 === 'active') {
        this.class3 = 'outRight'
        this.class2 = 'active'
      } else if (this.class2 === 'active') {
        this.class2 = 'outRight'
        this.class1 = 'active'
      }
    }
  },
  computed: {
    title () {
      return this.$store.getters.getTitleProjectDetails
    },
    description () {
      return this.$store.getters.getDescriptonProjectDetails
    }
  }
}

// слайдер
</script>

<style lang="scss" scoped>
.banner {
  height: 350px;
  background: url("../../public/projectDetailsImages/Banner.svg") no-repeat;
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
  // top: 0;
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
