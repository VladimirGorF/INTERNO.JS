<template>
  <div>
    <div class="box__blog">
      <h2 class="title">Articles & News</h2>
      <p class="boxBlogText">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div class="examples">
        <div class="examples__Item" v-for="item in examplesList" :key="item.id">
          <img :src="item.url" alt="examples__image" class="examples__image" />
          <h2 class="title">
            {{ item.title }}
          </h2>
          <div class="dateBox">
            <p class="dateBoxText">26 December,2022</p>
            <router-link to="/blog">
              <svg
                class="dateBoxImage"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                @click="makeSound()"
              >
                <circle
                  class="circle"
                  cx="26"
                  cy="26.2671"
                  r="26"
                  fill="#F4F0EC"
                />
                <path
                  d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexBlog',

  methods: {
    ...mapMutations(['SET_ExamplesList']),
    ...mapActions(['fetchDataExamples']),
    ...mapGetters(['getExamplesList']),
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3')
      )
      audio.play()
    }
  },
  computed: {
    examplesList () {
      return this.$store.getters.getExamplesList
    }
  },
  created () {
    // при создании вызывается мутация SET_ExamplesList и в нее передаются из коммита в actions данные из fetchData
    this.SET_ExamplesList(this.fetchDataExamples())
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1440px) and (min-width: 1024px) {
  .examples {
    grid-template-columns: repeat(3, 270px);
  }
  .examples__image {
    max-width: 230px;
  }
  .box__blog .examples .examples__Item .title {
    max-width: 305px;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .examples {
    grid-template-columns: repeat(3, 235px);
  }
  .examples__image {
    max-width: 194px;
  }
  .box__blog .examples .examples__Item .title {
    font-size: 21px !important;
  }
}

@media (max-width: 767px) {
  .box__blog {
    margin-bottom: 177px;
  }
  .box__blog .title {
    font-size: 40px;
  }
  .box__blog .boxBlogText {
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .box__blog .examples {
    grid-template-columns: repeat(1, 90%);
  }
  .box__blog .examples .examples__Item {
    max-width: 100%;
  }
  .box__blog .examples .examples__Item .examples__image {
    width: 100%;
  }
}
</style>
